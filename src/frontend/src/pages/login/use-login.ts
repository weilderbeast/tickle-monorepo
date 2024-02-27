import { authFlow } from "../../firebase/auth/auth";
import { z } from "zod";

export const useLogin = () => {
  const { signInWithGithub, signInWithGoogle } = authFlow();

  const signInWithEmailAndPassword = (email: string, password: string) => {};

  return {
    signInWithGithub,
    signInWithGoogle,
    signInWithEmailAndPassword,
  };
};

const formSchema = z.object({
  username: z.string().min(2).max(50),
  email: z.string().email(),
});
