/* ============================================================
   Dados compartilhados de Orçamentos (Listagem + Perfil + Reenvio)
   Geração determinística (seed) → os 124 registros são idênticos
   em qualquer página que incluir este arquivo.
   Expõe window.OrcData.
   ============================================================ */
(function () {
  'use strict';
  var _seed = 20260722;
  function rng() { _seed = (_seed * 1103515245 + 12345) & 0x7fffffff; return _seed / 0x7fffffff; }
  function pick(a) { return a[Math.floor(rng() * a.length)]; }
  function uuidv4() { return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) { var r = rng() * 16 | 0; return (c === 'x' ? r : (r & 3 | 8)).toString(16); }); }

  var TIPO_INFO = {
    'Selfstorage': { editable: false, classif: 'Guarda-volumes pessoal', carac: 'Box individual, acesso 24h, monitoramento CFTV, climatização opcional.', estr: 'Módulo interno em corredor, pé-direito 2,4m.' },
    'Flex': { editable: true, classif: 'Espaço corporativo flexível', carac: 'Sala fechada, ponto de energia, mobiliário opcional.', estr: 'Andar intermediário, acesso por corredor central.' },
    'Galpão UI': { editable: true, classif: 'Logística e estoque', carac: 'Doca de carga, piso reforçado, pé-direito 8m.', estr: 'Quadra logística, acesso por doca, próximo à expedição.' },
    'Office UI': { editable: true, classif: 'Escritório premium', carac: 'Sala com copa, ar-condicionado, internet dedicada.', estr: 'Torre corporativa, andar alto com vista.' }
  };
  var ALCADA_TIPO = { 'Selfstorage': 15, 'Flex': 20, 'Galpão UI': 25, 'Office UI': 18 };
  function alcadaDe(id, tip) { var base = ALCADA_TIPO[tip] || 15; var n = parseInt((id.match(/\d+/) || [0])[0], 10); return base + [-2, 0, 3][n % 3]; }
  var CUPONS = {
    primeiro: { code: 'CUP-ENTRADA20', pct: 20, tipo: 'entrada', months: [1] }, black: { code: 'CUP-ENTRADA15', pct: 15, tipo: 'entrada', excl: true, months: [1, 2] },
    verao: { code: 'CUP-PROMO10', pct: 10, tipo: 'promocional', dur: 5 }, indica: { code: 'CUP-PROMO5', pct: 5, tipo: 'promocional', dur: 3 },
    fidelidade: { code: 'CUP-PROMO8', pct: 8, tipo: 'promocional', dur: 5 }, corporativo: { code: 'CUP-PROMO12', pct: 12, tipo: 'promocional', dur: 4 },
    relampago: { code: 'CUP-PROMO25', pct: 25, tipo: 'promocional', excl: true, dur: 2 }, parceiro: { code: 'CUP-PROMO7', pct: 7, tipo: 'promocional', dur: 3 }
  };
  var CAMPANHAS = { verao_total: { code: 'CAMP-VERAO-TOTAL', pct: 15, months: [1, 2, 3, 4, 5, 6] }, boas_vindas: { code: 'CAMP-BOASVINDAS', pct: 12, months: [1, 2, 3] }, black_friday: { code: 'CAMP-BLACKFRIDAY', pct: 18, months: [1, 2] } };
  var MONTHS_MAX = 6;
  function mesesDe(key, entradaKey) { var c = CUPONS[key]; if (!c) return []; if (c.tipo === 'entrada') return c.months ? c.months.slice() : [1]; var e = entradaKey && CUPONS[entradaKey]; var ini = (e && e.months && e.months.length) ? Math.max.apply(null, e.months) + 1 : 1; var dur = Math.min(c.dur || 5, 5); var arr = []; for (var m = ini; m <= Math.min(ini + dur - 1, MONTHS_MAX); m++) arr.push(m); return arr; }

  var RAW = [
    ['PRD-1042', 'Box 5m² climatizado', 'Vila Leopoldina', 'Selfstorage', 389, 77.80], ['PRD-1108', 'Box 3m² standard', 'Vila Leopoldina', 'Selfstorage', 249, 83.00],
    ['PRD-1156', 'Box 8m² climatizado', 'Pinheiros', 'Selfstorage', 612, 76.50], ['PRD-1245', 'Box 4m² standard', 'Tatuapé', 'Selfstorage', 299, 74.75],
    ['PRD-2087', 'Sala Flex 12m²', 'Barra Funda', 'Flex', 1290, 107.50], ['PRD-2130', 'Sala Flex 25m²', 'Osasco', 'Flex', 2350, 94.00],
    ['PRD-2201', 'Sala Flex 15m²', 'Tatuapé', 'Flex', 1490, 99.30], ['PRD-3310', 'Galpão UI 80m²', 'Guarulhos', 'Galpão UI', 6800, 85.00],
    ['PRD-3389', 'Galpão UI 200m²', 'Osasco', 'Galpão UI', 15200, 76.00], ['PRD-4501', 'Office UI 24m²', 'Faria Lima', 'Office UI', 3600, 150.00],
    ['PRD-4572', 'Office UI 18m²', 'Pinheiros', 'Office UI', 2880, 160.00]
  ];
  var LEADS_POOL = [
    ['Marina Alves Comércio', 'marina@marinaalves.com.br', '+55 11 98877-1122', false], ['Logística Contorno Ltda', 'contato@logisticacontorno.com.br', '+55 11 97654-3300', false],
    ['Studio Prisma Arquitetura', 'ola@studioprisma.com.br', null, false], ['Ferragens Vale Verde', 'compras@valeverde.com.br', '+55 11 96543-2211', false],
    ['Nordeste Distribuidora', 'financeiro@nordestedist.com', '+55 11 91234-5678', true], ['Café Serra Azul', 'contato@cafeserraazul.com.br', '+55 11 99011-2233', false],
    ['MedParts Suprimentos', 'vendas@medparts.com.br', null, false], ['Oficina Torque Alto', 'torque@torquealto.com.br', '+55 11 98123-4455', false],
    ['Editora Margem', 'contato@editoramargem.com', null, false], ['TechNova Componentes', 'sac@technova.com.br', '+55 11 97788-9900', false],
    ['Confecções Belluno', 'belluno@belluno.com.br', '+55 11 96677-8811', false], ['Atacado São Jorge', 'pedidos@atacadosaojorge.com', '+55 11 95566-7788', true],
    ['Verde Vida Hortifruti', 'verdevida@verdevida.com.br', '+55 11 94455-6677', false], ['Marmoraria Aurora', 'orcamento@aurora.com.br', null, false]
  ];
  var UNIDADES = ['Vila Leopoldina', 'Barra Funda', 'Guarulhos', 'Faria Lima', 'Pinheiros', 'Osasco', 'Alphaville', 'Santo Amaro', 'Lapa', 'Tatuapé'];
  var TIPOS = ['Selfstorage', 'Flex', 'Galpão UI', 'Office UI'];
  var VENDEDORES = ['André Foguel', 'Kelly Rocha', 'Gustavo Lima', 'Renata Salles', 'Marcos Tavares'];
  var MOTIVOS_ERRO = ['E-mail rejeitado pelo servidor (bounce)', 'Timeout no gateway de e-mail', 'Falha de conexão com o provedor de envio'];

  function BRL(v) { return 'R$ ' + Math.round(v).toLocaleString('pt-BR'); }
  function BRL2(v) { return 'R$ ' + (Math.round(v * 100) / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
  function fmtDT(d) { if (!d) return '—'; function p(n) { return String(n).padStart(2, '0'); } return p(d.getDate()) + '/' + p(d.getMonth() + 1) + '/' + d.getFullYear() + ' ' + p(d.getHours()) + ':' + p(d.getMinutes()); }
  function statusVariant(s) { return s === 'Enviado' ? 'badge--secondary' : (s === 'Erro' ? 'badge--destructive' : (s === 'Rascunho' ? 'badge--default' : 'badge--outline')); }

  function recMonthPrice(prod, m) {
    var manualDisc = prod.base * ((prod.manualPct || 0) / 100);
    var cpPct = 0;
    (prod.cupons || []).forEach(function (c) { if ((c.months || []).indexOf(m) > -1) { var pct = c.campaign ? (CAMPANHAS[c.key] ? CAMPANHAS[c.key].pct : 0) : (CUPONS[c.key] ? CUPONS[c.key].pct : 0); cpPct += pct; } });
    return Math.max(0, prod.base - manualDisc - prod.base * cpPct / 100);
  }
  function recMaxMonth(rec) { var mx = 1; rec.produtos.forEach(function (p) { (p.cupons || []).forEach(function (c) { (c.months || []).forEach(function (m) { if (m > mx) mx = m; }); }); }); return mx; }

  function genOrcamentos(n) {
    var out = [], now = Date.now(), seq = 0;
    function statusDraw() { var r = rng(); return r < 0.62 ? 'Enviado' : (r < 0.82 ? 'Pendente' : 'Erro'); }
    while (out.length < n) {
      var lr = LEADS_POOL[Math.floor(rng() * LEADS_POOL.length)]; var lead = lr[0], email = lr[1], phone = lr[2], bounce = lr[3];
      var daysAgo = Math.floor(rng() * 90); var dt = new Date(now - daysAgo * 86400000 - Math.floor(rng() * 86400000));
      var nTip = rng() < 0.35 ? (2 + Math.floor(rng() * 2)) : 1; var tips = [];
      while (tips.length < nTip) { var t0 = pick(TIPOS); if (tips.indexOf(t0) < 0) tips.push(t0); }
      tips.forEach(function (t) {
        if (out.length >= n) return;
        var k = seq++; var id = 'ORC-' + (2400 + k); var status = statusDraw();
        var vendedor = (k % 3 === 0) ? 'André Foguel' : VENDEDORES[k % VENDEDORES.length];
        var unidade = pick(UNIDADES); var pool = RAW.filter(function (r) { return r[3] === t; });
        var nProd = 1 + Math.floor(rng() * 3); var produtos = [];
        for (var jj = 0; jj < nProd && pool.length; jj++) {
          var r = pool[Math.floor(rng() * pool.length)];
          var manualPct = Math.round(rng() * 15); var fin = Math.round(r[4] * (1 - manualPct / 100));
          var cupons = [];
          if (rng() < 0.45) { var ck = pick(['verao', 'indica', 'corporativo', 'fidelidade']); cupons.push({ key: ck, months: mesesDe(ck, null) }); }
          produtos.push({ id: r[0], desc: r[1], tipo: r[3], un: r[2], base: r[4], m2: r[5], manualPct: manualPct, final: fin, cupons: cupons, classif: TIPO_INFO[t].classif, carac: TIPO_INFO[t].carac, estr: TIPO_INFO[t].estr, editable: TIPO_INFO[t].editable, alcada: alcadaDe(r[0], t) });
        }
        if (!produtos.length) return;
        var total = produtos.reduce(function (s, x) { return s + x.final; }, 0);
        var hist = []; var isErro = status === 'Erro'; var bounceRec = isErro && (k % 2 === 0);
        var motivo = isErro ? (bounceRec ? MOTIVOS_ERRO[0] : pick(MOTIVOS_ERRO.slice(1))) : null;
        if (status === 'Pendente') hist.push({ dataHora: dt, canais: '—', resultado: 'fila', usuario: vendedor });
        else if (status === 'Enviado') { if (rng() < 0.35) hist.push({ dataHora: new Date(dt.getTime() - 86400000), canais: 'E-mail', resultado: 'erro', usuario: vendedor, motivo: pick(MOTIVOS_ERRO) }); hist.push({ dataHora: dt, canais: 'E-mail', resultado: 'sucesso', usuario: vendedor }); }
        else hist.push({ dataHora: dt, canais: 'E-mail', resultado: 'erro', usuario: vendedor, motivo: motivo });
        out.push({ id: id, uuid: uuidv4(), lead: lead, leadId: 'LD-' + (8000 + (k * 7 % 1999)), email: email, phone: phone, tipo: t, unidade: unidade, vendedor: vendedor, dataEnvio: dt, status: status, produtos: produtos, total: total, emailBounce: bounceRec, erroMotivo: motivo, historico: hist, moveIn: null, validade: null });
      });
    }
    return out;
  }

  window.OrcData = {
    list: genOrcamentos(124), TIPO_INFO: TIPO_INFO, CUPONS: CUPONS, CAMPANHAS: CAMPANHAS, mesesDe: mesesDe, alcadaDe: alcadaDe,
    MOTIVOS_ERRO: MOTIVOS_ERRO, UNIDADES: UNIDADES, VENDEDORES: VENDEDORES, BRL: BRL, BRL2: BRL2, fmtDT: fmtDT, statusVariant: statusVariant,
    recMonthPrice: recMonthPrice, recMaxMonth: recMaxMonth
  };
})();
