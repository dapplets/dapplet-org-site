const augment = document.querySelector('button[data-augment]');

augment.addEventListener('click', (event) => {
  const isChecked = event.target.checked;
  const images = document.querySelectorAll('*[data-augment-image]');

  if (isChecked) {
    return images.forEach((item) => replacePicture(item, true));
  }

  images.forEach((item) => replacePicture(item, false));
});

function replacePicture(image, state) {
  return state === true
    ? image.classList.add('augment-image')
    : image.classList.remove('augment-image')
}
