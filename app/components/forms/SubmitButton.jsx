import { StyleSheet, Text, View } from "react-native"
import React from "react"
import { useFormikContext } from "formik"

import AppButton from "../AppButton"
import appStyles from "../../config/appStyles"

export default function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext()
  return <View style={styles.container}>
  <AppButton color={appStyles.colors.primary} title={title} onPress={handleSubmit} />
  </View>
}

const styles = StyleSheet.create({
  container: {
   
    // backgroundColor: "red",
   
  }
})
