import { NavigationContainer } from "@react-navigation/native";

import AuthProvider, { useAuth } from "./features/auth/AuthContext";
import { LoginStack } from "./navigation/LoginStack";
import { MainStack } from "./navigation/MainStack";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </NavigationContainer>
  );
}

function Router() {
  const { authStatus } = useAuth();

  return authStatus === "signed-in" ? <MainStack /> : <LoginStack />;
}
