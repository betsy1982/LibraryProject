// Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // listen for the submit event
  document.getElementById("form_product").addEventListener('submit',function(e){
  	// prevent default submissions
  	e.preventDefault();

  	// getting input
    //  alert("function works")

var names=document.getElementById("nameProduct").value;
var price=document.getElementById("priceProduct").value;
var additinalInfo= document.getElementById("infoProduct").value;
var category=document.getElementById("categoryProduct").value;
var group=document.getElementById("groupProduct").value;

const ref = firebase.storage().ref();
const file = document.querySelector("#photo").files[0];
const name = +new Date() + "-" + file.name;
const metadata = {
  contentType: file.type
};
const task = ref.child(name).put(file, metadata);
task
  .then(snapshot => snapshot.ref.getDownloadURL())
  .then(url => {
    console.log(url);

    // pushing this to firebase web
     // sending to database
// saving usersdata to firebase realtime database
     firebase.database(.ref('product').push({
        productName: names,
        ProductPrice: price,
        ProductInfo: additionalInfo,
        ProductCategory: category,
        ProductGroup: group,
        ProductImage: url
     })


     // alert confirmation
     alert('Products Added');
     // firebase.auth().signOut();
     names = '';
     price = '';
     additionalInfo ='';

  })
     .catch(console.error);


