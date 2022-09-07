import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA9s-NbxzTQc7FfSS52kYvjXldN5OCgfDE",
  authDomain: "appjc-3b47b.firebaseapp.com",
  projectId: "appjc-3b47b",
  storageBucket: "appjc-3b47b.appspot.com",
  messagingSenderId: "97984188227",
  appId: "1:97984188227:web:dd6a346da47b893d1da9f6"
};

export const initFirebase = initializeApp(firebaseConfig);