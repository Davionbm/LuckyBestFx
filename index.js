  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBi4Qs6c0lMO87pzkMeu76MNp5nSd88f8A",
    authDomain: "tradenairang.firebaseapp.com",
    projectId: "tradenairang",
    storageBucket: "tradenairang.appspot.com",
    messagingSenderId: "876826874647",
    appId: "1:876826874647:web:92a57941fea88263601d52",
    measurementId: "G-9W5471T2KG"
  };

  // Initialize Firebase
  const auth = firebase.auth()
  const database = firebase.database()

  //set up our register function
  function register () {
    //get all your fields
    email = document.getElementById('email').value
    password = document.getElementById('password').value

    //validate your fields
    if (validate_email(email) == false || validate_password(password) == false) {
        alert('Email or Password is Outta Line!!')
        return
        //don't continue running the code
    }
  }

  //move on wit auth
  auth.createUserWithEmailAndPassowrd(email, passowrd)
  .then(function() {

    var user = auth.currentUser

    //add this user to firebase Database
    var database_ref = database.ref()


    //create user data
    var user_data = {
        email : email,
        last_login : Date.now()
    }

    database_ref.child('users/' + user.uid).set(user-data)


    alert('User Created!')
  })
  .catch(function(error) {
    // firebase will use this to alert of its errors
    var error_code = error.code
    var error_message = error.message

    alert(error_message)

  })

  function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
        //email is good
        return true
    } else {
        //email is not good
        return false
    }
  }

  function validate_password(password) {
    // Firebase only accepts lengths greater than 6
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