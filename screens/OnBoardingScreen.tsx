import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { RootStackParamList } from "../App";

type Props = NativeStackScreenProps<RootStackParamList>["navigation"];

export default function OnBoardingScreen() {
  const navigation = useNavigation<Props>();

  return (
    <SafeAreaView className="flex-1 bg-white py-7 px-4">
      <View className="flex-1">
        <Text className="text-[13px] font-medium text-neutral-600">
          Welcome to SmartBank
        </Text>
        <Text className="mt-1.5 text-[34px] font-bold text-[#0C212C]">
          Managing your money has never been so easy
        </Text>
        <Image
          source={require("../assets/making-your-money.png")}
          className="mt-10 w-full flex-1"
          style={{ resizeMode: "contain" }}
        />
      </View>
      <View>
        <Pressable
          className="h-12 w-full items-center justify-center rounded-xl bg-[#2B6173]"
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text className="text-[16px] font-semibold text-white">Sign up</Text>
        </Pressable>
        <Pressable
          className="mt-4 h-12 w-full items-center justify-center rounded-xl bg-neutral-200"
          onPress={() => navigation.navigate("Login")}
        >
          <Text className="text-[16px] font-semibold text-[#2B6173]">
            Log in
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
