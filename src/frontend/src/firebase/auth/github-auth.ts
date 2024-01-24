import { GithubAuthProvider } from "firebase/auth";

export const githubAuthProvider = () => {
  const provider = new GithubAuthProvider();
  provider.addScope("repo");

  return provider;
};
