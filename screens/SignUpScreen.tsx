import { Ionicons } from "@expo/vector-icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as Linking from "expo-linking";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { z } from "zod";

import { RootStackParamList } from "../App";
import { supabase } from "../supabase";
import { classNames } from "../utils/classNames";

type Props = NativeStackScreenProps<RootStackParamList>["navigation"];

const schema = z.object({
  email: z.string().email(),
});

export default function SignUpScreen() {
  const navigation = useNavigation<Props>();
  const {
    control,
    handleSubmit,
    setFocus,
    formState: { isSubmitting, isValid },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  useEffect(() => {
    setFocus("email");
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white pt-1">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <View className="flex-1 pb-7">
          <View className="h-11 w-full justify-center">
            <Pressable
              className="absolute top-0 left-0 h-11 w-11 items-center justify-center"
              onPress={() => navigation.goBack()}
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
                  className="mt-6 h-14 w-full rounded-xl border-[1px] border-[#E7EAEB] px-3.5"
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
              <Text
                onPress={() => navigation.navigate("Login")}
                className="text-primary-400"
              >
                Log in here.
              </Text>
            </Text>
          </View>
          <View className="px-4">
            <Text className="mt-4 mb-7 w-full text-center text-[11px] text-black">
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
              className={classNames(
                "h-12 w-full flex-row items-center justify-center space-x-2 rounded-xl",
                isValid ? "bg-primary-500" : "bg-neutral-200"
              )}
              onPress={handleSubmit(async ({ email }) => {
                const redirectURL = Linking.createURL("");

                const { error } = await supabase.auth.signIn(
                  { email },
                  { redirectTo: redirectURL }
                );

                if (error) {
                  Alert.alert("An error occurred", error.message, [
                    { text: "OK" },
                  ]);
                  return;
                }

                navigation.navigate("ConfirmEmail", { email });
              })}
            >
              <Text
                className={classNames(
                  "text-[16px] font-bold",
                  isValid ? "text-white" : "text-neutral-400"
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
  );
}
