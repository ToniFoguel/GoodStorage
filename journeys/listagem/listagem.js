/* ============================================================
   Listagem de orçamentos — RN1–RN20 (wireframe 10-A_4)
   Geração determinística · ordenação multi-coluna (shift) · filtros
   combináveis · busca dinâmica · paginação · estados vazios.
   ============================================================ */
(function () {
  'use strict';

  /* ---------------- RNG determinístico (mesma seed do wireframe) ---------------- */
  var _seed = 20260722;
  function rng() { _seed = (_seed * 1103515245 + 12345) & 0x7fffffff; return _seed / 0x7fffffff; }
  function pick(a) { return a[Math.floor(rng() * a.length)]; }
  function uuidv4() { return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) { var r = rng() * 16 | 0; return (c === 'x' ? r : (r & 3 | 8)).toString(16); }); }

  var LEADS_POOL = [
    ['Marina Alves Comércio', 'marina@marinaalves.com.br', '+55 11 98877-1122', false],
    ['Logística Contorno Ltda', 'contato@logisticacontorno.com.br', '+55 11 97654-3300', false],
    ['Studio Prisma Arquitetura', 'ola@studioprisma.com.br', null, false],
    ['Ferragens Vale Verde', 'compras@valeverde.com.br', '+55 11 96543-2211', false],
    ['Nordeste Distribuidora', 'financeiro@nordestedist.com', '+55 11 91234-5678', true],
    ['Café Serra Azul', 'contato@cafeserraazul.com.br', '+55 11 99011-2233', false],
    ['MedParts Suprimentos', 'vendas@medparts.com.br', null, false],
    ['Oficina Torque Alto', 'torque@torquealto.com.br', '+55 11 98123-4455', false],
    ['Editora Margem', 'contato@editoramargem.com', null, false],
    ['TechNova Componentes', 'sac@technova.com.br', '+55 11 97788-9900', false],
    ['Confecções Belluno', 'belluno@belluno.com.br', '+55 11 96677-8811', false],
    ['Atacado São Jorge', 'pedidos@atacadosaojorge.com', '+55 11 95566-7788', true],
    ['Verde Vida Hortifruti', 'verdevida@verdevida.com.br', '+55 11 94455-6677', false],
    ['Marmoraria Aurora', 'orcamento@aurora.com.br', null, false]
  ];
  var UNIDADES = ['Vila Leopoldina', 'Barra Funda', 'Guarulhos', 'Faria Lima', 'Pinheiros', 'Osasco', 'Alphaville', 'Santo Amaro', 'Lapa', 'Tatuapé'];
  var TIPOS = ['Selfstorage', 'Flex', 'Galpão UI', 'Office UI'];
  var STATUS_RANK = { 'Rascunho': -1, 'Pendente': 0, 'Enviado': 1, 'Erro': 2 };
  var VENDEDORES = ['André Foguel', 'Kelly Rocha', 'Gustavo Lima', 'Renata Salles', 'Marcos Tavares'];
  var VENDEDOR_ATUAL = 'André Foguel';
  var RAW = [
    ['PRD-1042', 'Box 5m² climatizado', 'Vila Leopoldina', 'Selfstorage', 389], ['PRD-1108', 'Box 3m² standard', 'Vila Leopoldina', 'Selfstorage', 249],
    ['PRD-1156', 'Box 8m² climatizado', 'Pinheiros', 'Selfstorage', 612], ['PRD-1245', 'Box 4m² standard', 'Tatuapé', 'Selfstorage', 299],
    ['PRD-2087', 'Sala Flex 12m²', 'Barra Funda', 'Flex', 1290], ['PRD-2130', 'Sala Flex 25m²', 'Osasco', 'Flex', 2350],
    ['PRD-2201', 'Sala Flex 15m²', 'Tatuapé', 'Flex', 1490], ['PRD-3310', 'Galpão UI 80m²', 'Guarulhos', 'Galpão UI', 6800],
    ['PRD-3389', 'Galpão UI 200m²', 'Osasco', 'Galpão UI', 15200], ['PRD-4501', 'Office UI 24m²', 'Faria Lima', 'Office UI', 3600],
    ['PRD-4572', 'Office UI 18m²', 'Pinheiros', 'Office UI', 2880]
  ];

  function money(v) { return 'R$ ' + Math.round(v).toLocaleString('pt-BR'); }
  function genOrcamentos(n) {
    var out = [], now = Date.now(), seq = 0;
    function statusDraw() { var r = rng(); return r < 0.62 ? 'Enviado' : (r < 0.82 ? 'Pendente' : 'Erro'); }
    while (out.length < n) {
      var leadRow = LEADS_POOL[Math.floor(rng() * LEADS_POOL.length)];
      var lead = leadRow[0], email = leadRow[1], phone = leadRow[2];
      var daysAgo = Math.floor(rng() * 90);
      var dt = new Date(now - daysAgo * 86400000 - Math.floor(rng() * 86400000));
      var nTip = rng() < 0.35 ? (2 + Math.floor(rng() * 2)) : 1;
      var tiposSorteados = [];
      while (tiposSorteados.length < nTip) { var t0 = pick(TIPOS); if (tiposSorteados.indexOf(t0) < 0) tiposSorteados.push(t0); }
      tiposSorteados.forEach(function (t) {
        if (out.length >= n) return;
        var k = seq++; var id = 'ORC-' + (2400 + k); var status = statusDraw();
        var vendedor = (k % 3 === 0) ? VENDEDOR_ATUAL : VENDEDORES[k % VENDEDORES.length];
        var unidade = pick(UNIDADES);
        var poolTipo = RAW.filter(function (r) { return r[3] === t; });
        var nProd = 1 + Math.floor(rng() * 3); var produtos = [];
        for (var jj = 0; jj < nProd && poolTipo.length; jj++) {
          var r = poolTipo[Math.floor(rng() * poolTipo.length)];
          var manualPct = Math.round(rng() * 15); var fin = Math.round(r[4] * (1 - manualPct / 100));
          produtos.push({ id: r[0], desc: r[1], final: fin });
        }
        if (!produtos.length) return;
        var total = produtos.reduce(function (s, x) { return s + x.final; }, 0);
        out.push({ id: id, uuid: uuidv4(), lead: lead, email: email, phone: phone, tipo: t, unidade: unidade, vendedor: vendedor, dataEnvio: dt, status: status, produtos: produtos, total: total });
      });
    }
    return out;
  }
  var ORCAMENTOS = (window.OrcData && window.OrcData.list) || genOrcamentos(124);

  /* ---------------- Estado ---------------- */
  var orcSort = [{ key: 'dataEnvio', dir: 'desc' }];
  var orcPage = 1, orcPageSize = 20, orcQuery = '';
  var orcFilters = { tipo: '', unidade: '', vendedor: '', status: '', de: '', ate: '' };
  var FILTER_LABEL = { tipo: 'Tipo', unidade: 'Unidade', vendedor: 'Vendedor', status: 'Status', de: 'De', ate: 'Até' };

  function fmtDT(d) { if (!d) return '—'; function p(n) { return String(n).padStart(2, '0'); } return p(d.getDate()) + '/' + p(d.getMonth() + 1) + '/' + d.getFullYear() + ' ' + p(d.getHours()) + ':' + p(d.getMinutes()); }
  function statusBadge(s) { var v = s === 'Enviado' ? 'badge--secondary' : (s === 'Erro' ? 'badge--destructive' : (s === 'Rascunho' ? 'badge--default' : 'badge--outline')); return '<span class="badge status-badge ' + v + '">' + s + '</span>'; }

  function getFiltered() {
    var q = orcQuery.trim().toLowerCase();
    var arr = ORCAMENTOS.filter(function (o) {
      if (q) { if (o.id.toLowerCase().indexOf(q) < 0 && o.lead.toLowerCase().indexOf(q) < 0 && o.email.toLowerCase().indexOf(q) < 0) return false; }
      if (orcFilters.tipo && o.tipo !== orcFilters.tipo) return false;
      if (orcFilters.unidade && o.unidade !== orcFilters.unidade) return false;
      if (orcFilters.vendedor && (o.vendedor || VENDEDOR_ATUAL) !== orcFilters.vendedor) return false;
      if (orcFilters.status && o.status !== orcFilters.status) return false;
      if (orcFilters.de && o.dataEnvio < new Date(orcFilters.de + 'T00:00:00')) return false;
      if (orcFilters.ate && o.dataEnvio > new Date(orcFilters.ate + 'T23:59:59')) return false;
      return true;
    });
    function cmp(a, b, key) {
      if (key === 'dataEnvio') return a.dataEnvio - b.dataEnvio;
      if (key === 'status') return STATUS_RANK[a.status] - STATUS_RANK[b.status];
      return String(a[key]).localeCompare(String(b[key]), 'pt-BR', { numeric: true });
    }
    arr.sort(function (a, b) { for (var i = 0; i < orcSort.length; i++) { var s = orcSort[i]; var r = cmp(a, b, s.key) * (s.dir === 'asc' ? 1 : -1); if (r !== 0) return r; } return 0; });
    return arr;
  }

  /* ---------------- Render ---------------- */
  var el = {};
  function activeFilterKeys() { return Object.keys(orcFilters).filter(function (k) { return orcFilters[k]; }); }
  function renderChips() {
    var keys = activeFilterKeys();
    if (!keys.length) { el.chips.innerHTML = ''; return; }
    el.chips.innerHTML = keys.map(function (k) { return '<span class="chip">' + FILTER_LABEL[k] + ': ' + orcFilters[k] + ' <button data-rmfilter="' + k + '" aria-label="Remover"><svg><use href="#ri-close"/></svg></button></span>'; }).join('') + '<span class="chip chip--clear" data-clearfilters>Limpar tudo</span>';
  }
  function updateFilterCount() { var n = activeFilterKeys().length; el.fcount.textContent = n; el.fcount.hidden = n === 0; }
  function renderSortHeaders() {
    Array.prototype.forEach.call(document.querySelectorAll('#orcHead th.sortable'), function (th) {
      var key = th.dataset.sort; var idx = -1; for (var i = 0; i < orcSort.length; i++) if (orcSort[i].key === key) { idx = i; break; }
      th.classList.toggle('sorted', idx >= 0);
      var ico = th.querySelector('.sort-ico');
      ico.innerHTML = idx >= 0 ? (orcSort[idx].dir === 'asc' ? '<path d="m6 15 6-6 6 6"/>' : '<path d="m6 9 6 6 6-6"/>') : '<path d="m7 15 5 5 5-5M7 9l5-5 5 5"/>';
      var old = th.querySelector('.sort-ord'); if (old) old.remove();
      if (orcSort.length > 1 && idx >= 0) { var b = document.createElement('span'); b.className = 'sort-ord'; b.textContent = idx + 1; th.querySelector('.th-in').appendChild(b); }
    });
  }
  function render() {
    var arr = getFiltered(); var total = arr.length;
    var totalPages = Math.max(1, Math.ceil(total / orcPageSize));
    if (orcPage > totalPages) orcPage = totalPages;
    var start = (orcPage - 1) * orcPageSize; var rows = arr.slice(start, start + orcPageSize);

    if (total === 0) {
      el.wrap.style.display = 'none'; el.foot.style.display = 'none'; el.empty.classList.add('show');
      if (ORCAMENTOS.length === 0) { el.emptyTitle.textContent = 'Nenhum orçamento cadastrado'; el.emptyText.textContent = 'Assim que você criar um orçamento, ele aparece aqui.'; }
      else { el.emptyTitle.textContent = 'Nenhum resultado encontrado'; el.emptyText.textContent = 'Ajuste a busca ou os filtros para ver mais orçamentos.'; }
      el.pageCount.textContent = '0 orçamentos';
      renderChips(); updateFilterCount(); renderSortHeaders(); return;
    }
    el.wrap.style.display = 'block'; el.foot.style.display = 'flex'; el.empty.classList.remove('show');
    el.rows.innerHTML = rows.map(function (o) {
      return '<tr data-open="' + o.id + '">' +
        '<td><span class="cell-id">' + o.id + '</span></td>' +
        '<td><div class="cl-name">' + o.lead + '</div><div class="cl-mail">' + o.email + '</div></td>' +
        '<td>' + o.tipo + '</td>' +
        '<td>' + o.unidade + '</td>' +
        '<td style="white-space:nowrap">' + fmtDT(o.dataEnvio) + '</td>' +
        '<td>' + statusBadge(o.status) + '</td>' +
        '<td class="cell-total">' + money(o.total) + '</td>' +
        '<td style="text-align:right"><div class="row-acts" data-stop>' +
          '<button class="icon-btn" data-copy="' + o.id + '" title="Copiar link" aria-label="Copiar link"><svg viewBox="0 0 24 24"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg></button>' +
          '<button class="resend-btn" data-resend="' + o.id + '" title="Reenviar"><svg viewBox="0 0 24 24"><path d="M21 2v6h-6"/><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M3 22v-6h6"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/></svg>Reenviar</button>' +
        '</div></td></tr>';
    }).join('');
    var to = Math.min(start + orcPageSize, total);
    el.pginfo.textContent = orcPage + '/' + totalPages;
    el.pgPrev.disabled = orcPage <= 1; el.pgNext.disabled = orcPage >= totalPages;
    el.listCount.textContent = (start + 1) + '–' + to + ' de ' + total + ' orçamento' + (total > 1 ? 's' : '');
    el.pageCount.textContent = total + ' orçamento' + (total > 1 ? 's' : '');
    renderChips(); updateFilterCount(); renderSortHeaders();
  }

  function clickSort(key, shift) {
    var existing = null; for (var i = 0; i < orcSort.length; i++) if (orcSort[i].key === key) { existing = orcSort[i]; break; }
    if (shift) { if (existing) existing.dir = existing.dir === 'asc' ? 'desc' : 'asc'; else orcSort.push({ key: key, dir: 'asc' }); }
    else { if (existing && orcSort.length === 1) existing.dir = existing.dir === 'asc' ? 'desc' : 'asc'; else orcSort = [{ key: key, dir: key === 'dataEnvio' ? 'desc' : 'asc' }]; }
    orcPage = 1; render();
  }

  /* ---------------- Wire ---------------- */
  document.addEventListener('DOMContentLoaded', function () {
    el = {
      rows: document.getElementById('orcRows'), wrap: document.getElementById('orcTableWrap'), foot: document.getElementById('listFoot'),
      empty: document.getElementById('orcEmpty'), emptyTitle: document.getElementById('emptyTitle'), emptyText: document.getElementById('emptyText'),
      chips: document.getElementById('chips'), fcount: document.getElementById('fcount'), pginfo: document.getElementById('pginfo'),
      pgPrev: document.getElementById('pgPrev'), pgNext: document.getElementById('pgNext'), listCount: document.getElementById('listCount'), pageCount: document.getElementById('pageCount')
    };

    // ordenação
    document.getElementById('orcHead').addEventListener('click', function (e) { var th = e.target.closest('th.sortable'); if (!th) return; clickSort(th.dataset.sort, e.shiftKey); });
    // busca dinâmica
    document.getElementById('orcQuery').addEventListener('input', function () { orcQuery = this.value; orcPage = 1; render(); });
    // filtros
    document.getElementById('f-buscar').addEventListener('click', function () {
      orcFilters.tipo = document.getElementById('f-tipo').value; orcFilters.unidade = document.getElementById('f-unidade').value;
      orcFilters.status = document.getElementById('f-status').value; orcFilters.vendedor = document.getElementById('f-vendedor').value;
      orcFilters.de = document.getElementById('f-de').value; orcFilters.ate = document.getElementById('f-ate').value;
      orcPage = 1; render(); var panel = document.querySelector('.filter-panel'); if (panel) panel.hidden = true;
    });
    document.getElementById('f-limpar').addEventListener('click', clearFilters);
    function clearFilters() { Object.keys(orcFilters).forEach(function (k) { orcFilters[k] = ''; }); ['f-tipo', 'f-unidade', 'f-status', 'f-vendedor', 'f-de', 'f-ate'].forEach(function (id) { document.getElementById(id).value = ''; }); orcPage = 1; render(); }
    // chips (delegação)
    el.chips.addEventListener('click', function (e) {
      var t; if ((t = e.target.closest('[data-rmfilter]'))) { var k = t.getAttribute('data-rmfilter'); orcFilters[k] = ''; var f = document.getElementById('f-' + k); if (f) f.value = ''; orcPage = 1; render(); }
      else if (e.target.closest('[data-clearfilters]')) clearFilters();
    });
    // paginação
    document.getElementById('pgsize').addEventListener('change', function () { orcPageSize = parseInt(this.value, 10); orcPage = 1; render(); });
    el.pgPrev.addEventListener('click', function () { if (orcPage > 1) { orcPage--; render(); } });
    el.pgNext.addEventListener('click', function () { orcPage++; render(); });
    // ações de linha
    el.rows.addEventListener('click', function (e) {
      var t;
      if ((t = e.target.closest('[data-copy]'))) { e.stopPropagation(); try { navigator.clipboard.writeText(location.origin + '/orcamentos/' + t.getAttribute('data-copy')); } catch (x) {} t.title = 'Link copiado!'; return; }
      if ((t = e.target.closest('[data-resend]'))) { e.stopPropagation(); var o = ORCAMENTOS.find(function (x) { return x.id === t.getAttribute('data-resend'); }); if (window.Reenvio && o) window.Reenvio.open(o, function () { render(); }); return; }
      if ((t = e.target.closest('[data-open]'))) { try { sessionStorage.setItem('nav-ok', '1'); } catch (x) {} window.location.href = '../perfil/perfil.html?id=' + encodeURIComponent(t.getAttribute('data-open')); }
    });
    // novo orçamento
    document.getElementById('novo-btn').addEventListener('click', function () { try { sessionStorage.setItem('nav-ok', '1'); } catch (e) {} window.location.href = '../consulta-catalogo/consulta.html'; });

    render();
  });
})();
