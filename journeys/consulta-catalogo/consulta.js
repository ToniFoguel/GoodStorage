/* ============================================================
   Consulta de catálogo — estrutura do wireframe 10-A_4
   Filtros inline · 3 selects de cupom buscáveis · descontos
   múltiplos com vigência (datas) + barra de alçada cumulativa
   + aumento R$ · alçada por produto · D+3.
   ============================================================ */
(function () {
  'use strict';

  /* Guarda de navegação: a Listagem é a home. Recarregar/abrir direto volta pra ela. */
  var navOk; try { navOk = sessionStorage.getItem('nav-ok') === '1'; if (navOk) sessionStorage.removeItem('nav-ok'); } catch (e) { navOk = true; }
  if (!navOk) { try { location.replace('../listagem/listagem.html'); } catch (e) {} return; }

  /* ---------------- Tipologias / alçada ---------------- */
  var TIPO_INFO = {
    'Selfstorage': { editable: false, classif: 'Guarda-volumes pessoal', carac: 'Box individual, acesso 24h, monitoramento CFTV, climatização opcional.', estr: 'Módulo interno em corredor, pé-direito 2,4m.' },
    'Flex':        { editable: true,  classif: 'Espaço corporativo flexível', carac: 'Sala fechada, ponto de energia, mobiliário opcional.', estr: 'Andar intermediário, acesso por corredor central.' },
    'Galpão UI':   { editable: true,  classif: 'Logística e estoque', carac: 'Doca de carga, piso reforçado, pé-direito 8m.', estr: 'Quadra logística, acesso por doca, próximo à expedição.' },
    'Office UI':   { editable: true,  classif: 'Escritório premium', carac: 'Sala com copa, ar-condicionado, internet dedicada.', estr: 'Torre corporativa, andar alto com vista.' }
  };
  var ALCADA_TIPO = { 'Selfstorage': 15, 'Flex': 20, 'Galpão UI': 25, 'Office UI': 18 };

  /* ---------------- Cupons / campanhas ---------------- */
  var CUPONS = {
    primeiro:   { code: 'CUP-ENTRADA20', pct: 20, tipo: 'entrada', months: [1] },
    black:      { code: 'CUP-ENTRADA15', pct: 15, tipo: 'entrada', excl: true, months: [1, 2] },
    verao:      { code: 'CUP-PROMO10', pct: 10, tipo: 'promocional', dur: 5 },
    indica:     { code: 'CUP-PROMO5', pct: 5, tipo: 'promocional', dur: 3 },
    fidelidade: { code: 'CUP-PROMO8', pct: 8, tipo: 'promocional', dur: 5 },
    corporativo:{ code: 'CUP-PROMO12', pct: 12, tipo: 'promocional', dur: 4 },
    relampago:  { code: 'CUP-PROMO25', pct: 25, tipo: 'promocional', excl: true, dur: 2 },
    parceiro:   { code: 'CUP-PROMO7', pct: 7, tipo: 'promocional', dur: 3 }
  };
  var CAMPANHAS = {
    verao_total:  { code: 'CAMP-VERAO-TOTAL', pct: 15, months: [1, 2, 3, 4, 5, 6] },
    boas_vindas:  { code: 'CAMP-BOASVINDAS', pct: 12, months: [1, 2, 3] },
    black_friday: { code: 'CAMP-BLACKFRIDAY', pct: 18, months: [1, 2] }
  };
  var CAMPANHAS_KEYS = Object.keys(CAMPANHAS);
  var MONTHS_MAX = 6, PROMO_MAX_MESES = 5, ALCADA = 15;
  function mesesDe(key, entradaKey) {
    var c = CUPONS[key]; if (!c) return [];
    if (c.tipo === 'entrada') return c.months ? c.months.slice() : [1];
    var e = entradaKey && CUPONS[entradaKey];
    var ini = (e && e.months && e.months.length) ? Math.max.apply(null, e.months) + 1 : 1;
    var dur = Math.min(c.dur || PROMO_MAX_MESES, PROMO_MAX_MESES);
    var arr = []; for (var m = ini; m <= Math.min(ini + dur - 1, MONTHS_MAX); m++) arr.push(m);
    return arr;
  }

  /* ---------------- Catálogo ---------------- */
  var RAW = [
    ['PRD-1042', 'Box 5m² climatizado', 'Vila Leopoldina', 'Selfstorage', 389, 77.80, null],
    ['PRD-1108', 'Box 3m² standard', 'Vila Leopoldina', 'Selfstorage', 249, 83.00, 'verao'],
    ['PRD-1156', 'Box 8m² climatizado', 'Pinheiros', 'Selfstorage', 612, 76.50, null],
    ['PRD-1187', 'Box 2m² compacto', 'Lapa', 'Selfstorage', 179, 89.50, 'indica'],
    ['PRD-1203', 'Box 10m² premium', 'Faria Lima', 'Selfstorage', 790, 79.00, 'verao'],
    ['PRD-1245', 'Box 4m² standard', 'Tatuapé', 'Selfstorage', 299, 74.75, null],
    ['PRD-2087', 'Sala Flex 12m²', 'Barra Funda', 'Flex', 1290, 107.50, 'verao'],
    ['PRD-2094', 'Sala Flex 18m²', 'Barra Funda', 'Flex', 1780, 98.90, 'black'],
    ['PRD-2130', 'Sala Flex 25m²', 'Osasco', 'Flex', 2350, 94.00, null],
    ['PRD-2168', 'Sala Flex 9m²', 'Santo Amaro', 'Flex', 990, 110.00, 'primeiro'],
    ['PRD-2201', 'Sala Flex 15m²', 'Tatuapé', 'Flex', 1490, 99.30, 'indica'],
    ['PRD-3310', 'Galpão UI 80m²', 'Guarulhos', 'Galpão UI', 6800, 85.00, 'black'],
    ['PRD-3342', 'Galpão UI 120m²', 'Guarulhos', 'Galpão UI', 9600, 80.00, null],
    ['PRD-3389', 'Galpão UI 200m²', 'Osasco', 'Galpão UI', 15200, 76.00, 'black'],
    ['PRD-3401', 'Galpão UI 60m²', 'Alphaville', 'Galpão UI', 5400, 90.00, 'verao'],
    ['PRD-3455', 'Galpão UI 150m²', 'Guarulhos', 'Galpão UI', 11700, 78.00, null],
    ['PRD-4501', 'Office UI 24m²', 'Faria Lima', 'Office UI', 3600, 150.00, null],
    ['PRD-4538', 'Office UI 36m²', 'Faria Lima', 'Office UI', 5040, 140.00, 'primeiro'],
    ['PRD-4572', 'Office UI 18m²', 'Pinheiros', 'Office UI', 2880, 160.00, 'indica'],
    ['PRD-4610', 'Office UI 48m²', 'Alphaville', 'Office UI', 6240, 130.00, 'black']
  ];
  var ENTRADA_ALL = ['primeiro', 'black'], PROMO_POOL = ['verao', 'indica', 'corporativo', 'fidelidade', 'parceiro'];
  function ordPorDesconto(keys) { return keys.slice().sort(function (a, b) { return (CUPONS[b] ? CUPONS[b].pct : 0) - (CUPONS[a] ? CUPONS[a].pct : 0); }); }
  function entradaOptsFor(cup) { var s = []; if (cup && CUPONS[cup] && CUPONS[cup].tipo === 'entrada') s.push(cup); ENTRADA_ALL.forEach(function (k) { if (s.indexOf(k) < 0) s.push(k); }); return ordPorDesconto(s); }
  function promoOptsFor(cup) { var s = []; if (cup && CUPONS[cup] && CUPONS[cup].tipo === 'promocional') s.push(cup); PROMO_POOL.forEach(function (k) { if (s.indexOf(k) < 0) s.push(k); }); return ordPorDesconto(s).slice(0, 2); }
  function campanhaOptsFor(id) { var n = parseInt((String(id).match(/\d+/) || [0])[0], 10) || 0; return [CAMPANHAS_KEYS[n % CAMPANHAS_KEYS.length]]; }
  function alcadaDe(id, tip) { var base = ALCADA_TIPO[tip] || 15; var n = parseInt((id.match(/\d+/) || [0])[0], 10); return base + [-2, 0, 3][n % 3]; }
  function boxArea(p) { var m = p.desc.match(/(\d+)\s*m²/); return m ? parseInt(m[1], 10) : Math.max(1, Math.round(p.base / p.m2)); }

  var PRODUCTS = RAW.map(function (r) {
    var id = r[0], tip = r[3], cup = r[6];
    return { id: id, desc: r[1], un: r[2], tip: tip, base: r[4], m2: r[5], editable: TIPO_INFO[tip].editable, alcada: alcadaDe(id, tip), classif: TIPO_INFO[tip].classif, carac: TIPO_INFO[tip].carac, estr: TIPO_INFO[tip].estr, entradaOpts: entradaOptsFor(cup), promoOpts: promoOptsFor(cup), campanhaOpts: campanhaOptsFor(id) };
  });
  var LEADS = [
    { id: 'LD-8842', nome: 'Marina Alves Comércio', cidade: 'São Paulo/SP', ini: 'MA' },
    { id: 'LD-9017', nome: 'Logística Contorno Ltda', cidade: 'Guarulhos/SP', ini: 'LC' },
    { id: 'LD-9130', nome: 'Studio Prisma Arquitetura', cidade: 'São Paulo/SP', ini: 'SP' },
    { id: 'LD-9204', nome: 'Ferragens Vale Verde', cidade: 'Osasco/SP', ini: 'FV' },
    { id: 'LD-9288', nome: 'Café Serra Azul', cidade: 'São Paulo/SP', ini: 'CS' }
  ];
  var leadSel = null;

  /* ---------------- Datas / formatação ---------------- */
  function BRL(v) { return 'R$ ' + (Math.round(v * 100) / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
  function fmtPct(x) { return (Math.abs(x % 1) > 0.05 ? x.toFixed(1) : x.toFixed(0)) + '%'; }
  function D_ISO(d) { return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
  function dParse(s) { if (!s) return null; var a = String(s).split('-').map(Number); return (a[0] && a[1] && a[2]) ? new Date(a[0], a[1] - 1, a[2]) : null; }
  function dAddDays(s, n) { var d = dParse(s); if (!d) return ''; d.setDate(d.getDate() + n); return D_ISO(d); }
  function dAddMonths(s, n) { var d = dParse(s); if (!d) return ''; var day = d.getDate(); d.setMonth(d.getMonth() + n); if (d.getDate() < day) d.setDate(0); return D_ISO(d); }
  function fmtDate(iso) { if (!iso) return '—'; var a = String(iso).split('-'); return a[2] + '/' + a[1] + '/' + a[0]; }
  function vigBase() { var el = document.getElementById('moveIn'); return (el && el.value) ? el.value : '2026-07-25'; }
  function monthStartISO(base, m) { return dAddMonths(base, m - 1); }

  /* ---------------- Descontos (tiers) ---------------- */
  function tierPctOf(t, base) { var v = +t.val || 0; return t.un === 'R$' ? (base > 0 ? v / base * 100 : 0) : v; }
  function tierValOf(t, base) { var v = +t.val || 0; return t.un === 'R$' ? v : base * v / 100; }
  function tierActiveInMonth(t, m, base) { var de = dParse(t.de), ate = dParse(t.ate); if (!de || !ate) return false; var ms = dParse(monthStartISO(base, m)); return ms >= de && ms <= ate; }
  function tierMonthRange(t, base) { var de = null, ate = null; for (var m = 1; m <= MONTHS_MAX; m++) if (tierActiveInMonth(t, m, base)) { if (de === null) de = m; ate = m; } return { de: de || 0, ate: ate || 0 }; }
  function tierMonthLabel(t, base) { var r = tierMonthRange(t, base); if (!r.de) return '—'; return r.de === r.ate ? ('mês ' + r.de) : ('meses ' + r.de + '–' + r.ate); }
  function descTotalPct(ds, base) { return (ds || []).reduce(function (s, d) { return s + tierPctOf(d, base); }, 0); }
  function discSumVal(ds, m, base) { return (ds || []).reduce(function (s, d) { return tierActiveInMonth(d, m, base) ? s + tierValOf(d, base) : s; }, 0); }
  function manualAdjValue(base, src, m) { return discSumVal(src.descontos, m, base) - (+src.aumento || 0); }
  function exceedsAlcada(p, st) { if (!p.editable) return false; return descTotalPct(st.descontos, p.base) > p.alcada + 1e-9; }
  function couponPct1(st) {
    if (st.sel.campanha) return CAMPANHAS[st.sel.campanha].pct;
    var t = 0; if (st.sel.entrada && mesesDe(st.sel.entrada, null).indexOf(1) > -1) t += CUPONS[st.sel.entrada].pct;
    if (st.sel.promo && mesesDe(st.sel.promo, st.sel.entrada).indexOf(1) > -1) t += CUPONS[st.sel.promo].pct; return t;
  }
  function finalMonth1(p, st) { return Math.max(0, p.base - (p.editable ? manualAdjValue(p.base, st, 1) : 0) - p.base * couponPct1(st) / 100); }

  var state = PRODUCTS.map(function () { return { selected: false, descontos: [], aumento: '', sel: { entrada: '', promo: '', campanha: '' } }; });

  /* ---------------- Filtros ---------------- */
  function catCriteria() {
    return { q: (val('qSearch') || '').trim().toLowerCase(), tip: val('catTipologia'), cluster: val('catCluster'), un: val('catUnidade'), de: parseFloat(val('mDe')), ate: parseFloat(val('mAte')) };
  }
  function val(id) { var e = document.getElementById(id); return e ? e.value : ''; }
  function catHasCriteria(c) { return !!(c.q || c.tip || c.cluster || c.un || !isNaN(c.de) || !isNaN(c.ate)); }
  function catMatches(p, c) {
    if (c.q && (p.id + ' ' + p.desc).toLowerCase().indexOf(c.q) < 0) return false;
    if (c.tip && p.tip !== c.tip) return false;
    if (c.un && p.un !== c.un) return false;
    var area = boxArea(p);
    if (!isNaN(c.de) && area < c.de) return false;
    if (!isNaN(c.ate) && area > c.ate) return false;
    return true; // cluster decorativo
  }

  /* ---------------- Cupom (combobox) ---------------- */
  function coupCtx(i, type) { var p = PRODUCTS[i], sel = state[i].sel; if (type === 'entrada') return { opts: p.entradaOpts, cur: sel.entrada, LK: CUPONS }; if (type === 'promo') return { opts: p.promoOpts, cur: sel.promo, LK: CUPONS }; return { opts: p.campanhaOpts, cur: sel.campanha, LK: CAMPANHAS }; }
  function coupBlock(i, type) {
    var sel = state[i].sel, ctx = coupCtx(i, type);
    var eExcl = sel.entrada && CUPONS[sel.entrada] && CUPONS[sel.entrada].excl;
    var pExcl = sel.promo && CUPONS[sel.promo] && CUPONS[sel.promo].excl;
    if (ctx.cur) return { disabled: false, why: '' };
    if (type === 'campanha') { if (sel.entrada || sel.promo) return { disabled: true, why: 'A campanha não acumula com cupons' }; }
    else if (sel.campanha) return { disabled: true, why: 'A campanha não acumula com cupons' };
    else if (type === 'entrada' && pExcl) return { disabled: true, why: 'Cupom promocional “não acumula” em uso' };
    else if (type === 'promo' && eExcl) return { disabled: true, why: 'Cupom de entrada “não acumula” em uso' };
    return { disabled: false, why: '' };
  }
  function coupOptTxt(i, type, k) { var p = PRODUCTS[i], LK = coupCtx(i, type).LK; var iso = p.base * (1 - LK[k].pct / 100); return BRL(iso) + ' · -' + LK[k].pct + '%' + ((LK === CUPONS && LK[k].excl) ? ' · não acumula' : ''); }
  function coupCell(i, type) {
    var sel = state[i].sel, ctx = coupCtx(i, type), blk = coupBlock(i, type);
    var cur = ctx.cur, LK = ctx.LK;
    var label = cur ? LK[cur].code : '— Nenhum —';
    var mesesCur = cur ? (LK === CUPONS ? mesesDe(cur, sel.entrada) : (LK[cur].months || []).slice()) : [];
    var moList = mesesCur.slice().sort(function (a, b) { return a - b; }).join(', ');
    var hint = cur ? '<div class="coup-hint">' + (mesesCur.length > 1 ? 'Meses' : 'Mês') + ' ' + moList + ' · <b>' + BRL(PRODUCTS[i].base * (1 - LK[cur].pct / 100)) + '</b>/mês</div>' : '';
    return '<div class="coup-wrap"><button type="button" class="coup-sel' + (cur ? ' set' : '') + '"' + (blk.disabled ? ' disabled' : '') + (blk.why ? ' title="' + blk.why + '"' : '') + ' data-coup="' + i + '|' + type + '" aria-haspopup="listbox"><span class="cs-txt">' + label + '</span><svg class="cs-chev" viewBox="0 0 24 24"><use href="#ri-arrow-down-s"/></svg></button>' + hint + '</div>';
  }

  var coupPick = null;
  function openCoupPicker(i, type, btn) {
    if (btn.disabled) return;
    if (coupPick && coupPick.btn === btn) { closeCoupPicker(); return; }
    coupPick = { i: i, type: type, btn: btn };
    var box = document.getElementById('coupPicker'), q = document.getElementById('coupPickerQ');
    q.value = ''; q.placeholder = type === 'campanha' ? 'Buscar campanha…' : 'Buscar cupom…';
    renderCoupOptions();
    box.hidden = false;
    var r = btn.getBoundingClientRect(); var wpx = Math.max(248, Math.min(320, window.innerWidth - 24));
    box.style.width = wpx + 'px';
    box.style.left = Math.max(12, Math.min(r.left, window.innerWidth - wpx - 12)) + 'px';
    box.style.top = (window.scrollY + r.bottom + 4) + 'px';
    q.focus();
  }
  function renderCoupOptions() {
    if (!coupPick) return;
    var i = coupPick.i, type = coupPick.type, ctx = coupCtx(i, type), LK = ctx.LK;
    var term = (document.getElementById('coupPickerQ').value || '').trim().toLowerCase();
    function casa(k) { var c = LK[k] || {}; return [c.code, String(c.pct)].filter(Boolean).join(' ').toLowerCase().indexOf(term) > -1; }
    var lista = ctx.opts.filter(function (k) { return LK[k] && (!term || casa(k)); });
    function linha(key, txt, sub, on, tag) {
      return '<button type="button" class="cp-opt' + (on ? ' on' : '') + '" data-pick="' + key + '"><span class="cp-chk">' + (on ? '<svg viewBox="0 0 24 24"><use href="#ri-check"/></svg>' : '') + '</span><span class="cp-body"><span class="cp-t">' + txt + '</span>' + (sub ? '<span class="cp-s">' + sub + '</span>' : '') + '</span>' + (tag || '') + '</button>';
    }
    var html = linha('', '— Nenhum —', '', !ctx.cur, '');
    html += lista.map(function (k) {
      var c = LK[k];
      var meses = LK === CUPONS ? mesesDe(k, state[i].sel.entrada) : (c.months || []).slice();
      var mtxt = meses.length ? ((meses.length > 1 ? 'Meses ' : 'Mês ') + meses.slice().sort(function (a, b) { return a - b; }).join(', ')) : '';
      var sub = coupOptTxt(i, type, k) + (mtxt ? ' · ' + mtxt : '');
      var tag = (LK === CUPONS && c.excl) ? '<span class="cp-tag">não acumula</span>' : '';
      return linha(k, c.code, sub, ctx.cur === k, tag);
    }).join('');
    if (!lista.length && term) html += '<div class="cp-empty">Nenhum resultado para “' + term + '”</div>';
    document.getElementById('coupPickerList').innerHTML = html;
  }
  function closeCoupPicker() { var b = document.getElementById('coupPicker'); if (b) b.hidden = true; coupPick = null; }
  function pickCoup(key) { if (!coupPick) return; var i = coupPick.i, type = coupPick.type; closeCoupPicker(); state[i].sel[type] = key; render(); }

  /* ---------------- Desconto/aumento por linha ---------------- */
  function adjTags(i) {
    var st = state[i], vb = vigBase();
    var ds = (st.descontos || []).filter(function (d) { return (+d.val || 0) > 0; });
    var html = ds.map(function (d, k) {
      var lbl = d.un === 'R$' ? BRL(d.val) : fmtPct(d.val);
      return '<span class="adj-tag"><button class="adj-tag-main" data-adj="' + i + '" title="Editar · ' + tierMonthLabel(d, vb) + '"><b>−' + lbl + '</b><span class="adj-per">(' + fmtDate(d.de) + ' a ' + fmtDate(d.ate) + ')</span></button><button class="adj-tag-x" data-rmtier="' + i + '|' + k + '" aria-label="Remover">✕</button></span>';
    }).join('');
    var aum = +st.aumento || 0;
    if (aum) html += '<span class="adj-tag up"><button class="adj-tag-main" data-adj="' + i + '"><b>+' + BRL(aum) + '</b><span class="adj-per">(todos os meses)</span></button><button class="adj-tag-x" data-rmaum="' + i + '" aria-label="Remover">✕</button></span>';
    return html;
  }
  function adjCell(i) {
    var p = PRODUCTS[i], st = state[i];
    if (!p.editable) return '<span class="coupon-none">—</span>';
    var nDesc = (st.descontos || []).filter(function (d) { return (+d.val || 0) > 0; }).length;
    var hasAdj = nDesc > 0 || (+st.aumento || 0) > 0;
    var out = hasAdj
      ? '<div class="adj-cell"><div class="adj-tags">' + adjTags(i) + '</div><button class="adj-edit" data-adj="' + i + '"><svg viewBox="0 0 24 24"><use href="#ri-pencil"/></svg>Editar descontos</button></div>'
      : '<button class="adj-add" data-adj="' + i + '"><svg viewBox="0 0 24 24"><use href="#ri-add"/></svg>Adicionar desconto</button>';
    if (exceedsAlcada(p, st)) out += '<span class="approve-flag" title="Desconto acumulado acima da alçada"><svg viewBox="0 0 24 24"><use href="#ri-shield"/></svg>Aprovação</span>';
    return out;
  }

  /* ---------------- Render tabela ---------------- */
  var CAT_PAGE_SIZE = 6, catPage = 1;
  var tbody, counterEl, continueBtn;
  function selectedCount() { return state.filter(function (s) { return s.selected; }).length; }
  function render() {
    var c = catCriteria(), hasCrit = catHasCriteria(c);
    var matches = PRODUCTS.map(function (p, i) { return { p: p, i: i }; }).filter(function (o) { return state[o.i].selected || (hasCrit && catMatches(o.p, c)); });
    matches.sort(function (a, b) { return (state[b.i].selected ? 1 : 0) - (state[a.i].selected ? 1 : 0) || (b.p.base - a.p.base) || a.i - b.i; });
    var totalPages = Math.max(1, Math.ceil(matches.length / CAT_PAGE_SIZE));
    if (catPage > totalPages) catPage = totalPages;
    if (!matches.length) {
      tbody.innerHTML = '<tr><td colspan="9"><div class="empty"><span class="empty__icon"><svg viewBox="0 0 24 24"><use href="#ri-search"/></svg></span><p class="empty__title">' + (hasCrit ? 'Nenhum produto encontrado' : 'Busque para começar') + '</p><p class="empty__text">' + (hasCrit ? 'Ajuste a busca ou os filtros para ver outros resultados.' : 'Use a busca ou os filtros acima para encontrar os produtos.') + '</p></div></td></tr>';
    } else {
      var start = (catPage - 1) * CAT_PAGE_SIZE;
      tbody.innerHTML = matches.slice(start, start + CAT_PAGE_SIZE).map(function (o) {
        var p = o.p, i = o.i, st = state[i];
        return '<tr class="' + (st.selected ? 'sel' : '') + '">' +
          '<td class="col-chk"><label class="scheck"><input type="checkbox" data-sel="' + i + '"' + (st.selected ? ' checked' : '') + ' aria-label="Selecionar ' + p.id + '"/><span class="scheck__box"><svg viewBox="0 0 24 24"><use href="#ri-check"/></svg></span></label></td>' +
          '<td class="col-prod"><div class="prod"><div class="prod-txt"><div class="pid">' + p.id + '</div><div class="pdesc">' + p.desc + '</div></div><button class="prod-info-btn" data-info="' + i + '" title="Detalhe" aria-label="Detalhe"><svg viewBox="0 0 24 24"><use href="#ri-information"/></svg></button></div></td>' +
          '<td>' + p.un + '</td>' +
          '<td class="num">' + BRL(p.base) + '</td>' +
          '<td class="num">' + BRL(p.m2) + '</td>' +
          '<td class="col-adj">' + adjCell(i) + '</td>' +
          '<td class="col-coup">' + coupCell(i, 'entrada') + '</td>' +
          '<td class="col-coup">' + coupCell(i, 'promo') + '</td>' +
          '<td class="col-coup">' + coupCell(i, 'campanha') + '</td>' +
        '</tr>';
      }).join('');
    }
    var n = selectedCount();
    counterEl.innerHTML = '<b>' + n + '</b> selecionado' + (n === 1 ? '' : 's');
    continueBtn.disabled = n === 0;
    var pager = document.getElementById('catPager');
    if (matches.length > CAT_PAGE_SIZE) { pager.hidden = false; document.getElementById('catPgInfo').textContent = catPage + '/' + totalPages; document.getElementById('catPrev').disabled = catPage <= 1; document.getElementById('catNext').disabled = catPage >= totalPages; }
    else pager.hidden = true;
  }

  /* ---------------- Modal desconto ---------------- */
  var adjRow = null, adjDraft = null, adjVigErr = false;
  function novoTier(deISO) { return { val: '', un: '%', de: deISO, ate: dAddDays(dAddMonths(deISO, 1), -1), just: '' }; }
  function openAdjust(i) {
    adjRow = i; var p = PRODUCTS[i], st = state[i];
    adjDraft = { descontos: (st.descontos && st.descontos.length ? st.descontos.map(function (d) { return { val: d.val, un: d.un, de: d.de, ate: d.ate, just: d.just || '' }; }) : [novoTier(vigBase())]), aumento: st.aumento || '' };
    document.getElementById('adjTitle').textContent = p.id + ' · ' + p.desc;
    document.getElementById('adjBase').textContent = BRL(p.base);
    document.getElementById('adjAlc').textContent = fmtPct(p.alcada);
    document.getElementById('adjAum').value = st.aumento || '';
    adjVigErr = false; renderDescList(); DS.openModal('m-adjust');
  }
  function renderDescList() {
    var p = PRODUCTS[adjRow], lim = p.alcada, acc = 0, base = vigBase();
    document.getElementById('descList').innerHTML = adjDraft.descontos.map(function (d, k) {
      var pctK = tierPctOf(d, p.base); var antes = acc; acc += pctK; var exceeds = acc > lim + 1e-9; var disp = Math.max(0, lim - antes);
      var prev = k > 0 ? adjDraft.descontos[k - 1] : null; var minDe = (prev && prev.ate) ? dAddDays(prev.ate, 1) : base;
      var errK = adjVigErr && (parseFloat(d.val) || 0) > 0 && (!d.de || !d.ate);
      return '<div class="desc-tier"><div class="dt-head"><span class="dt-n">Desconto ' + (k + 1) + '</span>' + (adjDraft.descontos.length > 1 ? '<button class="dt-remove" data-rmdesc="' + k + '" aria-label="Remover">✕</button>' : '') + '</div>' +
        '<div class="dt-grid"><div class="dt-f"><label class="dt-lbl">Valor do desconto</label><div class="dt-val' + (exceeds ? ' over' : '') + '"><input class="dt-num" type="number" min="0" step="' + (d.un === 'R$' ? '1' : '0.5') + '" value="' + d.val + '" data-dval="' + k + '"><select class="dt-un" data-dun="' + k + '"><option value="%"' + (d.un !== 'R$' ? ' selected' : '') + '>%</option><option value="R$"' + (d.un === 'R$' ? ' selected' : '') + '>R$</option></select></div><div class="dt-eq">' + (pctK > 0 ? (fmtPct(pctK) + ' · ' + BRL(tierValOf(d, p.base))) : ('disponível: ' + fmtPct(disp))) + '</div></div>' +
        '<div class="dt-f"><label class="dt-lbl">Vigência' + (d.de && d.ate ? ' <span class="dt-mhint">(' + tierMonthLabel(d, base) + ')</span>' : '') + '</label><div class="dt-range"><span class="dt-w">de</span><input class="dt-date' + (errK ? ' err' : '') + '" type="date" value="' + (d.de || '') + '" min="' + minDe + '" data-ddate="' + k + '|de"><span class="dt-w">até</span><input class="dt-date' + (errK ? ' err' : '') + '" type="date" value="' + (d.ate || '') + '" min="' + (d.de || minDe) + '" data-ddate="' + k + '|ate"></div></div></div>' +
        '<div class="dt-just' + (exceeds ? ' show' : '') + '"><div class="dt-just-err">Acumulado de ' + fmtPct(acc) + ' ultrapassa a alçada de ' + fmtPct(lim) + ' — informe a justificativa.</div><textarea placeholder="Justificativa deste desconto..." data-djust="' + k + '">' + (d.just || '') + '</textarea></div></div>';
    }).join('');
    renderAlcadaBar(); updatePreview();
  }
  function renderAlcadaBar() {
    var p = PRODUCTS[adjRow], lim = p.alcada, tot = descTotalPct(adjDraft.descontos, p.base), rest = Math.max(0, lim - tot), over = tot > lim + 1e-9;
    document.getElementById('adjAlcadaBar').innerHTML =
      '<div class="alc-row"><span class="alc-k">Alçada do produto</span><b>' + fmtPct(lim) + '</b></div>' +
      '<div class="alc-track"><div class="alc-fill' + (over ? ' over' : '') + '" style="width:' + Math.min(100, lim > 0 ? tot / lim * 100 : 0) + '%"></div></div>' +
      '<div class="alc-row"><span class="alc-k">Aplicado (acumulado)</span><b>' + fmtPct(tot) + '</b></div>' +
      '<div class="alc-row"><span class="alc-k">' + (over ? 'Excedido em' : 'Disponível') + '</span><b class="' + (over ? 'alc-neg' : 'alc-pos') + '">' + fmtPct(over ? tot - lim : rest) + '</b></div>';
  }
  function updatePreview() { var p = PRODUCTS[adjRow]; document.getElementById('adjFinal').textContent = BRL(Math.max(0, p.base - manualAdjValue(p.base, adjDraft, 1))); }
  function addDesconto() { var last = adjDraft.descontos[adjDraft.descontos.length - 1]; var start = (last && last.ate) ? dAddDays(last.ate, 1) : vigBase(); adjDraft.descontos.push(novoTier(start)); renderDescList(); }
  function removeDesconto(k) { adjDraft.descontos.splice(k, 1); if (!adjDraft.descontos.length) adjDraft.descontos.push(novoTier(vigBase())); renderDescList(); }
  function applyAdjust() {
    var st = state[adjRow];
    if (adjDraft.descontos.some(function (d) { return (parseFloat(d.val) || 0) > 0 && (!d.de || !d.ate); })) { adjVigErr = true; renderDescList(); return; }
    st.descontos = adjDraft.descontos.filter(function (d) { return (parseFloat(d.val) || 0) > 0 && d.de && d.ate; }).map(function (d) { return { val: parseFloat(d.val) || 0, un: d.un === 'R$' ? 'R$' : '%', de: d.de, ate: d.ate, just: (d.just || '').trim() }; });
    st.aumento = Math.max(0, Math.round(parseFloat(adjDraft.aumento) || 0));
    DS.closeModal(document.getElementById('m-adjust')); render();
  }

  function openDetail(i) {
    var p = PRODUCTS[i];
    document.getElementById('det-title').textContent = p.id + ' · ' + p.desc;
    document.getElementById('det-body').innerHTML = drow('Tipologia', p.tip) + drow('Classificação', p.classif) + drow('Características', p.carac) + drow('Estrutura', p.estr) + drow('Preço base', BRL(p.base)) + drow('Alçada do produto', fmtPct(p.alcada));
    DS.openModal('m-detail'); function drow(k, v) { return '<div class="detail-row"><dt>' + k + '</dt><dd>' + v + '</dd></div>'; }
  }

  /* ---------------- Autocomplete lead ---------------- */
  function autocomplete(input, acEl, getItems, onPick) {
    function close() { acEl.hidden = true; acEl.innerHTML = ''; }
    function open() { var items = getItems((input.value || '').trim().toLowerCase()); acEl._items = items; if (!items.length) { close(); return; } acEl.innerHTML = items.map(function (it, i) { return '<button class="ac__item" data-i="' + i + '">' + it.html + '</button>'; }).join(''); acEl.hidden = false; }
    input.addEventListener('input', open); input.addEventListener('focus', open);
    acEl.addEventListener('mousedown', function (e) { var b = e.target.closest('.ac__item'); if (!b) return; e.preventDefault(); onPick(acEl._items[+b.dataset.i]); close(); });
    document.addEventListener('mousedown', function (e) { if (!acEl.contains(e.target) && e.target !== input) close(); });
  }

  /* ---------------- Wire ---------------- */
  document.addEventListener('DOMContentLoaded', function () {
    tbody = document.getElementById('rows'); counterEl = document.getElementById('sel-counter'); continueBtn = document.getElementById('continue-btn');

    // filtros inline
    ['qSearch', 'mDe', 'mAte'].forEach(function (id) { document.getElementById(id).addEventListener('input', function () { catPage = 1; render(); }); });
    ['catTipologia', 'catCluster', 'catUnidade'].forEach(function (id) { document.getElementById(id).addEventListener('change', function () { catPage = 1; render(); }); });
    document.getElementById('catClear').addEventListener('click', function () { ['qSearch', 'mDe', 'mAte', 'catTipologia', 'catCluster', 'catUnidade'].forEach(function (id) { document.getElementById(id).value = ''; }); catPage = 1; render(); });
    document.getElementById('catPrev').addEventListener('click', function () { if (catPage > 1) { catPage--; render(); } });
    document.getElementById('catNext').addEventListener('click', function () { catPage++; render(); });

    // tabela — delegação
    tbody.addEventListener('change', function (e) { var cb = e.target.closest('[data-sel]'); if (cb) { state[+cb.getAttribute('data-sel')].selected = cb.checked; render(); } });
    tbody.addEventListener('click', function (e) {
      var t;
      if ((t = e.target.closest('[data-adj]'))) return openAdjust(+t.getAttribute('data-adj'));
      if ((t = e.target.closest('[data-info]'))) return openDetail(+t.getAttribute('data-info'));
      if ((t = e.target.closest('[data-rmtier]'))) { var a = t.getAttribute('data-rmtier').split('|'); var ds = state[+a[0]].descontos.filter(function (d) { return (+d.val || 0) > 0; }); var alvo = ds[+a[1]]; state[+a[0]].descontos = state[+a[0]].descontos.filter(function (d) { return d !== alvo; }); return render(); }
      if ((t = e.target.closest('[data-rmaum]'))) { state[+t.getAttribute('data-rmaum')].aumento = 0; return render(); }
      if ((t = e.target.closest('[data-coup]'))) { var b = t.getAttribute('data-coup').split('|'); return openCoupPicker(+b[0], b[1], t); }
    });

    // combobox de cupom
    document.getElementById('coupPickerQ').addEventListener('input', renderCoupOptions);
    document.getElementById('coupPickerList').addEventListener('click', function (e) { var b = e.target.closest('[data-pick]'); if (b) pickCoup(b.getAttribute('data-pick')); });
    document.addEventListener('mousedown', function (e) { if (coupPick && !e.target.closest('#coupPicker') && !e.target.closest('.coup-sel')) closeCoupPicker(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && coupPick) closeCoupPicker(); });

    // modal desconto — delegação
    var dl = document.getElementById('descList');
    dl.addEventListener('input', function (e) {
      var t;
      if ((t = e.target.closest('[data-dval]'))) { adjDraft.descontos[+t.getAttribute('data-dval')].val = t.value; renderAlcadaBar(); updatePreview(); refreshTierState(); }
      else if ((t = e.target.closest('[data-djust]'))) { adjDraft.descontos[+t.getAttribute('data-djust')].just = t.value; }
    });
    dl.addEventListener('change', function (e) {
      var t;
      if ((t = e.target.closest('[data-dun]'))) { adjDraft.descontos[+t.getAttribute('data-dun')].un = t.value; renderDescList(); }
      else if ((t = e.target.closest('[data-ddate]'))) { var a = t.getAttribute('data-ddate').split('|'); onDescDate(+a[0], a[1], t.value); }
    });
    dl.addEventListener('click', function (e) { var t = e.target.closest('[data-rmdesc]'); if (t) removeDesconto(+t.getAttribute('data-rmdesc')); });
    function refreshTierState() {
      var p = PRODUCTS[adjRow], lim = p.alcada, acc = 0;
      adjDraft.descontos.forEach(function (d, idx) { acc += tierPctOf(d, p.base); var tier = document.querySelectorAll('#descList .desc-tier')[idx]; if (!tier) return; var ex = acc > lim + 1e-9; tier.querySelector('.dt-just').classList.toggle('show', ex); tier.querySelector('.dt-val').classList.toggle('over', ex); });
    }
    function onDescDate(k, f, v) {
      var d = adjDraft.descontos[k]; d[f] = v;
      if (f === 'de' && d.ate && dParse(d.ate) < dParse(v)) d.ate = dAddDays(dAddMonths(v, 1), -1);
      if (f === 'ate' && d.de && dParse(v) < dParse(d.de)) d.ate = d.de;
      for (var j = k + 1; j < adjDraft.descontos.length; j++) { var prev = adjDraft.descontos[j - 1], cur = adjDraft.descontos[j]; if (!prev.ate) break; var min = dAddDays(prev.ate, 1); if (!cur.de || dParse(cur.de) < dParse(min)) { cur.de = min; if (!cur.ate || dParse(cur.ate) < dParse(min)) cur.ate = dAddDays(dAddMonths(min, 1), -1); } }
      renderDescList();
    }
    document.getElementById('adjAddDesc').addEventListener('click', addDesconto);
    document.getElementById('adjAum').addEventListener('input', function () { var clean = String(this.value).replace(/[^0-9]/g, ''); if (this.value !== clean) this.value = clean; adjDraft.aumento = clean; updatePreview(); });
    document.getElementById('adj-apply').addEventListener('click', applyAdjust);

    // lead autocomplete
    var leadInput = document.getElementById('lead-input');
    autocomplete(leadInput, document.getElementById('lead-ac'),
      function (q) { return LEADS.filter(function (l) { return !q || l.nome.toLowerCase().indexOf(q) > -1 || l.id.toLowerCase().indexOf(q) > -1; }).map(function (l) { return { lead: l, html: '<span class="ac__id">' + l.id + '</span><span>' + l.nome + '</span><small>' + l.cidade + '</small>' }; }); },
      function (it) { leadSel = it.lead; leadInput.value = it.lead.nome; }
    );
    document.getElementById('lead-field').addEventListener('click', function () { leadInput.focus(); });

    document.getElementById('continue-btn').addEventListener('click', function () {
      var chosen = PRODUCTS.map(function (p, i) { return { p: p, i: i }; }).filter(function (o) { return state[o.i].selected; });
      if (!chosen.length) return;
      var payload = { moveIn: vigBase(), lead: leadSel ? { nome: leadSel.nome, meta: leadSel.id + ' · ' + leadSel.cidade, ini: leadSel.ini } : { nome: 'Marina Alves Comércio', meta: 'LD-8842 · São Paulo/SP', ini: 'MA' }, vendedor: 'André Foguel', alcadaUser: 15,
        items: chosen.map(function (o) { var p = o.p, st = state[o.i]; return { id: p.id, desc: p.desc, un: p.un, tip: p.tip, tipLabel: p.tip, base: p.base, editable: p.editable, alcada: p.alcada, classif: p.classif, carac: p.carac, estr: p.estr, descontos: st.descontos, aumento: st.aumento, sel: st.sel, above: exceedsAlcada(p, st) }; }) };
      try { sessionStorage.setItem('tars-orc', JSON.stringify(payload)); sessionStorage.setItem('nav-ok', '1'); } catch (e) {}
      window.location.href = '../resumo/resumo.html';
    });

    render();
  });
})();
