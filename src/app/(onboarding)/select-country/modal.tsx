import { router, useLocalSearchParams } from "expo-router"
import { useState } from "react"
import { FlatList, Pressable, Text, TextInput, View } from "react-native"

import { cn } from "@/utils/cn"

const countries = [
  "United Kingdom",
  "France",
  "United States",
  "China",
  "India",
  "Poland",
  "Albania",
]

export default function Modal({ params }) {
  const [searchText, setSearchText] = useState("")
  const { country: selectedCountry } = useLocalSearchParams()

  return (
    <View className="flex-1 items-center rounded-t-[10px]">
      <View className="h-[62px] w-full flex-row items-center gap-x-2.5 border-b-[1px] border-[#AEAFAF] px-4 pb-2 pt-4">
        <View className="h-full flex-1 flex-row items-center rounded-[10px] bg-[#767680]/[.12] px-2">
          <TextInput
            className="flex-1 text-[17px]"
            placeholder="Search"
            placeholderTextColor="#808085"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
        <Text
          className="text-[17px] text-[#134555]"
          onPress={() => router.back()}
        >
          Cancel
        </Text>
      </View>
      <View className="w-full flex-1 bg-neutral-50">
        <FlatList<string>
          style={{ paddingHorizontal: 16, paddingTop: 24 }}
          data={countries.filter((c) => c.includes(searchText))}
          renderItem={({ item: country }) => (
            <Country
              key={country}
              country={country}
              isSelected={country === selectedCountry}
              onSelect={() => {
                router.replace({
                  pathname: "/select-country",
                  params: { country },
                })
              }}
            />
          )}
        />
      </View>
    </View>
  )
}

function Country({
  country,
  isSelected,
  onSelect,
}: {
  country: string
  isSelected: boolean
  onSelect: () => void
}) {
  return (
    <Pressable
      className={cn(
        "h-24 flex-row items-center gap-x-4 border-[1px] px-4",
        isSelected
          ? "rounded-lg border-primary-400 bg-white"
          : "border-transparent border-b-neutral-200 ",
      )}
      style={
        isSelected && {
          shadowColor: "rgb(185, 185, 185)",
          shadowRadius: 40,
          shadowOffset: { width: 0, height: 20 },
          shadowOpacity: 0.25,
        }
      }
      onPress={onSelect}
    >
      <View className="h-[66px] w-[66px] rounded-3xl bg-blue-200" />
      <Text className="text-[16px] font-bold">{country}</Text>
    </Pressable>
  )
}
