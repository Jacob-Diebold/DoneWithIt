import React, { useEffect } from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { ListingEditScreen } from "../screens"
import FeedNavigator from "./FeedNavigator"
import AccountNavigator from "./AccountNavigator"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import NewListingButton from "./NewListingButton"
import routes from "./routes"
import navigation from "./rootNavigation"
import useNotifications from "../hooks/useNotifications"

const Tab = createBottomTabNavigator()

export default function AppNavigator() {
  useNotifications(() => navigation.navigate("Account"))
  
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ListingEdit"
        component={ListingEditScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewListingButton
              onPress={() => navigation.navigate(routes.LISTING_EDIT)}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
