(function () {
  window.addEventListener('resize', resize);

  function resize(event) {
    const vieportWeight = document.documentElement.clientWidth;

    if (vieportWeight <= 480) {
      const height = document.documentElement.clientHeight;
      $('#promo').css({ height: (height - 80) });
    }
  }

  resize();
}());