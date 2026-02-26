import { initializeApp, getApps, getApp } from "firebase/app";
import { getDataConnect, connectDataConnectEmulator } from "firebase/data-connect";
import { connectorConfig } from "@dataconnect/generated";

const firebaseConfig = {
    apiKey: "AIzaSyCZyWkoY95mq05egjYnEAlMN_mG3FaGXfo",
    authDomain: "unchartedskill-fe3f9.firebaseapp.com",
    projectId: "unchartedskill-fe3f9",
    storageBucket: "unchartedskill-fe3f9.firebasestorage.app",
    messagingSenderId: "561773864681",
    appId: "1:561773864681:web:b6383768259e4961f5b278",
    measurementId: "G-KB4H6QH4K0"
};

import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Auth
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Initialize Data Connect
const dataConnect = getDataConnect(app, connectorConfig);

// Uncomment the following line to connect to the local emulator during development
// connectDataConnectEmulator(dataConnect, 'localhost', 9399);

export { app, auth, googleProvider, dataConnect };
