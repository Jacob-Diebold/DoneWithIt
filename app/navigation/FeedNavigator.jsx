import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { ListingsScreen, ListingDetailsScreen } from '../screens';
import routes from './routes';
const Stack = createNativeStackNavigator()

export default function FeedNavigator() {
    return (
        <Stack.Navigator screenOptions={{presentation: "modal" }} >
        <Stack.Screen name="ListingsScreen" component={ListingsScreen} options={{headerShown: false}} />
        <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} options={{headerShown: false}} />
        </Stack.Navigator>
    )
} 