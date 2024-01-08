import { Ionicons } from "@expo/vector-icons"
import { LinearGradient } from "expo-linear-gradient"
import { router } from "expo-router"
import { Image, Pressable, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { cn } from "@/utils/cn"

export default function Page() {
  return (
    <LinearGradient
      colors={["#265565", "#288FB1", "#265565"]}
      style={{ flex: 1 }}
    >
      <View className="flex-1 pb-7 pt-1">
        <SafeAreaView style={{ flex: 1 }}>
          <View className="h-11 w-full justify-center">
            <Pressable
              className="absolute left-0 top-0 h-11 w-11 items-center justify-center"
              onPress={() => router.back()}
            >
              <Ionicons name="arrow-back" size={24} color="white" />
            </Pressable>
          </View>
          <View className="flex-1">
            <Image
              style={{ resizeMode: "contain" }}
              className="w-full flex-1"
              source={require("@/assets/passcode_setup.png")}
            />
          </View>
          <View className="px-4">
            <Text className="mb-9 mt-1 text-center text-[34px] font-bold text-white">
              Your passcode has been set up
            </Text>
            <Pressable
              className={cn(
                "mb-4 h-12 w-full items-center justify-center rounded-xl bg-[#E8F569]",
              )}
              onPress={() => {}}
            >
              <Text className={cn("text-[16px] font-bold text-[#134555]")}>
                Continue
              </Text>
            </Pressable>
          </View>
        </SafeAreaView>
      </View>
    </LinearGradient>
  )
}
