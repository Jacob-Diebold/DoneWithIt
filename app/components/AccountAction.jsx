import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import React from "react"
import { MaterialCommunityIcons } from "@expo/vector-icons"

import colors from "../config/colors"

export default function AccountAction({ title, icon, color, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={[styles.circle, { backgroundColor: color }]}>
          <MaterialCommunityIcons
            name={icon}
            style={styles.icon}
            size={20}
            color={colors.white}
          />
        </View>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 75,
    backgroundColor: colors.white,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    height: 40,
    width: 40,
    marginLeft: 10,
    borderRadius: 75,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
    marginLeft: 15,
  },
})
