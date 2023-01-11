import { StyleSheet, Text, View } from "react-native"
import React from "react"

import AppText from "../AppText"
import appStyles from "../../config/appStyles"

export default function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null
  return <AppText style={styles.errorText}>{error}</AppText>
}

const styles = StyleSheet.create({
  errorText: {
    color: appStyles.colors.danger,
  },
})
