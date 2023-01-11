import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { AccountScreen, MessagesScreen } from "../screens"
const Stack = createNativeStackNavigator()

export default function AccountNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={AccountScreen} />
      <Stack.Screen name="Messages" component={MessagesScreen} />
    </Stack.Navigator>
  )
}
