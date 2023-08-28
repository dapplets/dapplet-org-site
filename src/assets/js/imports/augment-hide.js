;(function () {
  const buttonAugment = document.querySelector('*[data-augment]')
  const innovationEl = document.querySelector('.innovation')

  if (!innovationEl) return

  const coordsInnovationSection =
    innovationEl.getBoundingClientRect().top + document.documentElement.scrollTop

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY > coordsInnovationSection
    if (scrollTop) return buttonAugment.classList.add('hide')
    return buttonAugment.classList.remove('hide')
  })
})()
