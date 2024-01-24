import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

type firebaseConfig = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
};

const firebaseConfig = () => {
  const env = import.meta.env;
  const configVars: firebaseConfig = {
    apiKey: env.VITE_FIREBASE_API_KEY ?? "",
    authDomain: env.VITE_FIREBASE_AUTH_DOMAIN ?? "",
    projectId: env.VITE_FIREBASE_PROJECT_ID ?? "",
    storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET ?? "",
    messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID ?? "",
    appId: env.VITE_FIREBASE_APP_ID ?? "",
    measurementId: env.VITE_FIREBASE_MEASUREMENT_ID ?? "",
  };

  return configVars;
};

export const initializeFirebase = () => {
  const config = firebaseConfig();
  const app = initializeApp(config);
  const analytics = getAnalytics(app);

  return { app, analytics };
};
