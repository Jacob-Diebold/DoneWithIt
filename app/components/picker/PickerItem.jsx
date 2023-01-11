import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React from "react"
import AppText from "../AppText"
import { MaterialCommunityIcons } from "@expo/vector-icons"


export default function PickerItem({ item, label, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <AppText style={styles.text} >{item.label}</AppText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    text: {
        padding:15,   
    }
})

