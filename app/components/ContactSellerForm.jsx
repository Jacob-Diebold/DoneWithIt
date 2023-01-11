import { Alert, Keyboard, StyleSheet, Text, View } from "react-native"
import React from "react"
import AppTextInput from "./AppTextInput"
import { AppForm, AppFormField, SubmitButton } from "./forms"

import * as Yup from "yup"
import messages from "../api/messages"
import useLocalNotify from "../hooks/useLocalNotify"

const validationSchema = Yup.object().shape({
  message: Yup.string().required().min(2).max(200).label("Message"),
})

export default function ContactSellerForm({ listing }) {
  const handleSubmit = async (message, {resetForm}) => {
    Keyboard.dismiss()
    const response = await messages.send(message.message, listing.id)

    // console.log(response)
    // console.log(response.ok)
    if (!response.ok) {
      console.log("Error:", response)
      return Alert.alert(
        "Something went wrong",
        "We couldn't send message. Please try again later."
      )
    }
    useLocalNotify.notify("Success!", "Your message was sent", 2, { data: "Hello" })
    resetForm()
    // console.log(listing.id)
  }

  return (
    <View style={styles.container}>
      {/* <AppTextInput placeholder="Message..." /> */}
      <AppForm
        initialValues={{ message: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <View style={styles.input}>
          <AppFormField name={"message"} placeholder="Message..." />
        </View>
        <View style={styles.submit}>
          <SubmitButton title="Contact Seller" />
        </View>
      </AppForm>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // marginHorizontal:10
  },
  input: {
    paddingHorizontal: 10,
  },
  submit: {
    width: "105%",
    justifyContent: "center",
    alignSelf: "center",
  },
})
