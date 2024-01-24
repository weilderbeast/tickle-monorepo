import { getAuth, signInWithPopup } from "firebase/auth";
import { githubAuthProvider } from "./github-auth";
import { useState } from "react";

export const authFlow = () => {
  const [user, setUser] = useState({});
  const signInWithGithub = async () => {
    const auth = getAuth();
    const provider = githubAuthProvider();
    const tempUser = await signInWithPopup(auth, provider);
    setUser(tempUser);
    console.log(tempUser);
  };

  return {
    user,
    signInWithGithub,
  };
};
