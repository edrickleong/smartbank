import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { RootStackParamList } from "../App";
import { classNames } from "../utils/classNames";

type Props = NativeStackScreenProps<RootStackParamList>["navigation"];

export default function PhoneNumberScreen() {
  const navigation = useNavigation<Props>();
  const [mobileNumber, setMobileNumber] = useState("");

  return (
    <SafeAreaView className="flex-1 bg-[#F9FAFA] pt-1 pb-7">
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
          What phone number would you like to use?
        </Text>
        <Text className="mt-2 text-[13px] font-medium text-neutral-600">
          We will send you a verification code to this number.
        </Text>
        <View className="flex-1 flex-row space-x-1">
          <Pressable
            className="mt-4 h-14 flex-row items-center space-x-1 rounded-lg border-[1px] border-[#EAEAEA] bg-white px-3.5"
            style={{
              shadowColor: "rgb(168, 175, 182)",
              shadowRadius: 32,
              shadowOffset: { width: 0, height: 24 },
              shadowOpacity: 0.15,
            }}
          >
            <View className="flex-1 flex-col">
              <Text className="text-[12px] font-bold text-[#279185]">
                {"Country"}
              </Text>
              <Text className="mt-1 text-[13px] font-medium text-primary-800">
                {"+44"}
              </Text>
            </View>
            <Ionicons name="chevron-down" size={24} color="#2791B5" />
          </Pressable>
          <View
            className="mt-4 h-14 flex-1 flex-row items-center rounded-lg border-[1px] border-[#EAEAEA] bg-white px-3.5"
            style={{
              shadowColor: "rgb(168, 175, 182)",
              shadowRadius: 32,
              shadowOffset: { width: 0, height: 24 },
              shadowOpacity: 0.15,
            }}
          >
            <View className="flex-1 flex-col">
              <Text className="text-[12px] font-bold text-[#279185]">
                {"Mobile number"}
              </Text>
              <TextInput
                className="mt-1 text-[13px] font-medium text-primary-800"
                keyboardType={"number-pad"}
                dataDetectorTypes={"phoneNumber"}
                value={mobileNumber}
                onChangeText={setMobileNumber}
              ></TextInput>
            </View>
          </View>
        </View>
      </View>
      <View className="px-4">
        <Pressable
          className={classNames(
            "h-12 w-full items-center justify-center rounded-xl",
            "bg-primary-500"
          )}
          onPress={() => navigation.navigate("PhoneNumber")}
        >
          <Text className={"text-[16px] font-bold text-white"}>Continue</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
