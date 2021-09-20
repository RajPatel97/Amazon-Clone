// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHocWK-t4VQhnt8A9r9NYdXwK72j9dTO4",
  authDomain: "clone-d4d84.firebaseapp.com",
  projectId: "clone-d4d84",
  storageBucket: "clone-d4d84.appspot.com",
  messagingSenderId: "327668716445",
  appId: "1:327668716445:web:c847112be155439e321574",
  measurementId: "G-NK86SKDJRW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//const auth = firebase.auth();
//export {auth};
export {app};