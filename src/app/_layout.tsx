import "@/global.css"
import * as Linking from "expo-linking"
import { Slot } from "expo-router"
import React, { useEffect } from "react"

import { createSessionFromUrl } from "@/app/(onboarding)/_layout"

export default function Layout() {
  useEffect(() => {
    const { remove } = Linking.addEventListener(
      "url",
      (res: { url: string }) => {
        if (res.url) {
          createSessionFromUrl(res.url)
        }
      },
    )

    return () => remove()
  }, [])

  return <Slot />
}
