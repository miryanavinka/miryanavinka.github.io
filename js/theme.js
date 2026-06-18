// Dark-mode toggle. The initial theme is set by an inline script in <head>
// (to avoid a flash). This file just wires up the button and persists choice.
(function () {
  var btn = document.getElementById('theme-toggle');
  function current() {
    return document.documentElement.getAttribute('data-theme') || 'light';
  }
  function paint() {
    if (!btn) return;
    var dark = current() === 'dark';
    btn.textContent = dark ? '☀' : '☾';
    btn.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    btn.setAttribute('title', dark ? 'Light mode' : 'Dark mode');
  }
  paint();
  if (btn) {
    btn.addEventListener('click', function () {
      var next = current() === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      paint();
    });
  }
})();
