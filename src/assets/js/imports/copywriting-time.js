function currentCopywritingTime() {
  const element = document.querySelector('.footer__copywriting')
  if (!element) return false
  const baseString = (time) => `© 2019—${time} Dapplets Project`

  element.textContent = baseString(new Date().getFullYear())
}

document.addEventListener('DOMContentLoaded', currentCopywritingTime)
