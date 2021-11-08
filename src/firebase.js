import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBuxC4upLZdXQcBIr8KjdwnDOtlrKs0YUc",
  authDomain: "trichert-07.firebaseapp.com",
  projectId: "trichert-07",
  storageBucket: "trichert-07.appspot.com",
  messagingSenderId: "645005469309",
  appId: "1:645005469309:web:0a6b72a35b1d7bfe1bb314",
  measurementId: "G-3N5R13NR3C"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);