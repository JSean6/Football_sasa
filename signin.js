// function handleCredentialResponse(response) {
//     console.log("Encoded JWT ID token: " + response.credential);
//   }
//   window.onload = function () {
//     google.accounts.id.initialize({
//       client_id: "836227038657-3o5essd8tbq1klmq03kebt46lvv4ckp7.apps.googleusercontent.com",
//       callback: handleCredentialResponse
//     });
//     google.accounts.id.renderButton(
//       document.getElementById("buttonDiv"),
//       { theme: "outline", size: "large" }  // customization attributes
//     );
//     google.accounts.id.prompt(); // also display the One Tap dialog
//   }

//   import { initializeApp } from 'firebase/app';

// // TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//   //...
// };

// const app = initializeApp(firebaseConfig);
/* <script src="https://accounts.google.com/gsi/client" async defer></script>
    <div id="buttonDiv"></div>
    <script src="signin.js"></script> */
  
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
  import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";


  const firebaseConfig = {
    apiKey: "AIzaSyCNX7LDLG8BQZuqIPsb_QBEBewM1OkmTmQ",
    authDomain: "footballsasa-ab5e7.firebaseapp.com",
    projectId: "footballsasa-ab5e7",
    storageBucket: "footballsasa-ab5e7.appspot.com",
    messagingSenderId: "634698697362",
    appId: "1:634698697362:web:2402f5aa537e3ce1be344b",
    measurementId: "G-ZLENCM2GK1"
  };

  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  auth.languageCode = 'en';

const provider = new GoogleAuthProvider();