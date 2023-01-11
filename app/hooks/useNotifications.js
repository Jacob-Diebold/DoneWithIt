import * as Notifications from "expo-notifications"
import { useEffect } from "react"
import pushToken from "../api/pushToken"
//Add an optional callback for what to do when the notification is clicked
export default useNotifications = async (notificationListener) => {
  useEffect(() => {
    // This is extra code to add a listener to show notifications when the app is open
    Notifications.setNotificationHandler({
      handleNotification: async (notification) => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
      }),
    })

    if (notificationListener)
      Notifications.addNotificationResponseReceivedListener(
        notificationListener
      )

    const registerForPushNotifications = async () => {
      try {
        const { granted } = await Notifications.requestPermissionsAsync()
        if (!granted) return
        const { data } = await Notifications.getExpoPushTokenAsync()
        pushToken.register(data)
        console.log(data)
      } catch (error) {
        console.log("Error getting a push token", error)
      }
    }

    registerForPushNotifications()
  }, [])
}
