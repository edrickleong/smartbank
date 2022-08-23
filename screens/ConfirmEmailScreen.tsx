import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import { Image, Linking, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { RootStackParamList } from "../App";
import { classNames } from "../utils/classNames";

type RouteProps = NativeStackScreenProps<
  RootStackParamList,
  "ConfirmEmail"
>["route"];

type Props = NativeStackScreenProps<RootStackParamList>["navigation"];

export default function ConfirmEmailScreen() {
  const {
    params: { email },
  } = useRoute<RouteProps>();
  const navigation = useNavigation<Props>();

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
            style={{ resizeMode: "cover" }}
            className="w-full flex-1"
            source={require("../assets/planes.png")}
          />
        </View>
        <View className="px-4">
          <Text className="mt-1 text-center text-[34px] font-bold text-white">
            Confirm your email
          </Text>
          <Text className="mt-2 mb-8 text-center text-[13px] font-medium text-neutral-300">
            {`We just sent you an email to ${email}`}
          </Text>
          <Pressable
            className={classNames(
              "mb-4 h-12 w-full items-center justify-center rounded-xl bg-[#E8F569]"
            )}
            // TODO: Replace with universal solution. https://github.com/includable/react-native-email-link
            onPress={() => Linking.openURL("googlegmail://")}
          >
            <Text
              className={classNames("text-[16px] font-bold text-[#134555]")}
            >
              Open email app
            </Text>
          </Pressable>
          <Pressable
            className={classNames(
              "h-12 w-full items-center justify-center rounded-xl bg-primary-600"
            )}
          >
            <Text className={classNames("text-[16px] font-bold text-white")}>
              I didn't receive my email
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
