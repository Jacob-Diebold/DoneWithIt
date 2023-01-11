import { StyleSheet, Text, View } from "react-native"
import React from "react"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import appStyles from "../config/appStyles"

export default function Icon({
  icon,
  color,
  iconSize = 40,
  circleSize = 80,
  circle = true,
  iconColor = appStyles.colors.white
}) {
  return circle ? (
    <View
      style={[styles.circle, { backgroundColor: color, height: circleSize }]}
    >
      <MaterialCommunityIcons
        name={icon}
        // style={{fontSize:"40"}}
        size={iconSize}
        color={iconColor}
      />
    </View>
  ) : (
    <View >
      <MaterialCommunityIcons
        name={icon}
        // style={{fontSize:"40"}}
        size={iconSize}
        color={iconColor}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  circle: {
    height: 40,
    aspectRatio: 1,
    marginLeft: 10,
    borderRadius: 75,
    justifyContent: "center",
    alignItems: "center",
  },
})
