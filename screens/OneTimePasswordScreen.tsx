import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { RootStackParamList } from "../App";
import OTPInput from "../components/OTPInput";
import { classNames } from "../utils/classNames";

type Props = NativeStackScreenProps<RootStackParamList>["navigation"];

export default function OneTimePasswordScreen() {
  const navigation = useNavigation<Props>();
  const [oneTimePassword, setOneTimePassword] = useState("");

  const isValid = oneTimePassword.length === 6;

  return (
    <SafeAreaView className="flex-1 bg-neutral-50 pt-1 pb-7">
      <View className="h-11 w-full justify-center">
        <Pressable
          className="absolute top-0 left-0 h-11 w-11 items-center justify-center"
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#2791B5" />
        </Pressable>
      </View>
      <View className="flex-1 px-4">
        <Text className="mt-1 text-[28px] font-bold text-[#132F38]">
          Verify your phone number
        </Text>
        <Text className="mt-2 text-[13px] font-medium text-neutral-600">
          Please enter the code we sent to +4472323121
        </Text>
        <View className="flex-1 pt-6">
          <OTPInput code={oneTimePassword} setCode={setOneTimePassword} />
        </View>
      </View>
      <View className="px-4">
        <Pressable
          disabled={!isValid}
          className={classNames(
            "h-12 w-full items-center justify-center rounded-xl",
            isValid ? "bg-primary-500" : "bg-neutral-200"
          )}
          onPress={() => navigation.navigate("PhoneVerified")}
        >
          <Text className="text-[16px] font-bold text-white">Continue</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
