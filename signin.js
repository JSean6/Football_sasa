import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";


  const firebaseConfig = {
    apiKey: "AIzaSyDmT5gCl7O-8GzvF6ls9_7Lm-56UmEaaxA",
    authDomain: "footballsasa-f5523.firebaseapp.com",
    projectId: "footballsasa-f5523",
    storageBucket: "footballsasa-f5523.appspot.com",
    messagingSenderId: "109322016980",
    appId: "1:109322016980:web:fc9f463631a1e28138c341"
  };

  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  auth.languageCode = 'en';

const provider = new GoogleAuthProvider();



const googleLogin = document.getElementById("google-login-btn");
googleLogin.addEventListener("click", function() {
    signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result); 
      const user = result.user;
      console.log(user);
      window.location.href = "../index.html";


    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
    



})

function updateUserProfile(user) {
    const userName = user.displayName;
    const userEmail = user.email;
    const userProfilePicture = user.photoURL;

    document.getElementById("userName").textContext = userName;
    document.getElementById("userEmail").textContext = userEmail;
    document.getElementById("userProfilePicture").src = userProfilePicture;
}

updateUserProfile()