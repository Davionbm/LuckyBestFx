// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAGsOr0m-pkfg4fFuNPX49QEIk0N26wR1Y",
    authDomain: "final-firebase-9817a.firebaseapp.com",
    projectId: "final-firebase-9817a",
    storageBucket: "final-firebase-9817a.appspot.com",
    messagingSenderId: "710723432118",
    appId: "1:710723432118:web:9d0d24cd15d8313b0b4017"
  };
  
  // // Initialize Firebase
  // const app = initializeApp('firebaseConfig');
  // Intialize variables
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth()
  const database = firebase.database()


  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  firebase.auth().signInWithEmailAndPassword(email, password)
.then((userCredential) => {
  // User signed in successfully
  var user = userCredential.user;
  // Call a function to display the username
  displayUsername(user.displayName);
})
.catch((error) => {
  // Handle sign-in errors
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorMessage);
});


function displayUsername(username) {
  var usernameElement = document.getElementById("username");
  usernameElement.innerText = username;
}

      // Log out the user
      document.getElementById('logout-btn').addEventListener('click', function() {
        firebase.auth().signOut()
      .then(function() {
        // Sign out successful
        alert('User Signed Out')
        console.log("User signed out");
      })
      .catch(function(error) {
        // An error occurred
        console.error("Error signing out:", error);
      });
      event.preventDefault(); // Prevent form submission
      window.location.href = "login2.html";

    
    });

   
  