// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore"; // Importa funções do Firestore
import { getAuth } from "firebase/auth"; // Importa o módulo de autenticação

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBBvHObo2mge32CfYYFKUGfhf9qeIqcq7Y",
  authDomain: "form-vizz.firebaseapp.com",
  projectId: "form-vizz",
  storageBucket: "form-vizz.appspot.com", // Certifique-se de que está correto
  messagingSenderId: "278866375975",
  appId: "1:278866375975:web:6f747b33a8d53173926502",
  measurementId: "G-3VK34NTQYF"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa o Firestore
const db = getFirestore(app);

// Inicializa o Auth
const auth = getAuth(app);

// Exporta os serviços do Firebase
export { db, collection, addDoc, auth };