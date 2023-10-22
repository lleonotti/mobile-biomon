import FontAwesome from "@expo/vector-icons/FontAwesome"
import { Link, Tabs } from "expo-router"
import { Pressable, useColorScheme } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { AntDesign } from "@expo/vector-icons"

import Colors from "../../constants/Colors"
import { COLORS } from "../../constants/Theme"

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"]
  color: string
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />
}

export default function TabLayout() {
  const colorScheme = useColorScheme()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLORS.mainGreen,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
          headerTitleAlign: "center",
          tabBarIcon: () => (
            <MaterialIcons
              name="dashboard"
              size={24}
              color={COLORS.mainGreen}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Import"
        options={{
          title: "Importar",
          headerTitleAlign: "center",
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="file-upload-outline"
              size={24}
              color={COLORS.mainGreen}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Desempenho"
        options={{
          title: "Desempenho",
          headerTitleAlign: "center",
          tabBarIcon: () => (
            <AntDesign name="linechart" size={24} color={COLORS.mainGreen} />
          ),
        }}
      />
    </Tabs>
  )
}
