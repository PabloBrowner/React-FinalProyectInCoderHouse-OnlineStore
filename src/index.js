import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD4AslC66kotG8etJzJGQQnI5T4bhlzr38",
  authDomain: "lamp-13cf6.firebaseapp.com",
  projectId: "lamp-13cf6",
  storageBucket: "lamp-13cf6.appspot.com",
  messagingSenderId: "44128335699",
  appId: "1:44128335699:web:4b6dfc76bf5e3072a893a6"
};


initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
