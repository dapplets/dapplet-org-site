const buttonLink = document.querySelector('.button-link');

buttonLink.addEventListener('click', function (event) {
  event.preventDefault();
  const id = this.getAttribute('href').substr(1)

  document.getElementById(id).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
});