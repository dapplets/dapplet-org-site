export function currentCopywritingTime() {
  const element = document.querySelector('.footer__copywriting');
  const baseString = (time) => `© 2019—${time} Dapplets Project`;

  element.textContent = baseString(new Date().getFullYear());
}