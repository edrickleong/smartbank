import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthProvider, { useAuth } from "./features/auth/AuthContext";
import ChooseAccountTypeScreen from "./screens/ChooseAccountTypeScreen";
import ConfirmEmailScreen from "./screens/ConfirmEmailScreen";
import LoginScreen from "./screens/LoginScreen";
import OnBoardingScreen from "./screens/OnBoardingScreen";
import PhoneNumberScreen from "./screens/PhoneNumberScreen";
import SelectCountryScreen from "./screens/SelectCountryScreen";
import SignUpScreen from "./screens/SignUpScreen";
import WelcomeScreen from "./screens/WelcomeScreen";

export type RootStackParamList = {
  OnBoarding: undefined;
  Login: undefined;
  SignUp: undefined;
  ConfirmEmail: { email: string };
  Welcome: undefined;
  ChooseAccountType: undefined;
  SelectCountry: undefined;
  PhoneNumber: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

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

  return authStatus === "signed-in" ? <AppStack /> : <AuthStack />;
}

function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="OnBoarding"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
    </Stack.Navigator>
  );
}

function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen
        name="ChooseAccountType"
        component={ChooseAccountTypeScreen}
      />
      <Stack.Screen name="SelectCountry" component={SelectCountryScreen} />
      <Stack.Screen name="PhoneNumber" component={PhoneNumberScreen} />
    </Stack.Navigator>
  );
}
