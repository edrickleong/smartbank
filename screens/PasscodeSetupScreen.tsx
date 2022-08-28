import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { MainNavigationProps } from "../navigation/MainStack";
import { classNames } from "../utils/classNames";

export default function PasscodeSetupScreen() {
  const navigation = useNavigation<MainNavigationProps>();

  return (
    <LinearGradient
      colors={["#265565", "#288FB1", "#265565"]}
      className="flex-1"
    >
      <SafeAreaView className="flex-1 pt-1 pb-7">
        <View className="h-11 w-full justify-center">
          <Pressable
            className="absolute top-0 left-0 h-11 w-11 items-center justify-center"
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color="white" />
          </Pressable>
        </View>
        <View className="flex-1">
          <Image
            style={{ resizeMode: "contain" }}
            className="w-full flex-1"
            source={require("../assets/passcode_setup.png")}
          />
        </View>
        <View className="px-4">
          <Text className="mt-1 mb-9 text-center text-[34px] font-bold text-white">
            Your passcode has been set up
          </Text>
          <Pressable
            className={classNames(
              "mb-4 h-12 w-full items-center justify-center rounded-xl bg-[#E8F569]"
            )}
            onPress={() => {}}
          >
            <Text
              className={classNames("text-[16px] font-bold text-[#134555]")}
            >
              Continue
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
