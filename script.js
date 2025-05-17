// script.js
import { auth } from "./firebaseConfig.js";

// Get elements
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const randomParagraph = document.getElementById("random-paragraph");

// Login functionality
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
   .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("Signed in as ", user.email);
      window.location.href = "home.html";
    })
   .catch((error) => {
      console.log("Error signing in: ", error);
    });
});

// Register functionality
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email, password)
   .then((userCredential) => {
      // Registered
      const user = userCredential.user;
      console.log("Registered as ", user.email);
      window.location.href = "index.html";
    })
   .catch((error) => {
      console.log("Error registering: ", error);
    });
});

// Get random paragraph
if (randomParagraph) {
  const paragraphs = [
    "The power of the Kamehameha wave is incredible!",
    "I've been training for years to master the Super Saiyan form.",
    "Vegeta and I have had our fair share of battles, but we're now allies.",
    "Krillin is one of my closest friends and a skilled martial artist.",
    "The Dragon Balls hold the key to granting any wish.",
  ];

  const randomIndex = Math.floor(Math.random() * paragraphs.length);
  randomParagraph.textContent = paragraphs[randomIndex];
}