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

// set up our register function
function register () {
  
  // Get all our input fields
  // full_name = document.getElementById('full_name').value
  // email = document.getElementById('email').value
  // country = document.getElementById('country').value 
  // number = document.getElementById('number').value 
  // password = document.getElementById('password').value
  // event.preventDefault();
  // // validate inpute fields
  // if (validate_email(email) == false || validate_password(passowrd) == false) {
  //   alert('Email or Password Invalid')
  //   return
  //   // Don't continue running the code
  // }
  // if(validate_field(full_name) == false || validate_field(email) == false || validate_field(country) == false || validate_field(number)) {
  //   alert('One or More Extra Fields is Not Filled')
  // }
  
  // var register = myvalue;

// event.preventDefault();
  // console.log(email);

}

// Move on with Auth
// auth.creatUserWithEmailAndPassword(email, password)
// .then(function(){
//   // declare user variables 
//   var user = auth.currentUser
//   // Add to firebase database 
//   var database_ref = database.ref()

//   // Create User data 
//   var user_data = {
//     full_name : full_name,
//     email : email,
//     country : country,
//     number : number,
//     last_login : Date.now()
//   }

//   database_ref.child('users/' + user.uid).set(user_data)




//   alert('User Created')
  
// })
// .catch(function(error){
//   // firebase will alert us of errors 
//   var error_code = error.error_code
//   var error_message = error.messagingSenderId

//   alert(error_message)
// })










function validate_email(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/.test(str);
  if (expression.test(email) == true) {
// email is good
    return true
  } else {
// email is bad
    return false
  }
}

function validate_password(passowrd) {
// firebase only accepts lengths greater than 6
if (password < 6) {
  return false
 } else {
  return true
 }
}

function validate_field(field) {
  if (field == null) {
    return false
  }

  if (field.length <= 0) {
    return false
  } else {
    return true
  }
}


//Sign Up form
// Get user credentials
// Get the sign-up form

// Get the user name element
var userNameElement = document.getElementById('user-name');
var signUpForm = document.getElementById('login-side');

// Add an event listener to handle form submission
signUpForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get user credentials
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // Create a new user with email and password
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function(userCredential) {
      // User creation successful
      var user = userCredential.user;
      alert('User Created')
      console.log("User created:", user);
      // Perform further actions if needed

      if (user) {
        // User is signed in
        console.log("User signed in:", user);
    
        // Get the user's display name
        var displayName = user.displayName;
    
        // Update the HTML element with the user's name
        userNameElement.textContent = "Welcome, " + displayName;
      } else {
        // No user is signed in
        console.log("No user signed in");
    
        // Clear the HTML element
        userNameElement.textContent = "";
      }
      
      // Redirect to another page
    window.location.href = "index.html";
    
    })
    .catch(function(error) {
      // Handle errors during user creation
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error("User creation error:", errorCode, errorMessage);
      // Display error message to the user


      // Store additional user information in the database
      var userId = user.uid;
      var userData = {
        email: user.email,
        username : user.username,
        country : user.country,
        number : user.number,
        last_login : Date.now()
        // Add additional user data as needed
      };

      var user = auth.currentUser;

    

// Reference to the Firestore database
var db = firebase.firestore();

// Define user data
var userData = {
  name: "John Doe",
  age: 25,
  email: user.email
};

// Store user data in Firestore
db.collection("users").doc(user.uid).set(userData)
  .then(function() {
    console.log("User data stored in Firestore");
  })
  .catch(function(error) {
    console.error("Error storing user data:", error);
  });




// Access the Firebase Realtime Database



      // Save user data to the database
      var database = firebase.database();
      firebase.database().ref('users/' + userId).set(userData)
        .then(function() {
          console.log("User data saved to the database");
          // Perform further actions if needed
        })
        .catch(function(error) {
          console.error("Error saving user data:", error);
          // Display error message to the user
        });

      // Perform further actions if needed
    })
    .catch(function(error) {
      // Handle errors during user creation
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error("User creation error:", errorCode, errorMessage);
      // Display error message to the user
    });





  // Get user credentials
// Get the sign-in form


var signInForm = document.getElementById('login-side');

// Add an event listener to handle form submission
signInForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get user credentials
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // Sign in user with email and password
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function(userCredential) {
      // User sign-in successful
      var user = userCredential.user;
      alert("User Signed In")
      console.log("User signed in:", user);
      // Perform further actions if needed
      // Redirect to another page
       window.location.href = "index.html";
    })
    .catch(function(error) {
      // Handle errors during user sign-in
      var errorCode = error.code;
      var errorMessage = error.message;
      alert("Wrong Credentials")
      console.error("User sign-in error:", errorCode, errorMessage);
      // Display error message to the user
    });


});



      // Create User data 
  // var user_data = {
  //   full_name : full_name,
  //   email : email,
  //   country : country,
  //   number : number,
  //   last_login : Date.now()
  // }

  // database_ref.child('users/' + user.uid).set(user_data)
  });






















































































































//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   const firebaseConfig = {
//     apiKey: "AIzaSyBi4Qs6c0lMO87pzkMeu76MNp5nSd88f8A",
//     authDomain: "tradenairang.firebaseapp.com",
//     projectId: "tradenairang",
//     storageBucket: "tradenairang.appspot.com",
//     messagingSenderId: "876826874647",
//     appId: "1:876826874647:web:92a57941fea88263601d52",
//     measurementId: "G-9W5471T2KG"
//   };

  

//   // Initialize Firebase
//   const auth = firebase.auth()
//   const database = firebase.database()

//   const form = getElementById("login-side")

//   form.addEventListener("submit", function(event){ 
// console.log("CLICKED!!!!!!!!!!!!")
//       event.preventDefault()  
//       //get all your fields
//       full_name = document.getElementById('full_name').value
//       email = document.getElementById('email').value
//       country = document.getElementById('country').value
//       number = document.getElementById('number').value
//       password = document.getElementById('password').value
    
//       //validate your fields
//       if (validate_email(email) == false || validate_password(password) == false) {
//           alert('Email or Password is Outta Line!!')
//           return
//           //don't continue running the code
//       }
//   })

//   //set up our register function
//   function register (e) {
//     e.preventDefault()
//     //get all your fields
//     email = document.getElementById('email').value
//     password = document.getElementById('password').value

//     //validate your fields
//     if (validate_email(email) == false || validate_password(password) == false) {
//         alert('Email or Password is Outta Line!!')
//         return
//         //don't continue running the code
//     }
//   }

//   //move on wit auth
//   auth.createUserWithEmailAndPassowrd(email, passowrd)
//   .then(function() {
// //declare user variables
//     var user = auth.currentUser

//     //add this user to firebase Database
//     var database_ref = database.ref()


//     //create user data
//     var user_data = {
//         email : email,
//         passowrd : passowrd,
//         last_login : Date.now()
//     }

//     database_ref.child('users/' + user.uid).set(user_data)

//     alert('User Created!')
//   })
//   .catch(function(error) {
//     // firebase will use this to alert of its errors
//     var error_code = error.code
//     var error_message = error.message

//     alert(error_message)

//   })

//   function validate_email(email) {
//     expression = /^[^@]+@\w+(\.\w+)+\w$/
//     if (expression.test(email) == true) {
//         //email is good
//         return true
//     } else {
//         //email is not good
//         return false
//     }
//   }

//   function validate_password(password) {
//     // Firebase only accepts lengths greater than 6
//     if (password < 6) {
//         return false
//     } else {
//         return true
//     }
//   }

//   function validate_field(field) {
//     if (field == null) {
//         return false
//     }

//     if (field.length <= 0) {
//         return false
//     } else {
//         return true
//     }
//   }