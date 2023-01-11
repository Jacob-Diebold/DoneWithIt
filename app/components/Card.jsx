import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from "react-native"

import {Image} from "react-native-expo-image-cache"

import colors from "../config/colors"
export default function Card({imageUrl, thumbnailUrl, title, subTitle, onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress} style={styles.cardBack}>
      <View  style={styles.cardBack}>
        <Image style={styles.image} uri={imageUrl} tint="light" preview={{uri: thumbnailUrl}}/>
        <Text 
        numberOfLines={1}
        style={styles.title}>{title}</Text>
        <Text 
        numberOfLines={1}
        style={styles.subTitle}>{subTitle}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  testView: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  cardBack: {
    height:280,
    width: "94%",
    backgroundColor: colors.white,
    borderRadius:15,
    marginBottom: 30,
    overflow: "hidden",
    alignSelf:"center"
  },

  image: {
    width: "100%",
    height: 200,
    // borderTopLeftRadius:15,
    // borderTopRightRadius: 15,
  },
  title: {
    fontSize: 18,
    paddingTop: 20,
    paddingLeft: 20,
    fontWeight: "500",
    
  },
  subTitle: {
    paddingTop:8,
    paddingLeft: 20,
    fontSize: 16,
    fontWeight: "600",
    color: colors.secondary
},
})
