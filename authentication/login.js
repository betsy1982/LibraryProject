// requiring Firebase SDK
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyB_beJdUNwwB-cI7oD4K508X-PkjuAMdPA",
    authDomain: "fir-libraryapp.firebaseapp.com",
    projectId: "fir-libraryapp",
    storageBucket: "fir-libraryapp.appspot.com",
    messagingSenderId: "585052909796",
    appId: "1:585052909796:web:c27684de73e7cd9cbb7cf1",
    measurementId: "G-15WSJM9NY7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //capture user input
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  //firebase to verify and login user
  // signInWithEmailAndPassword

  firebase.auth().signInWithEmailAndPassword(email,password).then(
        function(response){
        alert("verified" + response);
        window.location.replace("../public/recordsDisplay.html");
        }


    ).catch(function(error){
      var errorcode =error.code;
      if (errorcode =="auth/wrong-password") {
         alert("wrong password entry");
         location.reload();  
         } else {
          alert (error);
         }

         alert("something went wrong,try again" + error);
         location
        .reload();

      })
  
  // reset password via firebase
  // listen for form event
  document.getElementById("resetForm").addEventListner('submit',function(e){
    e.preventDefault();

   // capture user email
  var resetEmail = document.getElementById("resetEmail").value;

   // use firebase method sendPasswordResetEmail to send a reset link
   firebase.auth().sendPasswordResetEmail(resetEmail).then(
     function(response){
        console.log(response);
        alert("password reset link sent");
     }).catch(function(error){
        console.log(error);
         alert("Failed" + error.code);
     });



  }


  // google sign in
   function googleLogin(){
     alert("works");
  // initializing google sign up
   var base_provider =new firebase.auth.GoggleAuthProvider();
   // signin using the googlefirebase method signInWithPopUp from firebase
     firebase.auth().signInWithPopup(base_provider).then(function(response){
          console.log(response);
          alert("sign in success");
          // redirect screen
          window.location.replace("../public/recordaDisplay.html");


    }).catch(function(error){
        console.log(error);
        alert("sign in with google failed" + error.code);
    });


  