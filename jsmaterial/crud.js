//inicia fireDB

firebase.initializeApp({
    apiKey: "AIzaSyBeBxGiOTIFKZgTEJszxJoS9HBh22mk_ig",
    authDomain: "deportivo-35018.firebaseapp.com",
    projectId: "deportivo-35018"
  });
  
  // Initialize Cloud Firestore through Firebase
  var db = firebase.firestore();
  
  function guardar(){
    let nombre = document.getElementById('nombre').value;
    let ciudad = document.getElementById('ciudad').value;
    let profesor = document.getElementById('profesor').value;

    db.collection("usuarios").add({
        nombre: nombre,
        ciudad: ciudad,
        profesor: profesor
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);        

        document.getElementById('nombre').value='';
        document.getElementById('ciudad').value='';
        document.getElementById('profesor').value='';
        
        location.reload();//refresca pagina
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });

  }
  

  //leer datos
    db.collection("usuarios").get().then((querySnapshot) => {    
       querySnapshot.forEach((doc) => {
        document.getElementById('tabla').innerHTML += ` <tr>        
        <td>${doc.data().nombre}</td>
        <td>${doc.data().ciudad}</td>
        <td>${doc.data().profesor}</td>
        </tr>`
        
    });
    });


  
