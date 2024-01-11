import { Ionicons } from "@expo/vector-icons"
import { LinearGradient } from "expo-linear-gradient"
import { Link, router } from "expo-router"
import { Alert, Image, Pressable, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { supabase } from "@/supabase"

export default function Page() {
  function onLogout() {
    return () => {
      Alert.alert("Log out", "You will be returned to the login screen", [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: async () => {
            await supabase.auth.signOut()
            router.replace("/welcome")
          },
        },
      ])
    }
  }

  return (
    <LinearGradient
      colors={["#265565", "#288FB1", "#265565"]}
      style={{ flex: 1 }}
      className="flex-1"
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View className="h-11 w-full justify-center pb-7 pt-1">
          <Pressable
            className="absolute left-0 top-0 h-11 w-11 items-center justify-center"
            onPress={onLogout()}
          >
            <Ionicons name="arrow-back" size={24} color="white" />
          </Pressable>
        </View>
        <View className="flex-1">
          <Image
            style={{ resizeMode: "contain" }}
            className="w-full flex-1"
            source={require("@/assets/welcome-to-smartbank.png")}
          />
        </View>
        <View className="px-4">
          <Text className="mt-1 text-center text-[34px] font-bold text-white">
            Welcome to SmartBank
          </Text>
          <Text className="mb-8 mt-2 text-center text-[13px] font-medium text-neutral-300">
            Spend, save and manage your money in one place. Your money is safe
            with us.
          </Text>
          <Link href="/choose-account-type" asChild>
            <Pressable className="mb-4 h-12 w-full items-center justify-center rounded-xl bg-[#E8F569]">
              <Text className="text-[16px] font-bold text-[#134555]">
                Continue
              </Text>
            </Pressable>
          </Link>
        </View>
      </SafeAreaView>
    </LinearGradient>
  )
}
