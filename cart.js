var firebaseConfig = {
    apiKey: "AIzaSyCvJjoGTwV6Yg9VDmukX3WsDRoYQ8MGA6k",
    authDomain: "cafeteria-c90fb.firebaseapp.com",
    projectId: "cafeteria-c90fb",
    storageBucket: "cafeteria-c90fb.appspot.com",
    messagingSenderId: "640668902312",
    appId: "1:640668902312:web:bef8a004875deaef04339d"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 // Refernece contactInfo collections
let contactInfo = firebase.database().ref("datas");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let address = document.querySelector(".address").value;
  console.log(name, email, address);

  saveContactInfo(name, email, address);

  document.querySelector(".contact-form").reset();
}

// Save infos to Firebase
function saveContactInfo(name, email, address) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    address: address,
  });
}
