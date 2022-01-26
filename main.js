ScrollReveal().reveal(".elementoLi", { delay: 500, reset: true });
var user = firebase.auth().currentUser;

if(user !== null){
  document.getElementById('cerrarSesion').hidden = false;
  }else{
  document.getElementById('cerrarSesion').hidden = true;
  }


function clikCompra() {
  var toastLiveExample = document.getElementById("liveToast");

  var toast = new bootstrap.Toast(toastLiveExample);

  toast.show();
}

firebase.auth().onAuthStateChanged( (user) => {
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
  
  if (email !== '' && password !== ''){
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(function (error) {
      let errorCode = error.code;
      let errorMessage = error.message;
      alert(errorMessage);
    }).then(function() {
      verificar();
      accesoUser();
    });      
  }else{
    alert('Ingrese Email y Password valido');
  }
}

function verificar(){
  var user = firebase.auth().currentUser;
  user.sendEmailVerification().then(function() {
  // Email sent.
  }).catch(function(error) {
  // An error happened.
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
      if(error){        
          alert('usuario no existe');                   
      }      
    });
    
  } else{
    alert('Usuario no registrado');
  }
  cerrarSesion.innerHTML = textSesion; 
  document.getElementById('cerrarSesion').hidden = false;
  document.getElementById('esconderlogo').hidden = true;  

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

 
      