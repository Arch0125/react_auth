// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHj_kTG69b2klIZHmb-00TgdcOxsi9NDE",
  authDomain: "reactauth-b1cd8.firebaseapp.com",
  projectId: "reactauth-b1cd8",
  storageBucket: "reactauth-b1cd8.appspot.com",
  messagingSenderId: "1055409740539",
  appId: "1:1055409740539:web:e6dc92baf57948efa76e5e"
};

// Initialize Firebase
let app;
if(firebase.apps.length == 0){
    app = firebase.initializeApp(firebaseConfig)
}else{
    app = firebase.app()
}
const auth = firebase.auth()

export {auth}