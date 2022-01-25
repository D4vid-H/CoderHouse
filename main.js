ScrollReveal().reveal(".elementoLi", { delay: 500, reset: true });
document.getElementById('cerrarSesion').hidden = true;

function clikCompra() {
  var toastLiveExample = document.getElementById("liveToast");

  var toast = new bootstrap.Toast(toastLiveExample);

  toast.show();
}

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
  } else {
    
  }
});

function crearUser() {
  let email = document.getElementById("exampleInputEmail1").value;
  let password = document.getElementById("exampleInputPassword1").value;
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(function (error) {
      let errorCode = error.code;
      let errorMessage = error.message;
      alert(errorMessage);
    });
}

function accesoUser() {
  let email = document.getElementById("exampleInputEmail1").value;
  let password = document.getElementById("exampleInputPassword1").value;
  let textSesion = 'Cerrar sesion';
  
  if (email !== '' && password !== ''){
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(function (error) {
      let errorCode = error.code;
      let errorMessage = error.message;
      alert(errorMessage);     
    });
    cerrarSesion.innerHTML = textSesion; 
    document.getElementById('cerrarSesion').hidden = false;   
  } else{
    alert('Usuario no registrado');

  }
}
function cerrarUser(){
  let textSesion = '';
  firebase.auth().signOut()
  .then(function(){
    alert('Salir');
    cerrarSesion.innerHTML = textSesion;
    document.getElementById('cerrarSesion').hidden = true;
  })
  .catch(function(error){
    alert(error);
  })
 }

 
      