import React from "react"
import LottieView from "lottie-react-native"
import { View, StyleSheet } from "react-native"
import colors from "../config/colors"

export default function AppActivityIndicator({ visible = false }) {
  if (!visible) return null
  return (
    <View style={styles.overlay}>
      <LottieView
        autoPlay
        loop
        source={require("../assets/animations/loader.json")}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  overlay: {
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0,0,0,.6)",
    zIndex: 1,
    position: "absolute",
    // opacity: 0.2
  },
})
