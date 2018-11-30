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

  function login(){     
  var usuario = document.getElementById('usuario').value;
  var pass = document.getElementById('pass').value; 
  

    firebase.auth().signInWithEmailAndPassword(usuario, pass).catch(function(error) {
        // Handle Errors here.c
       
        alert("Usuario Invalido");
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });

  }



  function registro(){
    var usuario2 = document.getElementById('usuario2').value;
    var pass2 = document.getElementById('pass2').value; 
    firebase.auth().createUserWithEmailAndPassword(usuario2, pass2).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });

  }
  


  function observador(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // usuario a ingresado.
         
          window.open("dashboard.html","_self")
        } else {
          // usuario no ingresa
          // ...
        }
      });
  
  }

  observador();