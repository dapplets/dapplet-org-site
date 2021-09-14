import ajaxChimp from 'ajaxchimp';

const getInputsSubscription = document.querySelectorAll('.input');
getInputsSubscription.forEach(item => item.addEventListener('input', isCheckError));

function isCheckError({ target }) {
  return target.classList.contains('error')
    ? target.classList.remove('error')
    : null;
}

$('form[data-mailchimp]').ajaxChimp({
  url: 'https://dapplets.us5.list-manage.com/subscribe/post?u=cd322894ccdf61c34acfd187b&id=0c9d1e453b',
  callback: callbackFunction
});

function callbackFunction(response) {
  switch (response.result) {
    case "error": {
      // msg: '0 - Please enter a value'
    }

    case "success": {
      // msg: 'Thank you for subscribing!'
    }

  }
}