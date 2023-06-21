import { Tabs } from "expo-router";
import { Entypo } from "@expo/vector-icons";
import { Text } from "react-native";

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "index",
};

export default function homeLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: "#000",
        },
        // headerShadowVisible: false,
        headerTitleStyle: {
          color: "white",
        },
        tabBarStyle: {
          backgroundColor: "#000",
          // borderTopWidth: 0
        },
        tabBarInactiveTintColor: "grey",
        tabBarActiveTintColor: "white",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Entypo name="code" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="second_page"
        options={{
          title: "Second_page",
          tabBarIcon: ({ color }) => (
            <Entypo name="code" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
