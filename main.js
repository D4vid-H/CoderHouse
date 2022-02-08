ScrollReveal().reveal(".elementoLi", { delay: 500, reset: true });

function clikCompra() {
  var toastLiveExample = document.getElementById("liveToast");

  var toast = new bootstrap.Toast(toastLiveExample);

  toast.show();
}

let user = firebase.auth().currentUser;
debugger
if (user !== null){
  document.getElementById('cerrarSesion').hidden = false;
  }else{
  document.getElementById('cerrarSesion').hidden = true;
  document.getElementById('userlogo').hidden = true;
  }

firebase.auth().onAuthStateChanged( (user) => {
  if (user) {
    let displayName = user.displayName;
    let email = user.email;
    let emailVerified = user.emailVerified;
    let photoURL = user.photoURL;
    let isAnonymous = user.isAnonymous;
    let uid = user.uid;
    let providerData = user.providerData;
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

function accesoUser() {
  let email = document.getElementById("exampleInputEmail1").value;
  let password = document.getElementById("exampleInputPassword1").value;
  const textSesion = 'Cerrar sesion';
  
  if (email !== '' && password !== ''){
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(function (error) {
      let errorCode = error.code;
      let errorMessage = error.message;
      if(error){        
        alert('usuario no existe');
        document.getElementById('cerrarSesion').hidden = true;
        document.getElementById('esconderlogo').hidden = false;                   
     }
    });
    cerrarSesion.innerHTML = textSesion; 
    document.getElementById('cerrarSesion').hidden = false;
    document.getElementById('esconderlogo').hidden = true;
    document.getElementById('userlogo').hidden = false;
  } else{
    alert('Usuario no registrado');    
  }   
}

function verificar(){
  let user = firebase.auth().currentUser;
  user.sendEmailVerification().then(function() {
  // Email sent.
  }).catch(function(error) {
  // An error happened.
  });
}

function cerrarUser(){
  let textSesion = '';
  firebase.auth().signOut()
  .then(function(){
    alert('Salir');
    cerrarSesion.innerHTML = textSesion;
    document.getElementById('cerrarSesion').hidden = true;
    document.getElementById('userlogo').hidden = true;
    document.getElementById('esconderlogo').hidden = false;
  })
  .catch(function(error){
    alert(error);
  })
 }

 function mostrarUsuario(){
debugger
    if(user.signInWithEmailAndPassword){
      
    let etiqueta = document.createElement("div");
    etiqueta.setAttribute("class", "");
    etiqueta.setAttribute("id", "mostrarDatos");
    let text = document.createTextNode(" ");
    etiqueta.appendChild(text);
    document.getElementById("usuarioInfo").appendChild(etiqueta);
      
    let etiqueta1 = document.createElement("ul");
    etiqueta1.setAttribute("class", "");
    etiqueta1.setAttribute("id", "listaDatos");
    let text1 = document.createTextNode(" ");
    etiqueta1.appendChild(text1);
    document.getElementById("mostrarDatos").appendChild(etiqueta1);

      for(let i =0; i<8; i++) {
        let etiqueta = document.createElement("li");
            etiqueta.setAttribute("class", "");
        let text = document.createTextNode(" ");
            etiqueta.appendChild(text);
            document.getElementById("listaDatos").appendChild(etiqueta);
      }



    }

 }
 
      