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
  // listen for the submit event
  document.getElementById("formUpload").addEventListener('submit',function(e){
  	// prevent default registrations
  	e.preventDefault();

  	// capturing users data and storing it within a variable
  	var = document.getElementById(First Name).value;
    var = document.getElementById(Last Name).value;
    var =document.getElementById(email).value;
    var = document.getElementById(Phone No).value;
    // console test
    console.log(First name+Last Name+email+Phone No);
    // initializing my firebase storage reference
    const storage =firebase.storage().ref();
    // picking image
    const file=document.querySelector().files[];
    // naming and storing the content type
    const name= +new Date() + "-" + file.name;
    const metadata = {
          contentType: file.type
    };
    // upload file to the database system
    const task = ref.child(name).put(file,metadata);
    // setting up promises to monitor the storage task
    task
         .then(snapshot => snapshot.ref.getDownloadURL()) 
         .then(url => {
           console.log(url); // console test
           // test data upload to the realtime database
           // creating node file
           firebase.database().ref('usersDetails').push({
            // creating children of the node
            // updating the details to this node
            userName:First Name,
            userEmail:email,
            userPhone No:phone No
            

           })

           // alert confirmation
           alert('user added')

           // reset the form fields
           First Name="";
           Last Name=" ";
           email="";
           Phone No="";

           // error handling

       })
           .catch(console.error);
  
       });