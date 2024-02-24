import { GoogleAuthProvider } from "firebase/auth";

export const googleAuthProvider = () => {
  const provider = new GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

  return provider;
};
