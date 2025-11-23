import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// Your REAL credentials
const firebaseConfig = {
  apiKey: "AIzaSyDiRs0P5BBfT1yzXRC63pT4gSQmX4Yfxmk",
  authDomain: "smart-station-iot.firebaseapp.com",
  databaseURL: "https://smart-station-iot-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "smart-station-iot",
  storageBucket: "smart-station-iot.firebasestorage.app",
  messagingSenderId: "806199367304",
  appId: "1:806199367304:web:82696896389fb0e456713d",
  measurementId: "G-C6YW0F2E41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);