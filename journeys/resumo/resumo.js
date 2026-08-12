/* ============================================================
   Resumo do orçamento — regras aprovadas (wireframe 10-A_4)
   Cupons com vigência calculada, alçada por produto.
   Lê seleção da Consulta (sessionStorage) · fallback mock.
   ============================================================ */
(function () {
  'use strict';

  /* Guarda de navegação: a Listagem é a home. Recarregar/abrir direto volta pra ela. */
  var navOk; try { navOk = sessionStorage.getItem('nav-ok') === '1'; if (navOk) sessionStorage.removeItem('nav-ok'); } catch (e) { navOk = true; }
  if (!navOk) { try { location.replace('../listagem/listagem.html'); } catch (e) {} return; }

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
  var MONTHS_MAX = 6, PROMO_MAX_MESES = 5, SIM_MIN = 3;
  function mesesDe(key, entradaKey) {
    var c = CUPONS[key]; if (!c) return [];
    if (c.tipo === 'entrada') return c.months ? c.months.slice() : [1];
    var e = entradaKey && CUPONS[entradaKey];
    var ini = (e && e.months && e.months.length) ? Math.max.apply(null, e.months) + 1 : 1;
    var dur = Math.min(c.dur || PROMO_MAX_MESES, PROMO_MAX_MESES);
    var arr = []; for (var m = ini; m <= Math.min(ini + dur - 1, MONTHS_MAX); m++) arr.push(m);
    return arr;
  }
  function mesesLabel(arr) { if (!arr.length) return '—'; var a = Math.min.apply(null, arr), b = Math.max.apply(null, arr); return a === b ? ('mês ' + a) : ('meses ' + a + '–' + b); }

  var data = null;
  try { data = JSON.parse(sessionStorage.getItem('tars-orc')); } catch (e) {}
  if (!data || !data.items || !data.items.length) data = MOCK();
  function MOCK() {
    var none = { entrada: null, promo: null, campanha: null };
    return {
      moveIn: '2026-07-25', lead: { nome: 'Marina Alves Comércio', meta: 'LD-8842 · São Paulo/SP', ini: 'MA' }, vendedor: 'André Foguel', alcadaUser: 15,
      items: [
        { id: 'PRD-1156', desc: 'Box 8m² climatizado', un: 'Pinheiros', tip: 'Selfstorage', tipLabel: 'Selfstorage', base: 612, editable: false, alcada: 18, classif: 'Guarda-volumes pessoal', carac: 'Box individual, acesso 24h, monitoramento CFTV, climatização opcional.', estr: 'Módulo interno em corredor, pé-direito 2,4m.', descontos: [], aumento: 0, justificativa: '', sel: { entrada: null, promo: null, campanha: null }, above: false },
        { id: 'PRD-2087', desc: 'Sala Flex 12m²', un: 'Barra Funda', tip: 'Flex', tipLabel: 'Flex', base: 1290, editable: true, alcada: 23, classif: 'Espaço corporativo flexível', carac: 'Sala fechada, ponto de energia, mobiliário opcional.', estr: 'Andar intermediário, acesso por corredor central.', descontos: [], aumento: 0, justificativa: '', sel: { entrada: null, promo: null, campanha: null }, above: false },
        { id: 'PRD-2094', desc: 'Sala Flex 18m²', un: 'Barra Funda', tip: 'Flex', tipLabel: 'Flex', base: 1780, editable: true, alcada: 18, classif: 'Espaço corporativo flexível', carac: 'Sala fechada, ponto de energia, mobiliário opcional.', estr: 'Andar intermediário, acesso por corredor central.', descontos: [], aumento: 0, justificativa: '', sel: { entrada: null, promo: null, campanha: null }, above: false }
      ]
    };
  }
  var TIP_BADGE = { 'Selfstorage': 'badge--default', 'Flex': 'badge--secondary', 'Galpão UI': 'badge--success', 'Office UI': 'badge--yellow' };
  function tipBadge(it) { return '<span class="badge ' + (TIP_BADGE[it.tip] || 'badge--outline') + '">' + it.tipLabel + '</span>'; }

  /* Preço (descontos em tiers por data + aumento + cupons) */
  function money(v) { return 'R$ ' + (Math.round(v * 100) / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
  function D_ISO(d) { return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
  function dParse(s) { if (!s) return null; var a = String(s).split('-').map(Number); return (a[0] && a[1] && a[2]) ? new Date(a[0], a[1] - 1, a[2]) : null; }
  function dAddMonths(s, n) { var d = dParse(s); if (!d) return ''; var day = d.getDate(); d.setMonth(d.getMonth() + n); if (d.getDate() < day) d.setDate(0); return D_ISO(d); }
  function vigBase() { return (data && data.moveIn) || '2026-07-25'; }
  function monthStartISO(base, m) { return dAddMonths(base, m - 1); }
  function tierActiveInMonth(t, m, vb) { var de = dParse(t.de), ate = dParse(t.ate); if (!de || !ate) return false; var ms = dParse(monthStartISO(vb, m)); return ms >= de && ms <= ate; }
  function tierValOf(t, base) { var v = +t.val || 0; return t.un === 'R$' ? v : base * v / 100; }
  function tierPctOf(t, base) { var v = +t.val || 0; return t.un === 'R$' ? (base > 0 ? v / base * 100 : 0) : v; }
  function pctManualTot(it) { return (it.descontos || []).reduce(function (s, d) { return s + tierPctOf(d, it.base); }, 0); }
  function manualAdj(it, m) { if (!it.editable) return 0; var vb = vigBase(); var disc = (it.descontos || []).reduce(function (s, d) { return tierActiveInMonth(d, m, vb) ? s + tierValOf(d, it.base) : s; }, 0); return disc - (+it.aumento || 0); }
  function pctAtMonth(it, m, includeCampaign) {
    if (it.sel.campanha) return (includeCampaign !== false && CAMPANHAS[it.sel.campanha].months.indexOf(m) > -1) ? CAMPANHAS[it.sel.campanha].pct : 0;
    var pct = 0;
    if (it.sel.entrada && mesesDe(it.sel.entrada, null).indexOf(m) > -1) pct += CUPONS[it.sel.entrada].pct;
    if (it.sel.promo && mesesDe(it.sel.promo, it.sel.entrada).indexOf(m) > -1) pct += CUPONS[it.sel.promo].pct;
    return pct;
  }
  function priceMonth(it, m, includeCampaign) { return Math.max(0, it.base - manualAdj(it, m) - it.base * pctAtMonth(it, m, includeCampaign) / 100); }
  function simMonths(it) {
    var last = 1, vb = vigBase();
    if (it.sel.campanha) last = Math.max(last, Math.max.apply(null, CAMPANHAS[it.sel.campanha].months));
    if (it.sel.entrada) last = Math.max(last, Math.max.apply(null, mesesDe(it.sel.entrada, null)));
    if (it.sel.promo) last = Math.max(last, Math.max.apply(null, mesesDe(it.sel.promo, it.sel.entrada)));
    for (var m = 1; m <= MONTHS_MAX; m++) if ((it.descontos || []).some(function (d) { return tierActiveInMonth(d, m, vb); })) last = Math.max(last, m);
    return Math.min(MONTHS_MAX, Math.max(SIM_MIN, last));
  }
  function faixas(it) {
    var sim = simMonths(it), out = [], cur = null;
    for (var m = 1; m <= sim; m++) { var pr = Math.round(priceMonth(it, m) * 100) / 100; if (cur && cur.price === pr) cur.to = m; else { cur = { from: m, to: m, price: pr }; out.push(cur); } }
    return out;
  }
  function totals(items) {
    var base = 0, desc = 0, negoc = 0, comCamp = 0;
    items.forEach(function (it) { base += it.base; desc += (it.base - priceMonth(it, 1)); negoc += priceMonth(it, 1, false); comCamp += priceMonth(it, 1, true); });
    return { base: base, desc: desc, negoc: negoc, comCamp: comCamp };
  }

  function uuid() { return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) { var r = Math.random() * 16 | 0; return (c === 'x' ? r : (r & 3 | 8)).toString(16); }); }
  function orcNum() { return 'ORC-' + (1000 + Math.floor(Math.random() * 9000)); }
  var tips = []; data.items.forEach(function (it) { if (tips.indexOf(it.tip) < 0) tips.push(it.tip); });
  var orcMap = {}; tips.forEach(function (t) { orcMap[t] = { num: orcNum(), uuid: uuid(), label: data.items.filter(function (i) { return i.tip === t; })[0].tipLabel }; });

  var activeTab = 'all';
  function itemsForTab() { return activeTab === 'all' ? data.items : data.items.filter(function (it) { return it.tip === activeTab; }); }

  function couponTags(it) {
    var html = '';
    ['entrada', 'promo', 'campanha'].forEach(function (axis) {
      var key = it.sel[axis]; if (!key) return;
      var code = axis === 'campanha' ? CAMPANHAS[key].code : CUPONS[key].code;
      var meses = axis === 'campanha' ? CAMPANHAS[key].months : mesesDe(key, axis === 'promo' ? it.sel.entrada : null);
      html += '<span class="badge badge--success badge--tag" style="cursor:default">' + code + '<span class="badge__meta">' + mesesLabel(meses) + '</span></span>';
    });
    return html || '<span style="color:var(--content-disable)">Sem cupom</span>';
  }
  function cardHtml(it) {
    var fp = priceMonth(it, 1);
    var sched = faixas(it).map(function (f) { var rng = f.from === f.to ? ('Mês ' + f.from) : ('Meses ' + f.from + '–' + f.to); return '<div class="sched__row"><span>' + rng + '</span><span>' + money(f.price) + '</span></div>'; }).join('');
    var specs = it.editable ? row('Classificação', it.classif) + row('Características', it.carac) + row('Estrutura', it.estr) : row('Classificação', it.classif) + row('Especificação', it.carac) + row('Localização', it.estr);
    var approval = it.above ? '<div class="banner banner--warning" role="alert" style="margin-top:12px"><span class="banner__icon"><svg viewBox="0 0 24 24" style="width:20px;height:20px;fill:var(--content-label-warning)"><use href="#ri-error-warning"/></svg></span><div class="banner__content"><h3 class="banner__title">Entra em aprovação ao criar</h3><p class="banner__text">Desconto de ' + Math.round(pctManualTot(it)) + '% acima da alçada de ' + it.alcada + '%.' + (it.justificativa ? ' Justificativa: “' + it.justificativa + '”.' : ' <strong>Justificativa obrigatória.</strong>') + '</p></div></div>' : '';
    return '<div class="ocard">' +
      '<div class="ocard__head"><div><p class="prod__id">' + it.id + '</p><p class="ocard__title">' + it.desc + '</p><p class="ocard__sub">' + it.un + ' · ' + tipBadge(it) + '</p></div>' +
      '<div style="text-align:right">' + (fp < it.base ? '<span class="price-old">' + money(it.base) + '</span>' : '') + '<span class="ocard__price">' + money(fp) + '</span><span class="ocard__permo">/mês (1º mês)</span></div></div>' +
      '<div class="ocard__sec"><p class="ocard__lbl">Cupons / campanha</p><div class="ocard__tags">' + couponTags(it) + '</div></div>' +
      '<div class="ocard__sec"><p class="ocard__lbl">Simulação mensal</p><div class="sched">' + sched + '</div></div>' +
      '<div class="ocard__sec"><p class="ocard__lbl">' + (it.editable ? 'Condições comerciais' : 'Especificações') + '</p><dl class="detail-grid">' + specs + '</dl></div>' + approval +
    '</div>';
    function row(k, v) { return '<div class="detail-row"><dt>' + k + '</dt><dd>' + v + '</dd></div>'; }
  }

  function render() {
    var tabsEl = document.getElementById('tabs');
    if (tips.length > 1) {
      var t = '<button class="tab' + (activeTab === 'all' ? ' tab--active' : '') + '" data-tab="all">Todos</button>';
      tips.forEach(function (tp) { t += '<button class="tab' + (activeTab === tp ? ' tab--active' : '') + '" data-tab="' + tp + '">' + orcMap[tp].label + '</button>'; });
      tabsEl.innerHTML = t; tabsEl.hidden = false;
    } else tabsEl.hidden = true;

    var numeros = (activeTab === 'all') ? tips.map(function (tp) { return orcMap[tp].num + ' (' + orcMap[tp].label + ')'; }).join(' · ') : orcMap[activeTab].num;
    var uid = (activeTab === 'all') ? (tips.length > 1 ? '— (um por tipologia)' : orcMap[tips[0]].uuid) : orcMap[activeTab].uuid;
    document.getElementById('dados').innerHTML =
      d('Lead', data.lead.nome + ' · ' + data.lead.meta.replace(' · Lead vinculado', '')) + d('Vendedor', data.vendedor + ' · Alçada ' + data.alcadaUser + '%') +
      d('Data de move in', '25/Jul/2026') + d('Prazo de validade', 'D+3') +
      d('Nº de produtos', String(itemsForTab().length)) + d('Emissão', new Date().toLocaleDateString('pt-BR')) +
      d('Número do orçamento', numeros) + d('UUID', '<code>' + uid + '</code>');

    document.getElementById('cards').innerHTML = itemsForTab().map(cardHtml).join('');
    var tt = totals(itemsForTab());
    document.getElementById('t-base').textContent = money(tt.base);
    document.getElementById('t-desc').textContent = '– ' + money(tt.desc);
    document.getElementById('t-negoc').textContent = money(tt.negoc);
    document.getElementById('t-camp').textContent = money(tt.comCamp);
    function d(k, v) { return '<div class="dados__row"><dt>' + k + '</dt><dd>' + v + '</dd></div>'; }
  }

  function openCreated() {
    var above = data.items.filter(function (it) { return it.above; });
    var auto = data.items.filter(function (it) { return !it.above; });
    var body = document.getElementById('created-body');
    function cards(arr) { return '<div class="created__grid">' + arr.map(function (it) { return '<div class="created__card"><p class="created__orc">' + orcMap[it.tip].num + '</p><p class="created__name">' + it.desc + '</p>' + tipBadge(it) + '</div>'; }).join('') + '</div>'; }
    function group(title, arr) { return arr.length ? ('<p class="created__grouplbl">' + title + '</p>' + cards(arr)) : ''; }
    body.innerHTML = '<div class="created__head"><p class="modal-note" style="margin:0">Cada tipologia gerou um orçamento próprio.</p><span class="badge badge--outline">Pendente</span></div>' + group('Em aprovação (' + above.length + ')', above) + group('Criados automaticamente (' + auto.length + ')', auto);
    DS.openModal('m-created');
  }

  document.addEventListener('DOMContentLoaded', function () {
    render();
    document.getElementById('tabs').addEventListener('click', function (e) { var b = e.target.closest('[data-tab]'); if (!b) return; activeTab = b.getAttribute('data-tab'); render(); });
    document.getElementById('btn-voltar').addEventListener('click', function () { try { sessionStorage.setItem('nav-ok', '1'); } catch (e) {} window.location.href = '../consulta-catalogo/consulta.html'; });
    document.getElementById('btn-rascunho').addEventListener('click', function () { alert('Salvo como rascunho (status Rascunho) — sem validação de alçada.'); });
    document.getElementById('btn-criar').addEventListener('click', openCreated);
  });
})();
