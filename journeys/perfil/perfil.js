/* ============================================================
   Perfil do orçamento (somente leitura) — RN14/RN20
   Lê ?id= · usa window.OrcData · Reenvio via window.Reenvio.
   ============================================================ */
(function () {
  'use strict';
  var navOk; try { navOk = sessionStorage.getItem('nav-ok') === '1'; if (navOk) sessionStorage.removeItem('nav-ok'); } catch (e) { navOk = true; }
  if (!navOk) { try { location.replace('../listagem/listagem.html'); } catch (e) {} return; }

  var D = window.OrcData;
  function BRL(v) { return D ? D.BRL(v) : ('R$ ' + Math.round(v)); }
  function BRL2(v) { return D ? D.BRL2(v) : BRL(v); }
  function fmtDT(d) { return D ? D.fmtDT(d) : '—'; }
  function recMonthPrice(p, m) { return D ? D.recMonthPrice(p, m) : p.final; }
  function recMaxMonth(r) { return D ? D.recMaxMonth(r) : 3; }
  var TIP_BADGE = { 'Selfstorage': 'badge--default', 'Flex': 'badge--secondary', 'Galpão UI': 'badge--success', 'Office UI': 'badge--yellow' };
  function statusBadge(s) { return '<span class="badge ' + (D ? D.statusVariant(s) : 'badge--outline') + '">' + s + '</span>'; }
  function tipBadge(t) { return '<span class="badge ' + (TIP_BADGE[t] || 'badge--outline') + '">' + t + '</span>'; }

  var rec = null;
  function getId() { var m = location.search.match(/[?&]id=([^&]+)/); return m ? decodeURIComponent(m[1]) : ''; }

  function faixas(prod, sim) { var out = [], cur = null; for (var m = 1; m <= sim; m++) { var pr = Math.round(recMonthPrice(prod, m) * 100) / 100; if (cur && cur.price === pr) cur.to = m; else { cur = { from: m, to: m, price: pr }; out.push(cur); } } return out; }
  function cardHtml(prod, sim) {
    var fp = recMonthPrice(prod, 1);
    var sched = faixas(prod, sim).map(function (f) { var rng = f.from === f.to ? ('Mês ' + f.from) : ('Meses ' + f.from + '–' + f.to); return '<div class="sched__row"><span>' + rng + '</span><span>' + BRL2(f.price) + '</span></div>'; }).join('');
    var cupTags = (prod.cupons || []).length ? prod.cupons.map(function (c) { var code = D.CUPONS[c.key] ? D.CUPONS[c.key].code : (D.CAMPANHAS[c.key] ? D.CAMPANHAS[c.key].code : c.key); return '<span class="badge badge--success badge--tag" style="cursor:default">' + code + '</span>'; }).join('') : '<span style="color:var(--content-disable)">Sem cupom</span>';
    var editable = prod.editable;
    var specs = editable ? drow('Classificação', prod.classif) + drow('Características', prod.carac) + drow('Estrutura', prod.estr) : drow('Classificação', prod.classif) + drow('Especificação', prod.carac) + drow('Localização', prod.estr);
    var exceeds = editable && (prod.manualPct || 0) > prod.alcada;
    var approval = exceeds ? '<div class="approval"><svg viewBox="0 0 24 24"><path d="M12 2 3 7v6c0 5 3.5 8 9 9 5.5-1 9-4 9-9V7z"/><path d="M9 12l2 2 4-4"/></svg>Desconto de ' + Math.round(prod.manualPct) + '% acima da alçada de ' + prod.alcada + '% — item entrou em aprovação.</div>' : '';
    return '<div class="ocard"><div class="ocard__head"><div><p class="prod__id">' + prod.id + '</p><p class="ocard__title">' + prod.desc + '</p><p class="ocard__sub">' + prod.un + ' · ' + tipBadge(prod.tipo) + '</p></div><div style="text-align:right">' + (fp < prod.base ? '<span class="price-old">' + BRL2(prod.base) + '</span>' : '') + '<span class="ocard__price">' + BRL2(fp) + '</span><span class="ocard__permo">/mês (1º mês)</span></div></div>' +
      '<div class="ocard__sec"><p class="ocard__lbl">Cupons / campanha</p><div class="ocard__tags">' + cupTags + '</div></div>' +
      '<div class="ocard__sec"><p class="ocard__lbl">Simulação mensal</p><div>' + sched + '</div></div>' +
      '<div class="ocard__sec"><p class="ocard__lbl">' + (editable ? 'Condições comerciais' : 'Especificações') + '</p><dl class="detail-grid">' + specs + '</dl></div>' + approval + '</div>';
    function drow(k, v) { return '<div class="detail-row"><dt>' + k + '</dt><dd>' + v + '</dd></div>'; }
  }
  function histHtml(r) {
    return (r.historico || []).slice().reverse().map(function (h) {
      var cls = h.resultado === 'sucesso' ? 'ok' : (h.resultado === 'erro' ? 'fail' : '');
      var ico = h.resultado === 'sucesso' ? '<svg viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>' : (h.resultado === 'erro' ? '<svg viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg>' : '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>');
      var label = h.resultado === 'sucesso' ? 'Envio realizado' : (h.resultado === 'erro' ? 'Falha no envio' : 'Enfileirado para envio');
      return '<div class="hist-item"><div class="hist-ico ' + cls + '">' + ico + '</div><div class="hist-body"><div class="hist-top"><b>' + label + '</b><span class="hist-when">' + fmtDT(h.dataHora) + '</span></div><div class="hist-meta">Por ' + h.usuario + ' · ' + h.canais + '</div>' + (h.motivo ? '<div class="hist-motivo">Motivo: ' + h.motivo + '</div>' : '') + '</div></div>';
    }).join('') || '<div class="hist-item"><div class="hist-body"><div class="hist-meta">Sem envios registrados.</div></div></div>';
  }

  function render() {
    var sim = Math.min(6, Math.max(3, recMaxMonth(rec)));
    document.getElementById('opTitle').innerHTML = rec.id + ' · ' + rec.lead + ' ' + statusBadge(rec.status);
    document.getElementById('opSub').textContent = 'Visualização somente leitura · ' + rec.produtos.length + (rec.produtos.length > 1 ? ' itens' : ' item');
    document.getElementById('errobox').innerHTML = (rec.status === 'Erro' && rec.erroMotivo) ? '<div class="errobox"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 8v4m0 4h.01"/></svg><p><b>Falha no último envio:</b> ' + rec.erroMotivo + '</p></div>' : '';
    document.getElementById('dados').innerHTML =
      dcell('Lead vinculado', rec.lead, (rec.leadId ? rec.leadId + ' · ' : '') + (rec.email || '')) +
      dcell('Status', statusBadge(rec.status)) + dcell('Emissão / envio', fmtDT(rec.dataEnvio)) +
      dcell('Vendedor', rec.vendedor, 'Comercial') + dcell('Telefone', rec.phone || '— (não cadastrado)') +
      dcell('Unidade', rec.unidade) + dcell('Tipologia', rec.tipo) + dcell('Produtos', String(rec.produtos.length));
    document.getElementById('opCount').innerHTML = '<b>' + rec.produtos.length + '</b> ' + (rec.produtos.length > 1 ? 'itens' : 'item');
    var totBase = 0, totFinal = 0;
    document.getElementById('cards').innerHTML = rec.produtos.map(function (p) { totBase += p.base; totFinal += recMonthPrice(p, 1); return cardHtml(p, sim); }).join('');
    document.getElementById('t-base').textContent = BRL2(totBase);
    document.getElementById('t-desc').textContent = '– ' + BRL2(totBase - totFinal);
    document.getElementById('t-negoc').textContent = BRL2(totFinal);
    document.getElementById('hist').innerHTML = histHtml(rec);
    function dcell(k, v, sub) { return '<div class="dados__row"><dt>' + k + '</dt><dd>' + v + '</dd>' + (sub ? '<div class="sub">' + sub + '</div>' : '') + '</div>'; }
  }

  document.addEventListener('DOMContentLoaded', function () {
    if (!D || !D.list) { location.replace('../listagem/listagem.html'); return; }
    rec = D.list.find(function (x) { return x.id === getId(); });
    if (!rec) { location.replace('../listagem/listagem.html'); return; }
    render();
    document.getElementById('btn-voltar').addEventListener('click', function () { window.location.href = '../listagem/listagem.html'; });
    document.getElementById('btn-reenviar').addEventListener('click', function () { if (window.Reenvio) window.Reenvio.open(rec, function () { render(); }); });
  });
})();
