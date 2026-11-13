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
