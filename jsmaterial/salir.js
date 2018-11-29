
  function salir (){
    firebase.auth().signOut().then(function() {
        window.open("index.html")
      }, function(error) {
        console.error('Sign Out Error', error);
      });

  }