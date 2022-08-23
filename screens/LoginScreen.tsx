import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { RootStackParamList } from "../App";
import { classNames } from "../utils/classNames";

type Props = NativeStackScreenProps<RootStackParamList>["navigation"];

export default function LoginScreen() {
  const navigation = useNavigation<Props>();
  const [email, setEmail] = useState<string>();

  const isDisabled = typeof email === "undefined" ? true : email.length === 0;

  return (
    <SafeAreaView className="flex-1 bg-white pt-1 pb-7">
      <View className="h-11 w-full justify-center">
        <Pressable
          className="absolute top-0 left-0 h-11 w-11 items-center justify-center"
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#2791B5" />
        </Pressable>
      </View>
      <View className="flex-1 px-4">
        <Text className="mt-1 text-[34px] font-bold text-[#0C212C]">Login</Text>
        <Text className="mt-2 text-[13px] font-medium text-neutral-600">
          Enter the email address you use to sign in to SmartBank.
        </Text>
        <TextInput
          className="mt-6 h-14 w-full rounded-xl border-[1px] border-[#E7EAEB] px-3.5"
          placeholder="Email address"
          placeholderTextColor="#2B6173"
          value={email}
          onChangeText={setEmail}
        />
        <Text className="mt-4 w-full text-center text-[13px] font-bold text-[#2B6173]">
          {"Don't have an account? "}
          <Text
            onPress={() => navigation.navigate("SignUp")}
            className="text-[#2791B5]"
          >
            Sign Up
          </Text>
        </Text>
      </View>
      <View className="px-4">
        <Text className="mt-4 mb-7 w-full text-center text-[11px] text-black">
          {"By registering, you accept our "}
          <Text className="font-bold text-[#2791B5]">Terms and Conditions</Text>
          {" and "}
          <Text className="font-bold text-[#2791B5] ">Privacy Policy</Text>.
          Your data will be securely encrypted with TLS.
        </Text>
        <Pressable
          disabled={isDisabled}
          className={classNames(
            "h-12 w-full items-center justify-center rounded-xl",
            isDisabled ? "bg-neutral-200" : "bg-[#2B6173]"
          )}
          onPress={() => navigation.navigate("ConfirmEmail")}
        >
          <Text
            className={classNames(
              "text-[16px] font-bold",
              isDisabled ? "text-neutral-400" : "text-white"
            )}
          >
            Continue
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
