import { BOTTOM_BAR_HEIGHT } from "@/constants/theme"; // Must be defined
import { Tabs } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Analytics, Chats, History, Home, Payments } from "../../assets/svg";

export default function TabLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#FF6C00",
        tabBarInactiveTintColor: "#FFFFFF",
        tabBarLabelStyle: { fontSize: 11, fontWeight: "600" },
        tabBarStyle: {
          backgroundColor: "#060503",
          borderTopWidth: 0,
          height: (BOTTOM_BAR_HEIGHT ?? 60) + insets.bottom, // Default 60 if undefined
          paddingBottom: insets.bottom,
        },
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Home color={color} width={19} height={19} />
          ),
        }}
      />
      <Tabs.Screen
        name="payments"
        options={{
          title: "Payments",
          tabBarIcon: ({ color }) => (
            <Payments color={color} width={19} height={19} />
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          tabBarIcon: ({ color }) => (
            <History color={color} width={19} height={19} />
          ),
        }}
      />
      <Tabs.Screen
        name="analytics"
        options={{
          title: "Analytics",
          tabBarIcon: ({ color }) => (
            <Analytics color={color} width={19} height={19} />
          ),
        }}
      />
      <Tabs.Screen
        name="chats"
        options={{
          title: "Chats",
          tabBarIcon: ({ color }) => (
            <Chats color={color} width={19} height={19} />
          ),
        }}
      />
    </Tabs>
  );
}
