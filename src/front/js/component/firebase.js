import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
	apiKey: "AIzaSyDL8wCB_w2h9Ul4dpCIhRmgnTxvyJzsIKw",
	authDomain: "twitter-clone-1882a.firebaseapp.com",
	projectId: "twitter-clone-1882a",
	storageBucket: "twitter-clone-1882a.appspot.com",
	messagingSenderId: "702300174548",
	appId: "1:702300174548:web:9e79250b26bedbb469a341",
	measurementId: "G-FZF9Y2E5EX"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export default db;
