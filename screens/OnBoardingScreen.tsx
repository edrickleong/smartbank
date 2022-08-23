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
        <Text className="font-medium text-[#808C91] text-[13px]">
          Welcome to SmartBank
        </Text>
        <Text className="mt-1.5 text-[34px] font-bold text-[#0C212C]">
          Managing your money has never been so easy
        </Text>
        <Image
          className="mt-10 w-full"
          source={require("../assets/making-your-money.png")}
        />
      </View>
      <View>
        <Pressable className="w-full bg-[#2B6173] h-12 items-center justify-center rounded-xl">
          <Text className="font-semibold text-[16px] text-white">Sign up</Text>
        </Pressable>
        <Pressable className="mt-4 w-full bg-[#E7EAEB] h-12 items-center justify-center rounded-xl">
          <Text className="font-semibold text-[16px] text-[#2B6173]">
            Log in
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
