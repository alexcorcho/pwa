
  function salir (){
    firebase.auth().signOut().then(function() {
        window.open("index.html","_self")
      }, function(error) {
        console.error('Sign Out Error', error);
      });

  }