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
  // listening for the event
  document.getElementById("signUpForm").addEventListener('submit',function(e){
     e.preventDefault();

     console.log("works");
     // capture user input
     var email=document.getElementById("email").value;
     var password=document.getElementById("password").value;
     var phone=document.getElementById("phoneNumber").value;
     var gender=document.getElementById("gender").value;
     // create an account via firebase
      firebase.auth().createUserWithEmailAndPassword(email,password).then(
        // if account has been created
        function(response){
          console.log(response);
          alert("Account Created");
          // change the location
          window.location.replace("login.html");
        }
        ).catch(
            // if the account was not created
            function(error){
              console.log(error);
              alert("something went wrong + error");
              location.reload();

            }

        );


        // also we want to take details to the firebase database
        firebase.database().ref("UserDetails/").push({
          EmailAddress:email,
          Password:password,
          phone:phone,
          gender:gender
        }).then(function(response){
          console.log(response);
          alert("users details recorded");
          window.location.replace("login.html");


        }).catch(function(error){
          console.log(error);
          alert("something went wrong" + error);
          location.reload();


        });

  });

  