// Click-to-enlarge for gallery photos. Builds one reusable overlay and
// shows the clicked image full-size. Click the overlay or press Esc to close.
(function () {
  var imgs = document.querySelectorAll('.gallery img');
  if (!imgs.length) return;

  var box = document.createElement('div');
  box.className = 'lightbox';
  box.setAttribute('aria-hidden', 'true');
  var big = document.createElement('img');
  big.alt = '';
  box.appendChild(big);
  document.body.appendChild(box);

  function open(src, alt) {
    big.src = src;
    big.alt = alt || '';
    box.classList.add('open');
    box.setAttribute('aria-hidden', 'false');
  }
  function close() {
    box.classList.remove('open');
    box.setAttribute('aria-hidden', 'true');
    big.src = '';
  }

  imgs.forEach(function (im) {
    im.addEventListener('click', function () {
      open(im.currentSrc || im.src, im.alt);
    });
  });
  box.addEventListener('click', close);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });
})();
