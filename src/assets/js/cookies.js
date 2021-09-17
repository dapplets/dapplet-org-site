(function () {
  const cookiesAccept = document.querySelector('.cookies-accept');
  document.addEventListener('DOMContentLoaded', hideCookie);
  cookiesAccept.addEventListener('click', accept);

  function accept() {
    document.cookie = 'accept-agreement=true';
    hideCookie();
  }

  function hideCookie() {
    const getCookies = getCookie('accept-agreement');

    if (getCookies) {
      const cookies = document.querySelector('#cookies');
      cookies.classList.add('cookies-hide');
    }
  }


  function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));

    return matches ? decodeURIComponent(matches[1]) : false;
  }
}())