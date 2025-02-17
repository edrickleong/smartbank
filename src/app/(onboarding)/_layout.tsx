import * as QueryParams from "expo-auth-session/build/QueryParams"
import { router, Slot } from "expo-router"
import React, { useEffect, useState } from "react"
import { ActivityIndicator, Alert } from "react-native"

import { supabase } from "@/supabase"

export default function Layout() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const redirectIfUnauthenticated = async () => {
      const { data, error } = await supabase.auth.getSession()
      if (!error && data.session) {
        setIsLoading(false)
        return
      }

      router.replace("/welcome")
    }
    redirectIfUnauthenticated()
  }, [])

  if (isLoading) return <ActivityIndicator />

  return <Slot />
}

export const createSessionFromUrl = async (url: string) => {
  const { params } = QueryParams.getQueryParams(url)

  const { access_token, refresh_token, error, error_code, error_description } =
    params

  if (error && error_code && error_description) {
    Alert.alert("An error occurred", `${error_description}`, [{ text: "OK" }])
    return
  }

  if (!access_token) return

  const { data, error: setSessionError } = await supabase.auth.setSession({
    access_token,
    refresh_token,
  })
  if (error) throw setSessionError
  return data.session
}
