import React from "react"
import { Image, SafeAreaView, StyleSheet, View } from "react-native"

import { MaterialCommunityIcons } from "@expo/vector-icons"

import colors from "../config/colors"
function ViewImageScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <MaterialCommunityIcons style={styles.close} name="close" size={40} color={"white"} />
      <MaterialCommunityIcons style={styles.delete} name="trash-can-outline" size={40} color={"white"} />
      {/* <Image source={require("../assets/chair.jpg")} style={styles.image} /> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.black,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  close: {
    width: 50,
    height: 50,
    position: "absolute",
    top: 40,
    left: 15,
  },
  delete: {
    width: 50,
    height: 50,
    position: "absolute",
    top: 40,
    right: 15,
  },
})

export default ViewImageScreen
