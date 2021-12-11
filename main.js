

ScrollReveal().reveal('.contenedorBanner' , {delay: 500, reset: true});
ScrollReveal().reveal('.elementoLi' , {delay: 500, reset: true});

var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}
