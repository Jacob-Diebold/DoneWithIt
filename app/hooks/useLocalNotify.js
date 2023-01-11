import * as Notifications from "expo-notifications"
const notify = async (title, body, timer, JSONdata) => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: title,
      body: body,
      data: { data: "data goes here" },
    },
    trigger: { seconds: timer },
  })
}
export default {
  notify,
}
