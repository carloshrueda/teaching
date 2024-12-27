

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// importar cdn de firestore. Tomado de: https://firebase.google.com/docs/web/learn-more#available-libraries
// getFirestore : se obtiene la conexión a la base de datos
// collection : me permite gestionar las "tablas", entidades
// addDoc : permite agregar datos a una colección
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js"

// Your web app's Firebase configuration
const firebaseConfig = {
    //Nombre del proyecto: prueba-firestore-bd
    apiKey: "AIzaSyCBkbRTpQWykQhG-2pNyK5A4ve_RKlt0EQ",
    authDomain: "prueba-firestore-bd.firebaseapp.com",
    projectId: "prueba-firestore-bd",
    storageBucket: "prueba-firestore-bd.appspot.com",
    messagingSenderId: "486989244362",
    appId: "1:486989244362:web:d4035cd0cb66ae36da5133"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Obteniendo la conexión a la base de datos
const db = getFirestore()

// Mis funciones para hacer el CRUD

// Guardar datos en la colección
export const saveTask = (title, description) => addDoc(collection(db, 'tasks'), { title, description });
