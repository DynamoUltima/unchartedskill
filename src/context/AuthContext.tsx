"use client"

import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import {
    onAuthStateChanged,
    User,
    signInWithPopup,
    signOut as firebaseSignOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile
} from 'firebase/auth';
import { auth, googleProvider } from '../lib/firebase';

interface AuthContextType {
    user: User | null;
    loading: boolean;
    signInWithGoogle: () => Promise<void>;
    signOut: () => Promise<void>;
    signUpWithEmail: (email: string, pass: string, name: string) => Promise<User | null>;
    signInWithEmail: (email: string, pass: string) => Promise<User | null>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const popupInProgress = useRef(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const signInWithGoogle = async () => {
        // Prevent concurrent popup requests (causes auth/cancelled-popup-request)
        if (popupInProgress.current) return;
        popupInProgress.current = true;
        try {
            const result = await signInWithPopup(auth, googleProvider);
            console.log("Successfully logged in with Google:", result.user);
        } catch (error: any) {
            // Firebase cancels a previous popup when a new one opens — not a real error
            if (error?.code === 'auth/cancelled-popup-request') return;
            console.error("Error signing in with Google", error);
            throw error;
        } finally {
            popupInProgress.current = false;
        }
    };

    const signOut = async () => {
        try {
            await firebaseSignOut(auth);
        } catch (error) {
            console.error("Error signing out", error);
        }
    };

    const signUpWithEmail = async (email: string, pass: string, name: string): Promise<User | null> => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
            await updateProfile(userCredential.user, { displayName: name });
            setUser({ ...userCredential.user, displayName: name } as User); // Force local update
            return userCredential.user;
        } catch (error) {
            console.error("Error signing up with email", error);
            throw error;
        }
    };

    const signInWithEmail = async (email: string, pass: string): Promise<User | null> => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, pass);
            return userCredential.user;
        } catch (error) {
            console.error("Error signing in with email", error);
            throw error;
        }
    };

    return (
        <AuthContext.Provider value={{ user, loading, signInWithGoogle, signOut, signUpWithEmail, signInWithEmail }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
