import React from 'react';
import ReactDOM from 'react-dom/client';
// import { getDatabase, ref } from "firebase/database";
import App from './App';

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBg4ULDRp0N5j4wDgzc407IY_2fdYTWpT8",
//   authDomain: "vch-consult-aid.firebaseapp.com",
//   databaseURL: "https://vch-consult-aid-default-rtdb.firebaseio.com",
//   projectId: "vch-consult-aid",
//   storageBucket: "vch-consult-aid.appspot.com",
//   messagingSenderId: "251684578673",
//   appId: "1:251684578673:web:9fa46bd554d7afffcf42d0",
//   measurementId: "G-6X949LN5S3"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);
// const reference = ref(db, 'VCH_employee/' + []);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);