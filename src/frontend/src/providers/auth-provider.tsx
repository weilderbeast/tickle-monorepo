import React, { createContext, useEffect, useState } from "react";
import { User } from "../model/user";
import { useLocalStorageManager } from "../model/local-storage-manager";
import { useNavigate } from "react-router-dom";

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

type authContextType = {
  user: User;
  setUser: (user: User) => void;
  session: sessionType;
  vendorTokenResponse: tokenResponseType;
  providerId: providerType;
};

export const useSessionManager = ({ session }: { session: sessionType }) => {
  const [sessionManager, setSessionManager] = useState<sessionType>(session);

  return { sessionManager, setSessionManager };
};

export const AuthContext = createContext<authContextType>(
  {} as authContextType
);

export const AuthProvider = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  const [authContext, setAuthContext] = useState<authContextType>(
    {} as authContextType
  );
  const { clear, get, getSafe, remove, set } = useLocalStorageManager();
  const navigate = useNavigate();

  const findCachedAtuh = () => {
    const user = getSafe("user", true);
    if (!user) return null;
    const session = getSafe("session", true);
    if (!session) return null;
    const providerId = getSafe("providerId", true);
    if (!providerId) return null;
    const vendorTokenResponse = getSafe("vendorTokenResponse", true);
    if (!vendorTokenResponse) return null;
    const authCon: authContextType = {
      user,
      setUser: (user: User) => {
        set("user", JSON.stringify(user));
        setAuthContext({ ...authContext, user });
      },
      session,
      vendorTokenResponse,
      providerId,
    };

    return authCon;
  };

  const resetAuth = () => {
    clear();
    setAuthContext({} as authContextType);
  };

  useEffect(() => {
    if (!authContext || !authContext.user) {
      const context = findCachedAtuh();

      if (!context) {
        //new login session
        navigate("/login");
        resetAuth();
        return;
      }

      setAuthContext(context);
    }
  }, [authContext]);

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};
