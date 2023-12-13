import { initializeApp } from 'firebase/app';
import {
	getAuth,
	onAuthStateChanged,
	signOut,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';


const firebaseConfig = {
	apiKey: import.meta.env.VITE_API_KEY,
	authDomain: import.meta.env.VITE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_MESSAGIN_SENDER_ID,
	appId: import.meta.env.VITE_APP_ID,
	measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//initialize BD
export const db= getFirestore(app);
//

export const signInUser = async (email, password) => {
	if (!email && !password) return;

	return await signInWithEmailAndPassword(auth, email, password);
};

export const userStateListener = (callback) => {
	return onAuthStateChanged(auth, callback);
};

export const SignOutUser = async () => await signOut(auth);
