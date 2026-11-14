var b = document.querySelector('.burger'), m = document.querySelector('.menu');
if (b) {
  b.onclick = function () {
    var o = m.classList.toggle('open');
    b.setAttribute('aria-expanded', o);
  };
}
var f = document.getElementById('form');
if (f) f.onsubmit = function (e) {
  e.preventDefault();
  document.getElementById('ok').style.display = 'block';
  f.reset();
};
var els = document.querySelectorAll('.rv');
if ('IntersectionObserver' in window) {
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); } });
  }, { threshold: .12 });
  els.forEach(function (e) { io.observe(e); });
} else {
  els.forEach(function (e) { e.classList.add('in'); });
}

/* Botón flotante de WhatsApp (número ficticio de demo) */
(function () {
  var a = document.createElement('a');
  a.className = 'wa-float';
  a.href = 'https://wa.me/5491155550123?text=' + encodeURIComponent('Hola, quisiera hacer una consulta.');
  a.target = '_blank';
  a.rel = 'noopener';
  a.setAttribute('aria-label', 'Contactanos por WhatsApp');
  a.innerHTML = '<svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.2 14.2c-.2.6-1.300 1.200-1.800 1.200-.5.100-1 .2-3.300-.7-2.800-1.200-4.600-4-4.700-4.200-.1-.2-1.100-1.500-1.100-2.800s.7-2 .9-2.300c.3-.3.600-.3.800-.3h.5c.2 0 .4 0 .6.500l.8 2c.1.200.1.300 0 .5l-.4.600-.3.400c-.1.100-.3.300-.1.600.2.300.8 1.300 1.700 2.100 1.100 1 2 1.300 2.300 1.400.3.100.4.100.6-.1l.8-1c.2-.3.400-.2.600-.1l1.900.9c.3.1.5.200.5.300.1.200.1.800-.1 1.400z"/></svg><span>WhatsApp<small>+54 9 11 5555-0123</small></span>';
  document.body.appendChild(a);
})();
