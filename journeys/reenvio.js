/* ============================================================
   Reenvio de orçamento (modal compartilhado) — RN15–RN20
   E-mail sempre; WhatsApp só com telefone; bounce → Erro;
   registra no histórico. Expõe window.Reenvio.open(orc, onDone).
   Requer o markup #m-reenvio na página + ds.js.
   ============================================================ */
(function () {
  'use strict';
  var MOTIVOS = (window.OrcData && window.OrcData.MOTIVOS_ERRO) || ['E-mail rejeitado pelo servidor (bounce)'];
  function BRL(v) { return window.OrcData ? window.OrcData.BRL(v) : ('R$ ' + Math.round(v)); }
  var cur = null, onDone = null;

  function fill(o) {
    set('rv-num', o.id); set('rv-lead', o.lead); set('rv-total', BRL(o.total)); set('rv-uuid', o.uuid);
    var email = document.getElementById('rv-email'), wa = document.getElementById('rv-wa'), waHint = document.getElementById('rv-wa-hint'), emHint = document.getElementById('rv-email-hint');
    email.checked = true; if (emHint) emHint.textContent = o.email || '';
    if (o.phone) { wa.disabled = false; wa.checked = false; waHint.textContent = o.phone; }
    else { wa.disabled = true; wa.checked = false; waHint.textContent = 'Lead sem telefone cadastrado'; }
    document.getElementById('rv-err').hidden = true;
    function set(id, v) { var e = document.getElementById(id); if (e) e.textContent = v; }
  }
  function confirm() {
    if (!cur) return;
    var canais = [];
    if (document.getElementById('rv-email').checked) canais.push('E-mail');
    if (document.getElementById('rv-wa').checked) canais.push('WhatsApp');
    if (!canais.length) { document.getElementById('rv-err').hidden = false; return; }
    var o = cur, now = new Date(); var falha = canais.indexOf('E-mail') > -1 && o.emailBounce;
    if (falha) { o.status = 'Erro'; o.erroMotivo = MOTIVOS[0]; o.historico.push({ dataHora: now, canais: canais.join(' e '), resultado: 'erro', usuario: 'André Foguel', motivo: MOTIVOS[0] }); }
    else { o.status = 'Enviado'; o.dataEnvio = now; o.erroMotivo = null; o.historico.push({ dataHora: now, canais: canais.join(' e '), resultado: 'sucesso', usuario: 'André Foguel' }); }
    DS.closeModal(document.getElementById('m-reenvio'));
    if (onDone) onDone(o);
  }
  window.Reenvio = { open: function (o, cb) { cur = o; onDone = cb || null; fill(o); DS.openModal('m-reenvio'); } };
  document.addEventListener('DOMContentLoaded', function () { var b = document.getElementById('rv-confirm'); if (b) b.addEventListener('click', confirm); });
})();
