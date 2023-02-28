;(function () {
  window.addEventListener('resize', resize)

  function resize() {
    const vieportWeight = document.documentElement.clientWidth

    if (vieportWeight <= 480) {
      const getHeight = document.documentElement.clientHeight
      const height = getHeight - 80 + 'px'
      return setHeightPromo(height)
    }

    return setHeightPromo('100%')
  }

  function setHeightPromo(height) {
    document.querySelector('#promo').style.height = height
  }

  resize()
})()
