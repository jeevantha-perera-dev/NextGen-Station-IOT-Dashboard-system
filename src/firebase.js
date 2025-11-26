import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDiRs0P5BBfT1yzXRC63pT4gSQmX4Yfxmk",
  authDomain: "smart-station-iot.firebaseapp.com",
  databaseURL: "https://smart-station-iot-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "smart-station-iot",
  storageBucket: "smart-station-iot.appspot.com",
  messagingSenderId: "1054704670722",
  appId: "1:1054704670722:web:xxxxxxx"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);