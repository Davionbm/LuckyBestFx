 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyDiECxBIIwmunsTyojVPSTZW8eI3Mnc7PY",
  authDomain: "fir-store-59ff8.firebaseapp.com",
  projectId: "fir-store-59ff8",
  storageBucket: "fir-store-59ff8.appspot.com",
  messagingSenderId: "407642163403",
  appId: "1:407642163403:web:61decaaef261e0a077f34e"
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// Intialize variables
const auth = firebase.auth()
const database = firebase.database()

// set up our register function
function register () {
  
  // Get all our input fields
  full_name = document.getElementById('full_name').value
  email = document.getElementById('email').value
  country = document.getElementById('country').value 
  number = document.getElementById('number').value 
  password = document.getElementById('password').value
  event.preventDefault();
  // validate inpute fields
  if (validate_email(email) == false || validate_password(passowrd) == false) {
    alert('Email or Password Invalid')
    return
    // Don't continue running the code
  }
  if(validate_field(full_name) == false || validate_field(email) == false || validate_field(country) == false || validate_field(number)) {
    alert('One or More Extra Fields is Not Filled')
  }
  

  console.log(register())

}

// Move on with Auth
auth.creatUserWithEmailAndPassword(email, password)
.then(function(){
  // declare user variables 
  var user = auth.currentUser
  // Add to firebase database 
  var database_ref = database.ref()

  // Create User data 
  var user_data = {
    full_name : full_name,
    email : email,
    country : country,
    number : number,
    last_login : Date.now()
  }

  database_ref.child('users/' + user.uid).set(user_data)




  alert('User Created')
  
})
.catch(function(error){
  // firebase will alert us of errors 
  var error_code = error.error_code
  var error_message = error.messagingSenderId

  alert(error_message)
})










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