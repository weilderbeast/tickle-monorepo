import { getAuth, signInWithPopup } from "firebase/auth";
import { githubAuthProvider } from "./github-auth";
import { useEffect, useState } from "react";
import { useLocalStorageManager } from "../../model/local-storage-manager";
import { googleAuthProvider } from "./google-auth";

export const authFlow = () => {
  const [user, setUser] = useState({});
  const { set } = useLocalStorageManager();

  useEffect(() => {
    set("user", JSON.stringify(user));
  }, [user]);

  const signInWithGithub = async () => {
    const auth = getAuth();
    const githubProvider = githubAuthProvider();
    const tempUser = await signInWithPopup(auth, githubProvider);
    setUser(tempUser);
  };

  const signInWithGoogle = async () => {
    const auth = getAuth();
    const googleProvider = googleAuthProvider();
    const tempUser = await signInWithPopup(auth, googleProvider);
    setUser(tempUser);
    console.log(tempUser);
  };

  return {
    user,
    signInWithGithub,
    signInWithGoogle,
  };
};
