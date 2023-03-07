import firebase from "@firebase/app-compat";
import "@firebase/auth-compat";
import "@firebase/firestore-compat";

const firebaseConfig = {
    apiKey: "AIzaSyDXOXtWqxxVJPRcsZ2CA506Ikh-FqFUqVk",
    authDomain: "graduated-salon.firebaseapp.com",
    projectId: "graduated-salon",
    storageBucket: "graduated-salon.appspot.com",
    messagingSenderId: "723972071239",
    appId: "1:723972071239:web:fd78616df732b75d34f662",
    measurementId: "G-QS8DQ98LQ2"
};

firebase.initializeApp(firebaseConfig);
export default firebase