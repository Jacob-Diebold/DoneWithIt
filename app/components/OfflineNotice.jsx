import { StyleSheet, Text, View, } from "react-native"
import React, { useRef, useState } from "react"
import colors from "../config/colors"
import AppText from "./AppText"
import isOnline from "../hooks/isOnline"
import Animated, { Easing, useAnimatedStyle, useSharedValue, withRepeat, withTiming} from "react-native-reanimated"

export default function OfflineNotice() {
    const sharedValue = useSharedValue(.25)
    const animatedStyles = useAnimatedStyle(() => {
        return {
            opacity: sharedValue.value
        }
    })

    sharedValue.value = withRepeat(withTiming(1, {duration: 1500}),-1,true)
    
  return (
    <>
      {!isOnline() && (
        <View style={styles.container}>
        <Animated.View style={animatedStyles}>
          <AppText style={styles.text}>
            No Internet Connection
          </AppText>
          </Animated.View>
        </View>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    width: "100%",
    paddingTop: 30,
    // position: "absolute",
    zIndex: 1,
  },
  text: {
    color: colors.white,
  },
})
