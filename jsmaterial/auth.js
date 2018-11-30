// Initialize Firebase
var config = {
    apiKey: "AIzaSyBeBxGiOTIFKZgTEJszxJoS9HBh22mk_ig",
    authDomain: "deportivo-35018.firebaseapp.com",
    databaseURL: "https://deportivo-35018.firebaseio.com",
    projectId: "deportivo-35018",
    storageBucket: "deportivo-35018.appspot.com",
    messagingSenderId: "4711618046"
  };
  firebase.initializeApp(config);
//finaliza firebase

// funcion el boton de login
  function login(){     
    // capturra el dato de input de ususario, contraseña y lo gustda e una variable
  var usuario = document.getElementById('usuario').value; 
  var pass = document.getElementById('pass').value; 
  
    // sepasa por parametro el nombre de las varribles de arriba
    firebase.auth().signInWithEmailAndPassword(usuario, pass).catch(function(error) {
        
        // si los usuario no son correctos se muestra este mensaje
        alert("Usuario Invalido");
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });

  }


  //funcion para crear nuevos usuarios
  function registro(){

    // capturra el dato de input de ususario, contraseña y lo gustda e una variable
    var usuario2 = document.getElementById('usuario2').value;
    var pass2 = document.getElementById('pass2').value; 
    // sepasa por parametro el nombre de las varribles de arriba
    firebase.auth().createUserWithEmailAndPassword(usuario2, pass2).catch(function(error) {
      // erro si no se crea el usuario, puedes pasarlo en cosonle.log para saber que paso
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });

  }
  

  //funcion para saber si ya inicio secion
  function observador(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // si ingreso enviarlo a este sitio
         
          window.open("dashboard.html","_self")
        } else {
          // usuario no ingresa
          // ...
        }
      });
  
  }
// iniciar el observador 
  observador();