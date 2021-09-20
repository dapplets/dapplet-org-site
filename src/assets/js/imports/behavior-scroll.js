const buttonLink = document.querySelector('*[data-click=scroll]');

buttonLink.addEventListener('click', function (event) {
  event.preventDefault();
  const id = this.getAttribute('href').substr(1)

  document.getElementById(id).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
});