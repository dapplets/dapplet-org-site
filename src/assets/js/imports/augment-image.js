const augment = document.querySelector('*[data-augment]');

augment.addEventListener('click', (event) => {
  const isChecked = event.target.checked;
  const images = document.querySelectorAll('*[data-augment-image]');

  if (isChecked) {
    replaceText('Stop Augmenting!');
    return images.forEach((item) => replacePicture(item, true));
  }

  replaceText('Augment Us!');
  images.forEach((item) => replacePicture(item, false));
});

function replaceText(text) {
  const augmentSpan = augment.querySelector('span');
  augmentSpan.textContent = text;
}

function replacePicture(image, state) {
  return state === true
    ? image.classList.add('augment-image')
    : image.classList.remove('augment-image')
}
