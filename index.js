// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyDfWzu_hsThp4rFOqSZcFhbjt1-IYMBY3Y",
    authDomain: "test-e595a.firebaseapp.com",
    projectId: "test-e595a",
    storageBucket: "test-e595a.appspot.com",
    messagingSenderId: "799657223379",
    appId: "1:799657223379:web:62e715054754937f6d2026"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


  const auth = getAuth(app);
  
  
  const database = getDatabase(app);
  
  
  function signUp(Fname,Mname,Lname,email, pswd, cpswd) {
      createUserWithEmailAndPassword(auth, email, pswd)
          .then((userCredential) => {
              
              const user = userCredential.user;
              addUserToDatabase(user.uid,Fname,Mname,Lname,email, pswd, cpswd);
              alert("Sign up successful!");
          })
          .catch((error) => {
            
              console.error(error.message);
              alert("Sign up failed. Please try again.");
          });
  }
  
  function addUserToDatabase(userId, Fname,Mname,Lname,email, pswd, cpswd) {
      const userRef = ref(database, 'users/' + userId);
      set(userRef, {
        Fname:Fname,
        Mname:Mname,
        Lname:Lname,
        email:email,
         pswd:pswd, 
         cpswd:cpswd
      }).then(() => {
          console.log("User data added to database successfully");
      }).catch((error) => {
          console.error("Error adding user data to database:", error);
      });
  }
  
  
  function login(email, password) {
      signInWithEmailAndPassword(auth, email, pswd)
          .then((userCredential) => {
             
              const user = userCredential.user;
              console.log("User logged in:", user.uid);
              alert("Login successful!");
          })
          .catch((error) => {
            
              console.error(error.message);
              alert("Login failed. Please check your email and password.");
          });
  }
  
  
  document.getElementById("signupForm").addEventListener("submit", function(event) {
      event.preventDefault();
  
    
      const Fname = document.getElementById("signupFname").value;
      const Mname = document.getElementById("signupMname").value;
      const Lname = document.getElementById("signupLname").value;
      const email = document.getElementById("signupEmail").value;
      const pswd = document.getElementById("signupPswd").value;
      const cpswd = document.getElementById("signupCpswd").value;
  
      signUp(Fname,Mname,Lname,email, pswd, cpswd);
      
      document.getElementById("registrationForm").addEventListener("submit", function(event) {
        event.preventDefault();
  
        alert("Registration Successfull");
  
        window.location.href = "Login.html";
      });
  
  });
  
  
  document.getElementById("loginForm").addEventListener("submit", function(event) {
      event.preventDefault(); 
  
     
      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;
  
      login(email, password);
  });
  