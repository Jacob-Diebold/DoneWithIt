import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import React from "react"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import colors from "../../config/colors"

export default function ListItemDeleteAction({ onPress }) {
  return (
    
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          style={styles.icon}
          name="trash-can-outline"
          size={45}
          color={colors.white}
        />
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 80,
    height: "100%",
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {},
})
