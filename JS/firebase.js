import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
import { getDatabase, ref, set, child, update, remove, get } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyC6nNmPJk5yfv-xFj9brDErlCRcARhoric",
  authDomain: "shubham-portfolio-de929.firebaseapp.com",
  projectId: "shubham-portfolio-de929",
  storageBucket: "shubham-portfolio-de929.firebasestorage.app",
  messagingSenderId: "716972257282",
  appId: "1:716972257282:web:a0c39006856795f098771b",
  measurementId: "G-NCZHTZB1R4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const getDb = getDatabase(app);

// Export the necessary modules for usage in other parts of the project
export { app, analytics, getDb, ref, set, child, update, remove, get };