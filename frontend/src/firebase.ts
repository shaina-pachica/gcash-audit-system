// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, type Auth } from 'firebase/auth';
import { Firestore, getFirestore } from 'firebase/firestore';
import { getStorage, type FirebaseStorage } from 'firebase/storage';

// WebApp's Firebase configuration
const requiredEnvVars = [
  'VITE_FIREBASE_API_KEY',
  'VITE_FIREBASE_AUTH_DOMAIN',
  'VITE_FIREBASE_PROJECT_ID',
  'VITE_FIREBASE_STORAGE_BUCKET',
  'VITE_FIREBASE_MESSAGING_SENDER_ID',
  'VITE_FIREBASE_APP_ID',
];

for (const varName of requiredEnvVars) {
  if (!import.meta.env[varName]) {
    throw new Error(`Missing Firebase configuration for ${varName}`);
  }
}

  const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
  };

  // Initialize Firebase
  let app;
  try {
    app = initializeApp(firebaseConfig);
  } catch (error) {
    console.error('Firebase initialization error:', error);
    throw new Error('Failed to initialize Firebase. Check your configuration.');
  }

  // Exports
  export const auth: Auth = getAuth(app);
  export const db: Firestore = getFirestore(app);
  export const storage: FirebaseStorage = getStorage(app);
