(function () {

  window.addEventListener('resize', resize);

  function resize() {
    const vieportWeight = document.documentElement.clientWidth;

    if (vieportWeight <= 480) {
      const height = document.documentElement.clientHeight;
      return $('#promo').css({ height: (height - 80) });
    }

    $('#promo').css({ height: '100%' });
  }

  resize();
}());