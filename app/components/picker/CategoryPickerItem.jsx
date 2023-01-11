import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React from "react"
import AppText from "../AppText"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import Icon from "../Icon"

export default function CategoryPickerItem({
  item,
  color,
  icon,
  label,
  onPress,
}) {
  return (
    <View style={styles.container}>
    <TouchableOpacity onPress={onPress}>
      <Icon icon={item.icon} color={item.color} circleSize={80} iconSize={40} />
      <AppText style={styles.label} >{item.label}</AppText>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 5,
        paddingVertical: 15,
        alignItems: "center",
        flex:1, 
        // width: "33%"
    },
    label: {
        marginTop: 5,
        textAlign: "center"
    }
})
