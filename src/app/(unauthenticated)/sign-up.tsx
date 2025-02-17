import { Ionicons } from "@expo/vector-icons"
import { zodResolver } from "@hookform/resolvers/zod"
import { makeRedirectUri } from "expo-auth-session"
import { Link, router } from "expo-router"
import { Controller, useForm } from "react-hook-form"
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { z } from "zod"

import { supabase } from "@/supabase"
import { cn } from "@/utils/cn"

const schema = z.object({
  email: z.string().email(),
})

export default function Page() {
  const {
    control,
    handleSubmit,
    setFocus,
    formState: { isSubmitting, isValid },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    mode: "onChange",
  })

  const signUp = handleSubmit(async ({ email }) => {
    const redirectURL = makeRedirectUri({})

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: redirectURL,
      },
    })

    if (error) {
      Alert.alert("An error occurred", error.message, [{ text: "OK" }])
      return
    }

    router.push({ pathname: "/confirm-email", params: { email } })
  })
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View className="flex-1 pb-7 pt-1">
          <View className="h-11 w-full justify-center">
            <Pressable
              className="absolute left-0 top-0 h-11 w-11 items-center justify-center"
              onPress={() => router.back()}
            >
              <Ionicons name="arrow-back" size={24} color="#2791B5" />
            </Pressable>
          </View>
          <View className="flex-1 px-4">
            <Text className="mt-1 text-[34px] font-bold text-[#0C212C]">
              What's your email?
            </Text>
            <Text className="mt-2 text-[13px] font-medium text-neutral-600">
              Enter the email address you’d like to use to sign in to SmartBank.
            </Text>
            <Controller
              control={control}
              name="email"
              rules={{ required: true }}
              render={({ field: { onChange, value, ref } }) => (
                <TextInput
                  autoFocus
                  className="mt-6 h-14 w-full rounded-xl border-[1px] border-[#E7EAEB] px-3.5"
                  textContentType="emailAddress"
                  keyboardType="email-address"
                  placeholder="Email address"
                  placeholderTextColor="#2B6173"
                  editable={!isSubmitting}
                  value={value}
                  onChangeText={onChange}
                  ref={ref}
                />
              )}
            />
            <Text className="mt-4 w-full text-center text-[13px] font-bold text-primary-500">
              {"Have an account? "}
              <Link href="/login" className="text-primary-400">
                Log in here.
              </Link>
            </Text>
          </View>
          <View className="px-4">
            <Text className="mb-7 mt-4 w-full text-center text-[11px] text-black">
              {"By registering, you accept our "}
              <Text className="font-bold text-primary-400">
                Terms and Conditions
              </Text>
              {" and "}
              <Text className="font-bold text-primary-400 ">
                Privacy Policy
              </Text>
              . Your data will be securely encrypted with TLS.
            </Text>
            <Pressable
              disabled={isSubmitting}
              className={cn(
                "h-12 w-full flex-row items-center justify-center gap-x-2 rounded-xl",
                isValid ? "bg-primary-500" : "bg-neutral-200",
              )}
              onPress={signUp}
            >
              <Text
                className={cn(
                  "text-[16px] font-bold",
                  isValid ? "text-white" : "text-neutral-400",
                )}
              >
                Continue
              </Text>
              {isSubmitting && <ActivityIndicator />}
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}
