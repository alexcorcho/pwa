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


  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // Usuario a ingresado
     
      
    } else {
      window.open("index.html","_self");
    }
  });


  function salir(){

    firebase.auth().signOut().then(function() {
      window.open("index.html","_self")
    }, function(error) {
      console.error('Sign Out Error', error);
    });
  }
