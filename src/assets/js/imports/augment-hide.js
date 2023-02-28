;(function () {
  const buttonAugment = document.querySelector('*[data-augment]')
  const coordsInnovationSection =
    document.querySelector('.innovation').getBoundingClientRect().top +
    document.documentElement.scrollTop

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY > coordsInnovationSection
    if (scrollTop) return buttonAugment.classList.add('hide')
    return buttonAugment.classList.remove('hide')
  })
})()
