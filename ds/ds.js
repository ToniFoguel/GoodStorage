/* ============================================================
   DS Runtime — comportamento dos componentes do Design System
   ------------------------------------------------------------
   Camada de comportamento "auto-init". Você escreve o HTML do DS
   (mesmas classes do Figma) e marca a raiz com data-ds="<nome>".
   Ao carregar a página, o runtime varre o DOM e liga o componente.

   Uso:
     <script src="/ds/ds.js" defer></script>
     <div class="select" data-ds="select"> ... </div>

   API pública (window.DS):
     DS.init(root)      -> liga componentes dentro de root (default: document)
     DS.refresh()       -> re-varre o DOM (após inserir markup dinâmico)
     DS.openModal(id)   -> abre um modal por id
     DS.closeModal(el)  -> fecha um modal (ou o do topo, sem arg)
     DS.on(el,evt,fn)   -> atalho de addEventListener

   Cada componente dispara CustomEvents com prefixo "ds:".
   Ex.: select -> "ds:change" {value}, table -> "ds:sort", etc.
   ============================================================ */
(function () {
  'use strict';

  /* -------------------------------------------------- utils */
  var registry = {};
  function register(name, fn) { registry[name] = fn; }
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $all(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }
  function emit(el, name, detail) {
    el.dispatchEvent(new CustomEvent('ds:' + name, { bubbles: true, detail: detail || {} }));
  }
  function setIcon(useEl, id) { if (useEl) useEl.setAttribute('href', '#' + id); }

  /* camada de "popovers abertos": fecha ao clicar fora / Esc */
  var layers = []; // { root, close }
  function trackLayer(root, close) {
    var layer = { root: root, close: close };
    layers.push(layer);
    return function untrack() {
      var i = layers.indexOf(layer);
      if (i > -1) layers.splice(i, 1);
    };
  }
  document.addEventListener('mousedown', function (e) {
    layers.slice().forEach(function (l) {
      if (!l.root.contains(e.target)) l.close();
    });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && layers.length) layers.slice().reverse()[0].close();
  });

  /* ==================================================================
     SELECT — single, com busca (typeahead) e multi (tags)
     Markup: .select > .select__field > (.select__value | .select__search)
             .select__dropdown > .select__list > .select__item
     ================================================================== */
  register('select', function (root) {
    if (root.classList.contains('select--disable') || root.classList.contains('select--readonly')) return;

    var field = $('.select__field', root);
    var dropdown = $('.select__dropdown', root);
    var iconUse = $('.select__icon svg use', root);
    var searchInput = $('.select__search', root);
    var isMulti = root.hasAttribute('data-ds-multi') || (field && field.classList.contains('select__field--tags'));
    if (!field || !dropdown) return;

    var items = $all('.select__item', dropdown);
    var empty = $('.select__empty', dropdown);
    var open = false;
    var untrack = null;

    // data-ds-float: posiciona o dropdown fixo (escapa de containers com
    // overflow — ex.: célula de tabela rolável). Fecha ao rolar/redimensionar.
    var isFloat = root.hasAttribute('data-ds-float');
    function positionFloat() {
      if (!isFloat) return;
      var r = field.getBoundingClientRect();
      dropdown.style.position = 'fixed';
      dropdown.style.top = (r.bottom + 4) + 'px';
      dropdown.style.left = r.left + 'px';
      dropdown.style.minWidth = r.width + 'px';
      dropdown.style.zIndex = '1000';
    }
    function onViewportChange() { if (open) setOpen(false); }

    dropdown.hidden = true;

    function setOpen(v) {
      open = v;
      dropdown.hidden = !v;
      root.classList.toggle('is-open', v);
      setIcon(iconUse, v ? 'ico-arrow-up-s' : 'ico-arrow-down-s');
      if (v) {
        positionFloat();
        if (isFloat) { window.addEventListener('scroll', onViewportChange, true); window.addEventListener('resize', onViewportChange); }
        untrack = trackLayer(root, function () { setOpen(false); });
        if (searchInput) searchInput.focus();
      } else {
        if (isFloat) { window.removeEventListener('scroll', onViewportChange, true); window.removeEventListener('resize', onViewportChange); }
        if (untrack) { untrack(); untrack = null; }
        if (searchInput) filter('');
      }
    }
    function toggle() { setOpen(!open); }

    function markSelected(item) {
      items.forEach(function (it) {
        it.classList.remove('select__item--active');
        var chk = $('.select__item-check', it);
        if (chk && it !== item) chk.remove();
      });
      item.classList.add('select__item--active');
      if (!$('.select__item-check', item)) {
        var chk = document.createElement('span');
        chk.className = 'select__item-check';
        chk.innerHTML = '<svg><use href="#ico-check"/></svg>';
        item.appendChild(chk);
      }
    }

    function chooseSingle(item) {
      var text = ($('.select__item-text', item) || item).textContent.trim();
      markSelected(item);
      if (searchInput) { searchInput.value = text; }
      else {
        var val = $('.select__value', field);
        if (val) { val.textContent = text; val.classList.add('select__value--filled'); }
      }
      emit(root, 'change', { value: text });
      setOpen(false);
    }

    /* ---- multi (tags) ---- */
    function renderTags() {
      var tagsWrap = $('.select__tags', field);
      if (!tagsWrap) return;
      tagsWrap.innerHTML = '';
      items.filter(function (it) { return it.classList.contains('select__item--active'); })
        .forEach(function (it) {
          var text = ($('.select__item-text', it) || it).textContent.trim();
          var tag = document.createElement('span');
          tag.className = 'select__tag';
          tag.innerHTML = text + ' <button class="select__tag-close" aria-label="Remover"><svg><use href="#ico-close"/></svg></button>';
          tag.querySelector('.select__tag-close').addEventListener('click', function (e) {
            e.stopPropagation();
            toggleMulti(it, false);
          });
          tagsWrap.appendChild(tag);
        });
    }
    function toggleMulti(item, force) {
      var on = typeof force === 'boolean' ? force : !item.classList.contains('select__item--active');
      item.classList.toggle('select__item--active', on);
      var chk = $('.select__item-check', item);
      if (on && !chk) {
        var c = document.createElement('span');
        c.className = 'select__item-check';
        c.innerHTML = '<svg><use href="#ico-check"/></svg>';
        item.appendChild(c);
      } else if (!on && chk) { chk.remove(); }
      renderTags();
      emit(root, 'change', { values: items.filter(function (it) { return it.classList.contains('select__item--active'); }).map(function (it) { return (($('.select__item-text', it) || it).textContent).trim(); }) });
    }

    /* ---- busca ---- */
    function filter(q) {
      q = (q || '').toLowerCase().trim();
      var visible = 0;
      items.forEach(function (it) {
        var t = (($('.select__item-text', it) || it).textContent).toLowerCase();
        var show = !q || t.indexOf(q) > -1;
        it.hidden = !show;
        if (show) visible++;
      });
      if (empty) empty.hidden = visible !== 0;
    }

    field.addEventListener('click', function (e) {
      if (e.target.closest('.select__tag-close')) return;
      if (e.target.closest('.select__clear')) { // limpar tudo (multi)
        items.forEach(function (it) { toggleMulti(it, false); });
        return;
      }
      toggle();
    });
    if (searchInput) searchInput.addEventListener('input', function () { if (!open) setOpen(true); filter(searchInput.value); });

    items.forEach(function (it) {
      it.addEventListener('click', function (e) {
        e.stopPropagation();
        if (isMulti) toggleMulti(it); else chooseSingle(it);
      });
    });

    if (isMulti) renderTags();
  });

  /* ==================================================================
     DROPDOWN — filtro (checkbox) e menu (itens)
     Markup: .dropdown > .dropdown__trigger + .dropdown__panel
     ================================================================== */
  register('dropdown', function (root) {
    var trigger = $('.dropdown__trigger', root);
    var panel = $('.dropdown__panel', root);
    if (!trigger || !panel) return;
    var open = false, untrack = null;
    panel.hidden = true;

    function setOpen(v) {
      open = v; panel.hidden = !v;
      trigger.setAttribute('aria-expanded', v ? 'true' : 'false');
      if (v) untrack = trackLayer(root, function () { setOpen(false); });
      else if (untrack) { untrack(); untrack = null; }
    }
    trigger.addEventListener('click', function (e) { e.stopPropagation(); setOpen(!open); });

    // limpar filtro
    var clean = $('.dropdown__clean', panel);
    if (clean) clean.addEventListener('click', function () {
      $all('input[type="checkbox"]', panel).forEach(function (c) { c.checked = false; });
      emit(root, 'filterclear', {});
    });

    // itens de menu (navegação)
    $all('.dropdown__item--nav', panel).forEach(function (it) {
      it.addEventListener('click', function () {
        if (it.classList.contains('dropdown__item--disable')) return;
        $all('.dropdown__item--nav', panel).forEach(function (n) { n.classList.remove('dropdown__item--active'); });
        it.classList.add('dropdown__item--active');
        emit(root, 'select', { text: (it.textContent || '').trim() });
        setOpen(false);
      });
    });

    // checkboxes de filtro
    $all('input[type="checkbox"]', panel).forEach(function (c) {
      c.addEventListener('change', function () {
        emit(root, 'filterchange', {
          values: $all('input[type="checkbox"]', panel).filter(function (x) { return x.checked; })
            .map(function (x) { return (x.closest('.checkbox-card') || panel).textContent.trim(); })
        });
      });
    });
  });

  /* ==================================================================
     MODAL — overlay + abrir/fechar
     Markup: .modal [data-ds="modal"] (fica escondida até abrir)
     Gatilhos: qualquer elemento [data-ds-open="<idDoModal>"]
     ================================================================== */
  register('modal', function (root) {
    // embrulha o modal num overlay full-screen (uma vez)
    var overlay = document.createElement('div');
    overlay.className = 'ds-modal-overlay';
    overlay.hidden = true;
    root.parentNode.insertBefore(overlay, root);
    overlay.appendChild(root);

    function close() { overlay.hidden = true; emit(root, 'close', {}); }
    function open() { overlay.hidden = false; emit(root, 'open', {}); }
    root.__dsModalOpen = open;
    root.__dsModalClose = close;

    var closeBtn = $('.modal__close', root);
    if (closeBtn) closeBtn.addEventListener('click', close);
    overlay.addEventListener('mousedown', function (e) { if (e.target === overlay) close(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !overlay.hidden) close(); });
  });

  // gatilhos globais de modal
  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-ds-open]');
    if (!t) return;
    var id = t.getAttribute('data-ds-open');
    var modal = document.getElementById(id);
    if (modal && modal.__dsModalOpen) { e.preventDefault(); modal.__dsModalOpen(); }
  });

  /* ==================================================================
     data-ds-toggle — checkbox marcado ESCONDE o alvo (#id).
     Ex.: "usar o e-mail principal" esconde o campo de e-mail alternativo.
     Estado inicial é aplicado no init; mudanças, no change.
     ================================================================== */
  function dsToggle(cb) {
    var key = cb.getAttribute('data-ds-toggle');
    if (!key) return;
    // Resolve o alvo primeiro dentro do card/linha (funciona em cópias de
    // repeater sem depender de id único); cai pra getElementById se preciso.
    var scope = (cb.closest && (cb.closest('.repeater__item') || cb.closest('.listrow'))) || document;
    var t = scope.querySelector('[data-toggle="' + key + '"]') || document.getElementById(key);
    if (t) t.hidden = !!cb.checked;
  }
  document.addEventListener('change', function (e) {
    var cb = e.target;
    if (cb && cb.matches && cb.matches('input[type="checkbox"][data-ds-toggle]')) dsToggle(cb);
  });

  /* ==================================================================
     LIGHTBOX — overlay full-screen p/ ampliar imagem
     Markup: .lightbox [data-ds="lightbox"] (fica escondido até abrir)
     Gatilhos: [data-ds-lightbox="<id>"] (opcional data-ds-caption="…")
     ================================================================== */
  register('lightbox', function (root) {
    root.hidden = true;
    function close() { root.classList.remove('is-open'); root.hidden = true; emit(root, 'close', {}); }
    function open(caption) {
      var cap = $('.lightbox__caption', root);
      if (cap && caption != null) cap.textContent = caption;
      root.hidden = false; root.classList.add('is-open'); emit(root, 'open', {});
    }
    root.__dsLightboxOpen = open;
    root.__dsLightboxClose = close;
    var closeBtn = $('.lightbox__close', root);
    if (closeBtn) closeBtn.addEventListener('click', close);
    root.addEventListener('mousedown', function (e) { if (e.target === root) close(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !root.hidden) close(); });
  });

  // gatilhos globais de lightbox
  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-ds-lightbox]');
    if (!t) return;
    var lb = document.getElementById(t.getAttribute('data-ds-lightbox'));
    if (lb && lb.__dsLightboxOpen) { e.preventDefault(); lb.__dsLightboxOpen(t.getAttribute('data-ds-caption')); }
  });

  /* ==================================================================
     DATEPICKER — calendário navegável
     ================================================================== */
  var MONTHS_PT = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  var WEEK = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  register('datepicker', function (root) {
    if (root.classList.contains('datepicker--disabled') || root.classList.contains('datepicker--readonly')) return;
    var inputEl = $('.datepicker__input', root);
    var valueEl = $('.datepicker__value', root);
    if (!inputEl || !valueEl) return;

    var today = new Date();
    var view = new Date(today.getFullYear(), today.getMonth(), 1);
    var selected = null;
    var cal = null, open = false, untrack = null;

    function fmt(d) { return String(d.getDate()).padStart(2, '0') + '/' + MONTHS_PT[d.getMonth()] + '/' + d.getFullYear(); }

    function build() {
      var y = view.getFullYear(), m = view.getMonth();
      var first = new Date(y, m, 1).getDay();
      var days = new Date(y, m + 1, 0).getDate();
      var prevDays = new Date(y, m, 0).getDate();
      var cells = [];
      for (var i = 0; i < first; i++) cells.push({ d: prevDays - first + 1 + i, muted: true });
      for (var d = 1; d <= days; d++) cells.push({ d: d, muted: false });
      while (cells.length % 7 !== 0) cells.push({ d: cells.length - (first + days) + 1, muted: true });

      var weeks = '';
      for (var w = 0; w < cells.length; w += 7) {
        weeks += '<div class="calendar__week">' + cells.slice(w, w + 7).map(function (c) {
          var cls = 'calendar__day' + (c.muted ? ' calendar__day--muted' : '');
          if (!c.muted && selected && selected.getFullYear() === y && selected.getMonth() === m && selected.getDate() === c.d) cls += ' calendar__day--selected';
          if (!c.muted && today.getFullYear() === y && today.getMonth() === m && today.getDate() === c.d) cls += ' calendar__day--today';
          return '<button class="' + cls + '" data-d="' + c.d + '"' + (c.muted ? ' data-muted="1"' : '') + '>' + c.d + '</button>';
        }).join('') + '</div>';
      }

      cal.innerHTML =
        '<div class="calendar__header">' +
        '<button class="calendar__nav" data-nav="-1" aria-label="Mês anterior"><svg><use href="#ico-chevron-left"/></svg></button>' +
        '<div class="calendar__selects">' +
        '<button class="calendar__dropdown calendar__dropdown--month"><span>' + MONTHS_PT[m] + '</span><span class="calendar__dropdown-icon"><svg><use href="#ico-chevron-down"/></svg></span></button>' +
        '<button class="calendar__dropdown calendar__dropdown--year"><span>' + y + '</span><span class="calendar__dropdown-icon"><svg><use href="#ico-chevron-down"/></svg></span></button>' +
        '</div>' +
        '<button class="calendar__nav" data-nav="1" aria-label="Próximo mês"><svg><use href="#ico-chevron-right"/></svg></button>' +
        '</div>' +
        '<div class="calendar__body">' +
        '<div class="calendar__weekdays">' + WEEK.map(function (d) { return '<span class="calendar__weekday">' + d + '</span>'; }).join('') + '</div>' +
        '<div class="calendar__grid">' + weeks + '</div>' +
        '</div>';

      cal.querySelector('[data-nav="-1"]').addEventListener('click', function (e) { e.stopPropagation(); view.setMonth(view.getMonth() - 1); build(); });
      cal.querySelector('[data-nav="1"]').addEventListener('click', function (e) { e.stopPropagation(); view.setMonth(view.getMonth() + 1); build(); });
      $all('.calendar__day', cal).forEach(function (btn) {
        btn.addEventListener('click', function (e) {
          e.stopPropagation();
          if (btn.dataset.muted) return;
          selected = new Date(y, m, parseInt(btn.dataset.d, 10));
          valueEl.textContent = fmt(selected);
          valueEl.classList.add('datepicker__value--filled');
          emit(root, 'change', { date: selected, value: fmt(selected) });
          setOpen(false);
        });
      });
      cal.querySelector('.calendar__dropdown--month').addEventListener('click', function (e) { e.stopPropagation(); picker('month'); });
      cal.querySelector('.calendar__dropdown--year').addEventListener('click', function (e) { e.stopPropagation(); picker('year'); });
    }

    function picker(kind) {
      var existing = $('.calendar__picker', cal);
      if (existing) { existing.remove(); return; }
      var box = document.createElement('div');
      box.className = 'calendar__picker' + (kind === 'year' ? ' calendar__picker--year' : '');
      if (kind === 'month') {
        MONTHS_PT.forEach(function (name, i) {
          var b = document.createElement('button');
          b.textContent = name;
          if (i === view.getMonth()) b.setAttribute('aria-selected', 'true');
          b.addEventListener('click', function (e) { e.stopPropagation(); view.setMonth(i); build(); });
          box.appendChild(b);
        });
      } else {
        var y0 = view.getFullYear();
        for (var y = y0 - 6; y <= y0 + 6; y++) {
          (function (yy) {
            var b = document.createElement('button');
            b.textContent = yy;
            if (yy === y0) b.setAttribute('aria-selected', 'true');
            b.addEventListener('click', function (e) { e.stopPropagation(); view.setFullYear(yy); build(); });
            box.appendChild(b);
          })(y);
        }
      }
      cal.appendChild(box);
    }

    function setOpen(v) {
      open = v;
      root.classList.toggle('datepicker--open', v);
      if (v) {
        if (!cal) { cal = document.createElement('div'); cal.className = 'calendar'; root.appendChild(cal); }
        cal.hidden = false; build();
        untrack = trackLayer(root, function () { setOpen(false); });
      } else {
        if (cal) cal.hidden = true;
        if (untrack) { untrack(); untrack = null; }
      }
    }

    inputEl.addEventListener('click', function (e) {
      if (e.target.closest('.datepicker__icon') && valueEl.classList.contains('datepicker__value--filled') && $('use[href="#ico-close"]', inputEl)) {
        selected = null; valueEl.textContent = 'Select a date'; valueEl.classList.remove('datepicker__value--filled');
        emit(root, 'clear', {}); return;
      }
      setOpen(!open);
    });
  });

  /* ==================================================================
     COLLAPSIBLE
     ================================================================== */
  register('collapsible', function (root) {
    var header = $('.collapsible__header', root);
    if (!header) return;
    header.addEventListener('click', function () {
      var open = root.classList.toggle('is-open');
      header.setAttribute('aria-expanded', open ? 'true' : 'false');
      emit(root, 'toggle', { open: open });
    });
  });

  /* ==================================================================
     INPUT — máscara + foco + limpar erro ao digitar
     data-ds-mask = cnpj | cpf | phone | cep | currency
     ================================================================== */
  var MASKS = {
    cnpj: function (v) { v = v.replace(/\D/g, '').slice(0, 14); return v.replace(/^(\d{2})(\d)/, '$1.$2').replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3').replace(/\.(\d{3})(\d)/, '.$1/$2').replace(/(\d{4})(\d)/, '$1-$2'); },
    cpf: function (v) { v = v.replace(/\D/g, '').slice(0, 11); return v.replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})\.(\d{3})(\d)/, '$1.$2.$3').replace(/(\d{3})(\d{1,2})$/, '$1-$2'); },
    phone: function (v) { v = v.replace(/\D/g, '').slice(0, 11); return v.replace(/^(\d{2})(\d)/, '($1) $2').replace(/(\d{5})(\d)/, '$1-$2'); },
    cep: function (v) { v = v.replace(/\D/g, '').slice(0, 8); return v.replace(/^(\d{5})(\d)/, '$1-$2'); },
    currency: function (v) { v = v.replace(/\D/g, ''); v = (parseInt(v || '0', 10) / 100).toFixed(2); return 'R$ ' + v.replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.'); }
  };
  register('input', function (root) {
    var control = $('.input__control', root);
    var field = $('.input__field', root);
    if (!control) return;
    var mask = root.getAttribute('data-ds-mask');
    if (field) {
      control.addEventListener('focus', function () { root.classList.add('is-focus'); });
      control.addEventListener('blur', function () { root.classList.remove('is-focus'); });
    }
    control.addEventListener('input', function () {
      if (mask && MASKS[mask]) { var p = control.selectionStart; control.value = MASKS[mask](control.value); }
      if (root.classList.contains('input--error')) root.classList.remove('input--error');
      emit(root, 'input', { value: control.value });
    });
  });

  /* ==================================================================
     PAGINATION
     data-ds-total, data-ds-page-size, data-ds-page
     ================================================================== */
  register('pagination', function (root) {
    var info = $('.pagination__info', root);
    var nav = $('.pagination__nav', root);
    if (!nav) return;
    var sizeEl = $('.pagination__select', root);

    var total = parseInt(root.getAttribute('data-ds-total') || (info && (info.textContent.match(/de\s+([\d.]+)/) || [])[1] || '0').replace(/\./g, ''), 10) || 0;
    var size = parseInt(root.getAttribute('data-ds-page-size') || (sizeEl && sizeEl.textContent) || '20', 10) || 20;
    var page = parseInt(root.getAttribute('data-ds-page') || '1', 10) || 1;
    var sizes = [10, 20, 50, 100];

    function pages() { return Math.max(1, Math.ceil(total / size)); }
    function windowed() {
      var last = pages(), out = [];
      var add = function (n) { out.push(n); };
      add(1);
      var start = Math.max(2, page - 1), end = Math.min(last - 1, page + 1);
      if (start > 2) out.push('…');
      for (var i = start; i <= end; i++) add(i);
      if (end < last - 1) out.push('…');
      if (last > 1) add(last);
      return out;
    }
    function render() {
      var last = pages();
      if (info) {
        var from = total ? (page - 1) * size + 1 : 0;
        var to = Math.min(page * size, total);
        info.innerHTML =
          '<span class="pagination__select" role="button" tabindex="0">' + size + ' <span class="pagination__select-icon"><svg><use href="#ico-arrow-down-s"/></svg></span></span>' +
          '<span>' + from + ' - ' + to + ' <span style="color:var(--content-text)">de ' + total + '</span></span>';
        info.querySelector('.pagination__select').addEventListener('click', function () {
          size = sizes[(sizes.indexOf(size) + 1) % sizes.length];
          page = 1; render(); emit(root, 'pagesize', { size: size });
        });
      }
      nav.innerHTML =
        '<button class="pagination__navbtn" data-go="first" ' + (page === 1 ? 'disabled' : '') + ' aria-label="Primeira"><svg><use href="#ico-arrow-left-double"/></svg></button>' +
        '<button class="pagination__navbtn" data-go="prev" ' + (page === 1 ? 'disabled' : '') + ' aria-label="Anterior"><svg><use href="#ico-arrow-left-s"/></svg></button>' +
        windowed().map(function (n) {
          if (n === '…') return '<span class="pagination__item pagination__item--more"><svg><use href="#ico-ellipsis"/></svg></span>';
          return '<button class="pagination__item ' + (n === page ? 'pagination__item--active' : '') + '" ' + (n === page ? 'aria-current="page"' : '') + ' data-page="' + n + '">' + n + '</button>';
        }).join('') +
        '<button class="pagination__navbtn" data-go="next" ' + (page === last ? 'disabled' : '') + ' aria-label="Próxima"><svg><use href="#ico-arrow-right-s"/></svg></button>' +
        '<button class="pagination__navbtn" data-go="last" ' + (page === last ? 'disabled' : '') + ' aria-label="Última"><svg><use href="#ico-arrow-right-double"/></svg></button>';

      $all('[data-page]', nav).forEach(function (b) { b.addEventListener('click', function () { go(parseInt(b.dataset.page, 10)); }); });
      $all('[data-go]', nav).forEach(function (b) {
        b.addEventListener('click', function () {
          var g = b.dataset.go;
          go(g === 'first' ? 1 : g === 'prev' ? page - 1 : g === 'next' ? page + 1 : pages());
        });
      });
    }
    function go(n) { n = Math.min(Math.max(1, n), pages()); if (n === page) return; page = n; render(); emit(root, 'page', { page: page, size: size }); }
    render();
  });

  /* ==================================================================
     SEARCH — searchbar / groupsearch
     ================================================================== */
  register('search', function (root) {
    var input = $('.searchbar__input', root) || $('input', root);
    var btn = $('.btn', root) || $('.searchbar__iconbtn', root);
    function fire() { emit(root, 'search', { query: input ? input.value : '' }); }
    if (input) input.addEventListener('keydown', function (e) { if (e.key === 'Enter') fire(); });
    if (btn) btn.addEventListener('click', function (e) { e.preventDefault(); fire(); });
    var filter = $('.groupsearch__filter', root);
    if (filter) filter.addEventListener('click', function () { emit(root, 'filter', {}); });
  });

  /* ==================================================================
     SIDEBAR — grupos colapsáveis, item ativo, rail
     ================================================================== */
  register('sidebar', function (root) {
    $all('.sidebar__group-head', root).forEach(function (head) {
      head.addEventListener('click', function () {
        var group = head.closest('.sidebar__group');
        group.classList.toggle('is-collapsed');
      });
    });
    $all('.sidebar__item', root).forEach(function (item) {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        $all('.sidebar__item', root).forEach(function (i) { i.classList.remove('sidebar__item--active'); });
        item.classList.add('sidebar__item--active');
        emit(root, 'navigate', { label: (item.textContent || '').trim() });
      });
    });
    var collapse = $('.sidebar__collapse', root);
    if (collapse) collapse.addEventListener('click', function () { root.classList.toggle('sidebar--rail'); });
  });

  /* ==================================================================
     TABLE — ordenar por coluna, menu kebab
     ================================================================== */
  register('table', function (root) {
    var table = root.classList.contains('table') ? root : $('.table', root);
    if (!table) return;
    var header = $('.table__header', table);
    if (header) {
      var ths = $all('.table__th', header);
      ths.forEach(function (th, idx) {
        if (th.classList.contains('table__th--action')) return;
        th.addEventListener('click', function () {
          var desc = th.classList.contains('is-sorted') && !th.classList.contains('is-sorted-desc');
          ths.forEach(function (t) { t.classList.remove('is-sorted', 'is-sorted-desc'); });
          th.classList.add('is-sorted');
          if (desc) th.classList.add('is-sorted-desc');
          sortBy(idx, desc);
          emit(root, 'sort', { column: idx, dir: desc ? 'desc' : 'asc' });
        });
      });
    }
    function sortBy(idx, desc) {
      var rows = $all('.table__row', table);
      rows.sort(function (a, b) {
        var ca = ((a.children[idx] && a.children[idx].textContent) || '').trim();
        var cb = ((b.children[idx] && b.children[idx].textContent) || '').trim();
        var na = parseFloat(ca.replace(/[^\d.,-]/g, '').replace(',', '.'));
        var nb = parseFloat(cb.replace(/[^\d.,-]/g, '').replace(',', '.'));
        var r = (!isNaN(na) && !isNaN(nb)) ? na - nb : ca.localeCompare(cb, 'pt');
        return desc ? -r : r;
      });
      rows.forEach(function (r, i) {
        r.classList.toggle('table__row--alt', i % 2 === 1);
        table.appendChild(r);
      });
    }
    // kebab
    $all('.table__kebab', table).forEach(function (kb) {
      kb.addEventListener('click', function (e) {
        e.stopPropagation();
        var existing = $('.table__kebab-menu', table);
        if (existing) { existing.remove(); return; }
        var menu = document.createElement('div');
        menu.className = 'table__kebab-menu';
        menu.innerHTML = '<button>Editar</button><button>Duplicar</button><button>Excluir</button>';
        var rect = kb.getBoundingClientRect(), tr = table.getBoundingClientRect();
        menu.style.top = (rect.bottom - tr.top) + 'px';
        table.appendChild(menu);
        $all('button', menu).forEach(function (b) { b.addEventListener('click', function () { emit(root, 'action', { action: b.textContent, row: kb.closest('.table__row') }); menu.remove(); }); });
        trackLayer(table, function () { if (menu.parentNode) menu.remove(); });
      });
    });

    // seleção por linha (data-ds-select). Marca .table__row--selected e emite ds:select.
    if (root.hasAttribute('data-ds-select')) {
      function selectedIds() {
        return $all('.table__row--selected', table).map(function (r) { return r.getAttribute('data-id') || ''; });
      }
      function emitSel() { emit(root, 'select', { count: $all('.table__row--selected', table).length, ids: selectedIds() }); }
      $all('.table__cell--check input[type="checkbox"]', table).forEach(function (cb) {
        cb.addEventListener('change', function () {
          var row = cb.closest('.table__row');
          if (row) row.classList.toggle('table__row--selected', cb.checked);
          emitSel();
        });
        var row0 = cb.closest('.table__row');
        if (row0 && cb.checked) row0.classList.add('table__row--selected');
      });
      var all = $('.table__th--check input[type="checkbox"]', table);
      if (all) all.addEventListener('change', function () {
        $all('.table__cell--check input[type="checkbox"]', table).forEach(function (cb) {
          cb.checked = all.checked;
          var row = cb.closest('.table__row');
          if (row) row.classList.toggle('table__row--selected', all.checked);
        });
        emitSel();
      });
    }
  });

  /* ==================================================================
     SEGMENTED CONTROL — opções exclusivas num trilho
     ================================================================== */
  register('segmented', function (root) {
    var items = $all('.segmented__item', root);
    // Abas: se os itens tiverem data-tab="<id do painel>", clicar troca o
    // painel visível (.tabpanel.is-active). Opt-in e retrocompatível.
    var panelIds = items.map(function (it) { return it.getAttribute('data-tab'); }).filter(Boolean);
    function showPanel(id) {
      panelIds.forEach(function (pid) {
        var p = document.getElementById(pid);
        if (p) p.classList.toggle('is-active', pid === id);
      });
    }
    items.forEach(function (it, i) {
      it.addEventListener('click', function () {
        if (it.disabled) return;
        items.forEach(function (x) { x.classList.remove('segmented__item--active'); });
        it.classList.add('segmented__item--active');
        var tab = it.getAttribute('data-tab');
        if (tab) showPanel(tab);
        emit(root, 'change', { value: it.getAttribute('data-value') || (it.textContent || '').trim(), index: i });
      });
    });
  });

  /* ==================================================================
     BREADCRUMB — dropdown do "…"
     ================================================================== */
  register('breadcrumb', function (root) {
    var btn = $('.breadcrumb__ellipsis-btn', root);
    var dd = $('.breadcrumb__dropdown', root);
    if (!btn || !dd) return;
    dd.hidden = true;
    var untrack = null;
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      dd.hidden = !dd.hidden;
      if (!dd.hidden) untrack = trackLayer(root, function () { dd.hidden = true; if (untrack) untrack(); });
      else if (untrack) { untrack(); untrack = null; }
    });
  });

  /* ==================================================================
     REPEATER — grupos repetíveis (ex.: representantes/procuradores).
     Markup: .repeater[data-ds="repeater"] > .repeater__items (com linhas
     .repeater__item) + <template class="repeater__template"> (1 linha modelo)
     + [data-repeat-add]. Cada linha tem [data-repeat-remove]. O "add" clona
     o template e inicializa a nova linha (máscaras/componentes). Eventos
     ds:add / ds:remove.
     ================================================================== */
  register('repeater', function (root) {
    var items = $('.repeater__items', root);
    var tpl = $('.repeater__template', root);
    var addBtn = $('[data-repeat-add]', root);
    root.addEventListener('click', function (e) {
      var rm = e.target.closest && e.target.closest('[data-repeat-remove]');
      if (rm && root.contains(rm)) {
        var row = rm.closest('.repeater__item');
        if (row && row.parentNode) { row.parentNode.removeChild(row); emit(root, 'remove', {}); }
      }
    });
    if (addBtn && tpl && items) addBtn.addEventListener('click', function () {
      var frag = tpl.content || tpl;
      var src = frag.querySelector('.repeater__item');
      if (!src) return;
      var node = src.cloneNode(true);
      items.appendChild(node);
      init(node);
      emit(root, 'add', {});
    });
  });

  /* -------------------------------------------------- boot */
  function init(root) {
    $all('[data-ds]', root || document).forEach(function (el) {
      if (el.__dsInit) return;
      var name = el.getAttribute('data-ds');
      var fn = registry[name];
      if (!fn) return;
      el.__dsInit = true;
      try { fn(el); } catch (err) { console.error('[DS] erro em "' + name + '"', err, el); }
    });
    $all('input[type="checkbox"][data-ds-toggle]', root || document).forEach(dsToggle);
  }

  window.DS = {
    register: register,
    init: init,
    refresh: function () { init(document); },
    on: function (el, evt, fn) { el.addEventListener(evt, fn); },
    openModal: function (id) { var m = document.getElementById(id); if (m && m.__dsModalOpen) m.__dsModalOpen(); },
    closeModal: function (el) { if (el && el.__dsModalClose) el.__dsModalClose(); },
    openLightbox: function (id, caption) { var l = document.getElementById(id); if (l && l.__dsLightboxOpen) l.__dsLightboxOpen(caption); },
    closeLightbox: function (el) { if (el && el.__dsLightboxClose) el.__dsLightboxClose(); }
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { init(document); });
  else init(document);
})();
