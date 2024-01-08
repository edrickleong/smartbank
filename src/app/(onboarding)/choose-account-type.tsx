import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { router } from "expo-router"
import { Image, ImageSourcePropType, Pressable, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function Page() {
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
            What kind of account would you like to open?
          </Text>
          <Text className="mt-2 text-[13px] font-medium text-neutral-600">
            You will be able to add new accounts later on.
          </Text>
          <View className="flex-1">
            <AccountCard
              image={require("@/assets/personal_account.png")}
              title="Personal Account"
              description="Send, spend, receive and exchange your money freely."
            />
            <AccountCard
              image={require("@/assets/business_account.png")}
              title="Business Account"
              description="Collect invoices, do freelance or business work internationally"
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  )
}

type AccountCardProps = {
  image: ImageSourcePropType
  title: string
  description: string
}

function AccountCard({ image, title, description }: AccountCardProps) {
  return (
    <Pressable
      className="mt-4 h-24 w-full flex-row items-center gap-x-2.5 rounded-lg border-[1px] border-[#EAEAEA] bg-white px-2"
      style={{
        shadowColor: "rgb(168, 175, 182)",
        shadowRadius: 32,
        shadowOffset: { width: 0, height: 24 },
        shadowOpacity: 0.15,
      }}
      onPress={() => router.push("select-country")}
    >
      <Image className="w-14" resizeMode="contain" source={image} />
      <View className="flex-1 flex-col">
        <Text className="text-[16px] font-semibold text-[#0C212C]">
          {title}
        </Text>
        <Text className="mt-1 text-[13px] font-medium text-neutral-600">
          {description}
        </Text>
      </View>
      <Ionicons name="chevron-forward" size={24} color="#2791B5" />
    </Pressable>
  )
}
