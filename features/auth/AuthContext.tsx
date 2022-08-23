import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as Linking from "expo-linking";
import React from "react";
import { ActivityIndicator } from "react-native";

import { RootStackParamList } from "../../App";
import { supabase } from "../../supabase";

type AuthStatus = "SIGNED_IN" | "SIGNED_OUT" | "LOADING";

type Props = NativeStackScreenProps<RootStackParamList>["navigation"];

interface AuthContextValue {
  authStatus: AuthStatus;
  loginError: boolean;
  signOut: () => void;
}

const AuthContext = React.createContext<AuthContextValue>({
  loginError: false,
  authStatus: "SIGNED_OUT",
  signOut: () => {},
});

interface AuthProviderProps {
  children: React.ReactElement | React.ReactElement[];
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const [authStatus, setAuthStatus] = React.useState<AuthStatus>("SIGNED_OUT");
  const [loginError, setLoginError] = React.useState(false);
  const navigation = useNavigation<Props>();

  async function extractSessionFromLink(link: string) {
    const parsedURL = Linking.parse(link.replace("#", "?")!);

    if (parsedURL.queryParams.refresh_token) {
      await supabase.auth.signIn({
        refreshToken: parsedURL.queryParams.refresh_token as string,
      });

      navigation.navigate("Welcome");
      setLoginError(false);
    } else if (parsedURL.queryParams.error_code) {
      setLoginError(true);
    }
  }

  React.useEffect(() => {
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

  function signOut() {
    supabase.auth.signOut();
  }

  return (
    <AuthContext.Provider value={{ authStatus, signOut, loginError }}>
      {authStatus === "LOADING" ? <ActivityIndicator /> : children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return React.useContext(AuthContext);
}
