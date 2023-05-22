// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import {onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0ruH5UWVka5H-6pxKr9zIXOShAN5bMME",
  authDomain: "pbo-project-a27d9.firebaseapp.com",
  databaseURL: "https://pbo-project-a27d9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pbo-project-a27d9",
  storageBucket: "pbo-project-a27d9.appspot.com",
  messagingSenderId: "522745092180",
  appId: "1:522745092180:web:d24bf3bc2c2f76fda7b5c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

signUp.addEventListener('click',(e)=>{

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var username = document.getElementById('username').value;


    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert('User signed in');
        // ...
        })

        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert(errorMessage);
        // ..
    });
});


// Tampilkan  user Sekarang 
// msh blm bener 
// blm ad di html
onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
});