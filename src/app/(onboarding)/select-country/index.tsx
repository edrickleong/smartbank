import { Ionicons } from "@expo/vector-icons"
import { router, useLocalSearchParams } from "expo-router"
import { Pressable, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { cn } from "@/utils/cn"

const countries = [
  "United Kingdom",
  "France",
  "United States",
  "China",
  "India",
  "Poland",
  "Albania",
]

export default function Page() {
  const { country } = useLocalSearchParams()
  const selectedCountry = country ?? countries[0]

  return (
    <View className="flex-1 bg-neutral-50 pb-7 pt-1">
      <SafeAreaView style={{ flex: 1 }}>
        <View className="h-11 w-full justify-center">
          <Pressable
            className="absolute left-0 top-0 h-11 w-11 items-center justify-center"
            onPress={() => router.back()}
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
              onPress={() =>
                router.push({
                  pathname: "/select-country/modal",
                  params: { country: selectedCountry },
                })
              }
            >
              <View className="flex-1 flex-col">
                <Text className="text-[12px] font-bold text-[#279185]">
                  Country
                </Text>
                <Text className="mt-1 text-[16px] font-bold text-black">
                  {selectedCountry}
                </Text>
              </View>
              <Ionicons name="chevron-down-circle" size={24} color="#2791B5" />
            </Pressable>
          </View>
          <Pressable
            className={cn(
              "h-12 w-full items-center justify-center rounded-xl",
              "bg-primary-500",
            )}
            onPress={() => router.push("/enter-phone-number")}
          >
            <Text className="text-[16px] font-bold text-white">Continue</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  )
}
