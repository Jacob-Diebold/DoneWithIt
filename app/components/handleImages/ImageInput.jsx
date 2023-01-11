import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native"
import React, { useEffect } from "react"
import appStyles from "../../config/appStyles"
import Icon from "../Icon"
import * as ImagePicker from "expo-image-picker"

export default function ImageInput({ imageUri, onChangeImage }) {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if (!granted) alert("You need to enable permissions to access the library")
  }

  function handlePress() {
    if (!imageUri) selectImage()
    else
      Alert.alert("Delete", "Are you sure you want to delete this image?", [
        { text: "Yes", onPress: () => onChangeImage(null) },
        { text: "No" },
      ])
    async function selectImage() {
      try {
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          quality: 0.5,
        })
        if (!result.cancelled) {
          onChangeImage(result.uri)
        }
      } catch (error) {
        console.log("Error reading an Image")
      }
    }
  }

  useEffect(() => {
    requestPermission()
  }, [])

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <Icon
            icon="camera"
            iconColor={appStyles.colors.medium}
            circle={false}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    aspectRatio: 1,
    backgroundColor: appStyles.colors.background,
    borderRadius: 15,
    justifyContent: "center",
    width: 100,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
})
