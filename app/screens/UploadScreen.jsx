import { Modal, StyleSheet, Text, View } from "react-native"
import React from "react"
import AppText from "../components/AppText"
import * as Progress from "react-native-progress"
import colors from "../config/colors"
import AnimatedLottieView from "lottie-react-native"

export default function UploadScreen({ onDone, progress = 0, visible = false }) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            color={colors.primary}
            progress={progress}
            borderRadius={20}
            height={15}
            width={300}
          />
        ) : (
          <AnimatedLottieView
            autoPlay
            loop={false}
            style={styles.animation}
            source={require("../assets/animations/done.json")}
            onAnimationFinish={onDone}
          />
        )}
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  animation: {
    width: 150,
  }
})
