import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native"
import React from "react"
import * as Notifications from "expo-notifications"
import useNotifications from "../hooks/useNotifications"
export default function LocalNotificationTest() {
  //   useNotifications()
  const showNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "You've got mail",
        body: "Here is the body",
        data: { data: "data goes here" },
      },
      trigger: { seconds: 2 },
    })
  }
  return (
    <SafeAreaView>
      <Button title="Tap me" onPress={showNotification}>
        LocalNotificationTest
      </Button>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})
