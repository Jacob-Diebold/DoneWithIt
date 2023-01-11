import React from "react"
import { View, StyleSheet, Text, TouchableOpacity } from "react-native"
import colors from "../config/colors"

function AppButton({ onPress, title, color }) {
  return (
    
      <TouchableOpacity onPress={onPress} style={[styles.container, {backgroundColor: color}]}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
      
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: 50,
    borderRadius: 25,
    marginVertical: 8,
    backgroundColor: colors.primary,
    // width: 400,
    marginHorizontal:"5%"
    
    
    
   
    
    
  },
  text: {
    color: colors.white,
    fontSize: 16,
    textTransform: "uppercase",
    fontWeight: "700",
  },
})

export default AppButton
