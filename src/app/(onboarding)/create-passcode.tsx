import { Ionicons } from "@expo/vector-icons"
import { router } from "expo-router"
import { useEffect, useState } from "react"
import { Pressable, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import PinInput from "@/components/PinInput"

export default function CreatePasscodeScreen() {
  const [passcode, setPasscode] = useState("")

  useEffect(() => {
    if (passcode.length === 6) {
      // TODO: Save passcode
      router.push("/confirm-passcode")
    }
  }, [passcode.length])

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
            Create passcode
          </Text>
          <Text className="mt-2 text-[13px] font-medium text-neutral-600">
            You’ll be able to log in to SmartBank using the following passcode.
          </Text>
          <View className="flex-1  pt-16">
            <PinInput code={passcode} setCode={setPasscode} />
          </View>
        </View>
      </SafeAreaView>
    </View>
  )
}
