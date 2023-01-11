import { StyleSheet, Text, View } from "react-native"
import React from "react"
import colors from "../config/colors"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { TouchableOpacity } from "react-native-gesture-handler"
import { useNavigation } from "@react-navigation/native"

export default function NewListingButton({ onPress}) {
  const Navigation = useNavigation()

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          color={colors.white}
          size={40}
        />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderRadius: "50%",
    height: 80,
    aspectRatio: 1,
    bottom: 20,
    borderColor: "#fff",
    borderWidth: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowRadius: 5,
    shadowColor: colors.black,
    shadowOpacity: .4,
    shadowOffset: {width: 0, height: 5},
   
    
  },
})
