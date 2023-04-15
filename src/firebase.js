// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

require('dotenv').config()
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBW24YlJXeeuGpMaiHoA_nv8H0u3XermV0",
    authDomain: "project-management-ensign.firebaseapp.com",
    projectId: "project-management-ensign",
    storageBucket: "project-management-ensign.appspot.com",
    messagingSenderId: "924826922742",
    appId: "1:924826922742:web:f7e1fd577f3e7951e506d7",
    measurementId: "G-PTP5T177D6",
    databaseURL: "https://project-management-ensign-default-rtdb.europe-west1.firebasedatabase.app/",
};
// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object

// ...
// The value of `databaseURL` depends on the location of the database



// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Realtime Database and get a reference to the service
export const db = getDatabase(app);

export default app;