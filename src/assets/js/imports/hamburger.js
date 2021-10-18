(function () {
  const hamburger = document.querySelector('#hamburger');
  hamburger.addEventListener('click', menu);

  function menu(event) {
    const active = event.target.classList.contains('open');

    return active
      ? isMenuBehavior('remove')
      : isMenuBehavior('add');
  }

  // add or remove
  function isMenuBehavior(state) {
    const navBar = document.querySelector('.header__navbar');

    hamburger.classList[state]('open');
    navBar.classList[state]('open');
  }
}());
