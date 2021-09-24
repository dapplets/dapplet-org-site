import ajaxChimp from 'ajaxchimp';

(function () {
  const getInputsSubscription = document.querySelectorAll('.input');
  getInputsSubscription.forEach(item => item.addEventListener('input', isCheckError));

  function isCheckError({ target }) {
    return target.classList.contains('error')
      ? target.classList.remove('error')
      : null;
  }

  function success() {
    const inputs = document.querySelectorAll('.input');

    inputs.forEach(input => {
      if (input.classList.contains('valid')) {
        const getForm = input.parentNode.parentNode;
        getForm.classList.add('success');
      }
    });
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
        success();
      }
    }
  }
}());