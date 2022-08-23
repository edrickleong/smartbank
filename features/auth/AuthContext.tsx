import * as Linking from "expo-linking";
import React, { useEffect } from "react";
import { ActivityIndicator } from "react-native";

import { supabase } from "../../supabase";

type AuthStatus = "loading" | "signed-in" | "signed-out";

interface AuthContextValue {
  authStatus: AuthStatus;
  signOut: () => void;
}

const AuthContext = React.createContext<AuthContextValue>({
  authStatus: "loading",
  signOut: () => {},
});

interface AuthProviderProps {
  children: React.ReactElement | React.ReactElement[];
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const [authStatus, setAuthStatus] = React.useState<AuthStatus>("loading");

  async function extractSessionFromLink(link: string) {
    const parsedURL = Linking.parse(link.replace("#", "?"));
    if (parsedURL.queryParams.error_code) return;
    if (authStatus !== "signed-out") return;

    const refreshToken = parsedURL.queryParams.refresh_token;
    if (!refreshToken) return;

    const { user } = await supabase.auth.signIn({
      refreshToken: refreshToken as string,
    });
    if (!user) return;

    setAuthStatus("signed-in");
  }

  useEffect(() => {
    const user = supabase.auth.user();
    if (!user) {
      setAuthStatus("signed-out");
      return;
    }

    setAuthStatus("signed-in");
  }, []);

  useEffect(() => {
    Linking.getInitialURL().then((url) => {
      if (url) {
        extractSessionFromLink(url!);
      }
    });

    const { remove } = Linking.addEventListener(
      "url",
      (res: { url: string }) => {
        if (res.url) {
          extractSessionFromLink(res.url);
        }
      }
    );

    return () => remove();
  }, []);

  async function signOut() {
    await supabase.auth.signOut();
    setAuthStatus("signed-out");
  }

  return (
    <AuthContext.Provider value={{ authStatus, signOut }}>
      {authStatus === "loading" ? <ActivityIndicator /> : children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return React.useContext(AuthContext);
}
