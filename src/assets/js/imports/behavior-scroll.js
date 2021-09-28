const buttonLink = document.querySelectorAll('*[data-click=scroll]');

buttonLink.forEach(onClick)

function onClick(button) {
  button.addEventListener('click', behaviorScroll);
}

function behaviorScroll(event) {
  event.preventDefault();

  const id = this.getAttribute('href').substr(1);
  document.getElementById(id).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

