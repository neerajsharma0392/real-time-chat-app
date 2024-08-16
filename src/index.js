import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";



const firebaseConfig = {
  apiKey: "AIzaSyDEH-ssU4vEgYYZs0rd8iFufPb2MQgU0h8",
  authDomain: "real-time-chat-19d60.firebaseapp.com",
  projectId: "real-time-chat-19d60",
  storageBucket: "real-time-chat-19d60.appspot.com",
  messagingSenderId: "601120113300",
  appId: "1:601120113300:web:fb6878bd7548bb4ce12a81",
  measurementId: "G-D1S8EXZBVQ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
