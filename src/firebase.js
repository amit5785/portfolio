import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBbjkxccnM2u4E3I73ggbiUaNcJt_IcYjw",
  authDomain: "portfolio-2d405.firebaseapp.com",
  projectId: "portfolio-2d405",
  storageBucket: "portfolio-2d405.appspot.com",
  messagingSenderId: "315383948277",
  appId: "1:315383948277:web:6faf24a5d206ac4d8af6bc",
  databaseURL : "https://portfolio-2d405-default-rtdb.firebaseio.com"
};


const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);
export const storage = getStorage(app)

export default app;