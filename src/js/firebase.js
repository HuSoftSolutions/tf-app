import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: create ENV files
const firebaseConfig = {
  apiKey: "AIzaSyCuxysF8R7pVkeCpDYwJg3EAjB8sp-PVGg",
  authDomain: "teefindr-dev.firebaseapp.com",
  databaseURL: "https://teefindr-dev.firebaseio.com",
  projectId: "teefindr-dev",
  storageBucket: "teefindr-dev.appspot.com",
  messagingSenderId: "304691772212",
  appId: "1:304691772212:web:504f4e1a54f2d396e84361",
  measurementId: "G-CN376ZTJKY",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
