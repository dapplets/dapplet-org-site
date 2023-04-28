;(function () {
  const cookiesAccept = document.querySelector('.cookies-accept')
  document.addEventListener('DOMContentLoaded', hideCookie)
  cookiesAccept.addEventListener('click', accept)
  const cookieSave = 'cookies-accept=true; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT'

  function accept() {
    document.cookie = cookieSave
    hideCookie()
  }

  function hideCookie() {
    const getCookies = getCookie('cookies-accept')

    if (getCookies) {
      const cookies = document.querySelector('#cookies')
      cookies.classList.add('cookies-hide')
    }
  }

  function getCookie(name) {
    let matches = document.cookie.match(
      new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
    )

    return matches ? decodeURIComponent(matches[1]) : false
  }
})()
