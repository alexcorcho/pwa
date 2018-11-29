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
       
        alert("Usuario Invalid");
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });

  }

  
  function observador(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          window.open("dashboard.html","_self")
        } else {
          // User is signed out.
          // ...
        }
      });
  
  }

  observador();