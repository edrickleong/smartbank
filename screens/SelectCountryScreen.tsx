import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { RootStackParamList } from "../App";

type Props = NativeStackScreenProps<RootStackParamList>["navigation"];

export default function SelectCountryScreen() {
  const navigation = useNavigation<Props>();

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
          What is your country of primary residence?
        </Text>
        <View className="flex-1">
          <Pressable
            className="mt-4 h-14 w-full flex-row items-center rounded-lg border-[1px] border-[#EAEAEA] bg-white px-3.5"
            style={{
              shadowColor: "rgb(168, 175, 182)",
              shadowRadius: 32,
              shadowOffset: { width: 0, height: 24 },
              shadowOpacity: 0.15,
            }}
            onPress={() => navigation.navigate("SelectCountry")}
          >
            <View className="flex-1 flex-col">
              <Text className="text-[12px] font-bold text-[#279185]">
                {"Country"}
              </Text>
              <Text className="mt-1 text-[16px] font-bold text-black">
                {"United Kingdom"}
              </Text>
            </View>
            <Ionicons name="chevron-down-circle" size={24} color="#2791B5" />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
