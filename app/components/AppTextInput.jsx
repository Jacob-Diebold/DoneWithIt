import { View, Text, TextInput, StyleSheet } from "react-native"
import React from "react"
import { MaterialCommunityIcons } from "@expo/vector-icons"

import appStyles from "../config/appStyles"


export default function AppTextInput({ giveStyle, icon, ...otherProps }) {
  return (
    <View style={[styles.container, giveStyle]}>
      {icon && <MaterialCommunityIcons name={icon} style={styles.icon} />}
      <TextInput placeholderTextColor={appStyles.colors.medium} style={[appStyles.text, styles.clickable]} {...otherProps} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: appStyles.colors.light,
    borderRadius: 100,
    flexDirection: "row",
    padding: 10,
    paddingHorizontal:15,
    marginVertical: 10,
    alignContent: "center",
    justifyContent: "center",
    height:60
  },
  icon: {
    margin: 10,
    color: appStyles.colors.medium,
    fontSize: 20,
  },
  clickable: {
    flex: 1,
    
  },
})
