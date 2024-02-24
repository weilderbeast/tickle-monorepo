import { authFlow } from "../../firebase/auth/auth";

export const useLogin = () => {
  const { signInWithGithub, signInWithGoogle } = authFlow();

  const signInWithEmailAndPassword = (email: string, password: string) => {};

  return {
    signInWithGithub,
    signInWithGoogle,
    signInWithEmailAndPassword,
  };
};
