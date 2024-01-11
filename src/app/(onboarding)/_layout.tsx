import * as QueryParams from "expo-auth-session/build/QueryParams"
import * as Linking from "expo-linking"
import { router, Slot } from "expo-router"
import React, { useEffect, useState } from "react"
import { ActivityIndicator } from "react-native"

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

      const url = await Linking.getInitialURL()
      if (url) {
        try {
          const session = await createSessionFromUrl(url)
          if (session) {
            setIsLoading(false)
            return
          }
        } catch (e) {
          console.error(e)
        }
      }

      router.replace("/welcome")
      setIsLoading(false)
    }
    redirectIfUnauthenticated()
  }, [])

  if (isLoading) return <ActivityIndicator />

  return <Slot />
}

export const createSessionFromUrl = async (url: string) => {
  const { params, errorCode } = QueryParams.getQueryParams(url)
  if (errorCode) throw new Error(errorCode)
  const { access_token, refresh_token } = params

  if (!access_token) return

  const { data, error } = await supabase.auth.setSession({
    access_token,
    refresh_token,
  })
  if (error) throw error
  return data.session
}
