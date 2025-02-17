import { Ionicons } from "@expo/vector-icons"
import { router } from "expo-router"
import { useState } from "react"
import { Pressable, Text, TextInput, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { cn } from "@/utils/cn"

export default function Page() {
  const [mobileNumber, setMobileNumber] = useState("")

  const isValid = mobileNumber.length !== 0

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
            What phone number would you like to use?
          </Text>
          <Text className="mt-2 text-[13px] font-medium text-neutral-600">
            We will send you a verification code to this number.
          </Text>
          <View className="pb-auto mt-4 flex-row gap-x-1">
            <View
              className="flex-col rounded-lg border-[1px] border-[#EAEAEA] bg-white px-3.5 py-2"
              style={{
                shadowColor: "rgb(168, 175, 182)",
                shadowRadius: 32,
                shadowOffset: { width: 0, height: 24 },
                shadowOpacity: 0.15,
              }}
            >
              <Text className="text-[12px] font-bold text-[#279185]">
                Country
              </Text>
              <View className="space-between mt-1 flex-row">
                <Text className="text-[16px] font-bold text-primary-800">
                  🇬🇧+44
                </Text>
              </View>
            </View>
            <View
              className="flex-1 flex-col rounded-lg border-[1px] border-[#EAEAEA] bg-white px-3.5 py-2"
              style={{
                shadowColor: "rgb(168, 175, 182)",
                shadowRadius: 32,
                shadowOffset: { width: 0, height: 24 },
                shadowOpacity: 0.15,
              }}
            >
              <Text className="text-[12px] font-bold text-[#279185]">
                Mobile number
              </Text>
              <TextInput
                className="mt-1 text-[16px] font-bold text-primary-800"
                keyboardType="number-pad"
                dataDetectorTypes="phoneNumber"
                value={mobileNumber}
                onChangeText={setMobileNumber}
              />
            </View>
          </View>
        </View>
        <View className="px-4">
          <Pressable
            disabled={!isValid}
            className={cn(
              "h-12 w-full items-center justify-center rounded-xl",
              isValid ? "bg-primary-500" : "bg-neutral-200",
            )}
            onPress={() => router.push("/enter-one-time-password")}
          >
            <Text className="text-[16px] font-bold text-white">Continue</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  )
}
