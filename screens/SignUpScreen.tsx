import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { RootStackParamList } from "../App";
import { classNames } from "../utils/classNames";

type Props = NativeStackScreenProps<RootStackParamList>["navigation"];

export default function SignUpScreen() {
  const navigation = useNavigation<Props>();
  const [email, setEmail] = useState<string>();

  const isDisabled = typeof email === "undefined" ? true : email.length === 0;

  return (
    <SafeAreaView className="flex-1 bg-white pt-1 pb-7">
      <View className="w-full h-11 justify-center">
        <Pressable
          className="absolute top-0 left-0 w-11 h-11 items-center justify-center"
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#2791B5" />
        </Pressable>
      </View>
      <View className="flex-1 px-4">
        <Text className="mt-1 text-[34px] font-bold text-[#0C212C]">
          What's your email?
        </Text>
        <Text className="mt-2 font-medium text-neutral-600 text-[13px]">
          Enter the email address you’d like to use to sign in to SmartBank.
        </Text>
        <TextInput
          className="w-full h-14 border-[1px] border-[#E7EAEB] mt-6 px-3.5 rounded-xl"
          placeholder="Email address"
          placeholderTextColor="#2B6173"
          value={email}
          onChangeText={setEmail}
        />
        <Text className="w-full text-center mt-4 font-bold text-[#2B6173] text-[13px]">
          {"Have an account? "}
          <Text
            onPress={() => navigation.navigate("Login")}
            className="text-[#2791B5]"
          >
            Log in here.
          </Text>
        </Text>
      </View>
      <View className="px-4">
        <Text className="w-full text-center mt-4 text-black text-[11px] mb-7">
          {"By registering, you accept our "}
          <Text className="text-[#2791B5] font-bold">Terms and Conditions</Text>
          {" and "}
          <Text className="text-[#2791B5] font-bold ">Privacy Policy</Text>.
          Your data will be securely encrypted with TLS.
        </Text>
        <Pressable
          disabled={isDisabled}
          className={classNames(
            "w-full items-center justify-center rounded-xl h-12",
            isDisabled ? "bg-neutral-200" : "bg-[#2B6173]"
          )}
        >
          <Text
            className={classNames(
              "font-bold text-[16px]",
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
