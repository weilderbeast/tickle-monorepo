import { createContext, useContext, useState } from "react";
import { useLocalStorageManager } from "../model/local-storage-manager";
import { User } from "../model/user";

enum providerType {
  "github.com",
  "google.com",
  "anonymous",
}

type githubTokenResponseType = {
  federatedId: string;
  providerId: string;
  email: string;
  emailVerified: boolean;
  fullName: string;
  photoUrl: string;
  localId: string;
  displayName: string;
  idToken: string;
  context: string;
  oauthAccessToken: string;
  refreshToken: string;
  expiresIn: string;
  screenName: string;
  rawUserInfo: string;
  kind: string;
};

type googleTokenResponseType = {
  federatedId: string;
  providerId: string;
  emailVerified: boolean;
  firstName: string;
  fullName: string;
  lastName: string;
  photoUrl: string;
  localId: string;
  displayName: string;
  idToken: string;
  context: string;
  oauthAccessToken: string;
  oauthExpireIn: number;
  refreshToken: string;
  expiresIn: string;
  oaauthIdToken: string;
  kind: string;
};

type tokenResponseType = githubTokenResponseType | googleTokenResponseType;

type githubSessionType = {
  sessionToken: string;
  accessToken: string;
  expirationTime: string;
  refreshToken: string;
};

type googleSessionType = {
  refreshToken: string;
  accessToken: string;
  expirationTime: number;
};

type sessionType = githubSessionType | googleSessionType;

type AuthContextType = {
  user: User | null;
  setUser: (user: User) => void;
  session: sessionType | null;
  vendorTokenResponse: tokenResponseType | null;
  providerId: providerType | null;
  isAuthenticated: boolean;
  resetAuth: () => void;
  findAuthFromLocalStorage: () => void;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export const useSessionManager = ({ session }: { session: sessionType }) => {
  const [sessionManager, setSessionManager] = useState<sessionType>(session);

  return { sessionManager, setSessionManager };
};

export const useAuthContext = () => useContext<AuthContextType>(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<sessionType | null>(null);
  const [vendorTokenResponse, setVendorTokenResponse] =
    useState<tokenResponseType | null>(null);
  const [providerId, setProviderId] = useState<providerType | null>(null);
  const { getSafe } = useLocalStorageManager();

  const isAuthenticated = user !== null;

  const resetAuth = () => {
    setUser(null);
    setSession(null);
    setVendorTokenResponse(null);
    setProviderId(null);
  };

  const findAuthFromLocalStorage = () => {
    const tempAuth = {
      user: getSafe("user", true),
      session: getSafe("session", true),
      vendorTokenResponse: getSafe("vendorTokenResponse", true),
      providerId: getSafe("providerId", true),
    };

    if (
      tempAuth.user === null ||
      tempAuth.session === null ||
      tempAuth.vendorTokenResponse === null ||
      tempAuth.providerId === null
    ) {
      return;
    }

    setUser(tempAuth.user);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        session,
        vendorTokenResponse,
        providerId,
        isAuthenticated,
        resetAuth,
        findAuthFromLocalStorage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
