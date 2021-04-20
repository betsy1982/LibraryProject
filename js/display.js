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
  // create ref for table interface
  var tableRecords = documents.getElementById("tableRecords");
  // ref to the firebase database
  var databaseRecords =firebase.database().ref('usersDetails/');
  // default row for my table
  var rowIndex = 1;


  // picking values in the firebase ref node
  databaseRecords.once('value', functions(snapshotRecords){
    // forEach to loop through records
    
    // signout
      function signOut(){
       alert("works")
    }







  })