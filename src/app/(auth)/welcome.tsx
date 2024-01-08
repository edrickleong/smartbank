import { Link } from "expo-router"
import { Image, Pressable, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function Page() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className="flex-1 px-4 py-7">
        <View className="flex-1">
          <Text className="text-[13px] font-medium text-neutral-600">
            Welcome to SmartBank
          </Text>
          <Text className="mt-1.5 text-[34px] font-bold text-[#0C212C]">
            Managing your money has never been so easy
          </Text>
          <Image
            source={require("@/assets/making-your-money.png")}
            className="mt-10 w-full flex-1"
            resizeMode="contain"
          />
        </View>
        <View>
          <Link href="/sign-up" asChild>
            <Pressable className="h-12 w-full items-center justify-center rounded-xl bg-primary-500">
              <Text className="text-[16px] font-semibold text-white">
                Sign up
              </Text>
            </Pressable>
          </Link>
          <Link href="/login" asChild>
            <Pressable className="mt-4 h-12 w-full items-center justify-center rounded-xl bg-neutral-200">
              <Text className="text-[16px] font-semibold text-primary-500">
                Log in
              </Text>
            </Pressable>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  )
}
