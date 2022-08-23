import { Ionicons } from "@expo/vector-icons";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useRef, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { RootStackParamList } from "../App";
import { classNames } from "../utils/classNames";

type Props = NativeStackScreenProps<RootStackParamList>["navigation"];

const countries = [
  "United Kingdom",
  "France",
  "United States",
  "China",
  "India",
  "Poland",
  "Albania",
];

export default function SelectCountryScreen() {
  const navigation = useNavigation<Props>();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [searchText, setSearchText] = useState("");

  return (
    <BottomSheetModalProvider>
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
              onPress={() => bottomSheetModalRef.current?.present()}
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
          <Pressable
            className={classNames(
              "h-12 w-full items-center justify-center rounded-xl",
              "bg-primary-500"
            )}
          >
            <Text className={classNames("text-[16px] font-bold", "text-white")}>
              Continue
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={["90%"]}
        handleComponent={null}
        style={{
          backgroundColor: "#F5F5F5",
          shadowColor: "rgb(168, 175, 182)",
          shadowRadius: 32,
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 1,
        }}
      >
        <View className="flex-1 items-center rounded-t-[10px]">
          <View className="h-[62px] w-full flex-row items-center space-x-2.5 border-b-[1px] border-[#AEAFAF] px-4 pt-4 pb-2">
            <View className="h-full flex-1 flex-row items-center rounded-[10px] bg-[#767680]/[.12] px-2">
              <TextInput
                className="flex-1 text-[17px]"
                placeholder="Search"
                placeholderTextColor="#808085"
                value={searchText}
                onChangeText={setSearchText}
              />
            </View>
            <Text
              className="text-[17px] text-[#134555]"
              onPress={() => bottomSheetModalRef.current?.close()}
            >
              Cancel
            </Text>
          </View>
          <View className="w-full flex-1 bg-[#F9FAFA] px-4">
            {countries
              .filter((c) => c.includes(searchText))
              .map((c) => (
                <Country country={c} key={c} />
              ))}
          </View>
        </View>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
}

function Country({ country }: { country: string }) {
  return (
    <View className="h-24 flex-row items-center space-x-4 border-b-[1px] border-neutral-200 px-4">
      <View className="h-[66px] w-[66px] rounded-3xl bg-blue-200" />
      <Text className="text-[16px] font-bold">{country}</Text>
    </View>
  );
}
