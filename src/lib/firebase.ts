import { initializeApp, getApps, getApp } from "firebase/app";
import { getDataConnect, connectDataConnectEmulator } from "firebase/data-connect";
import { connectorConfig } from "@dataconnect/generated";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Auth
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Initialize Storage
const storage = getStorage(app);

// Initialize Data Connect
const dataConnect = getDataConnect(app, connectorConfig);

// Uncomment the following line to connect to the local emulator during development
// connectDataConnectEmulator(dataConnect, 'localhost', 9399);

export { app, auth, googleProvider, dataConnect, storage };
