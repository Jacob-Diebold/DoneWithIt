import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native"
import Swipeable from "react-native-gesture-handler/Swipeable"
import React from "react"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import appStyles from "../../config/appStyles"
import colors from "../../config/colors"

export default function ListItem({
  image,
  title,
  subTitle,
  onPress,
  renderRightActions,
  backgroundColor,
  icon,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={[styles.container, { backgroundColor: backgroundColor }]}>
          <Image style={styles.image} source={image}></Image>
          <View style={styles.textContainer}>
            <Text numberOfLines={1} style={styles.title}>
              {title}
            </Text>
            <Text numberOfLines={1} style={styles.subTitle}>
              {subTitle}
            </Text>
          </View>
          <View style={styles.icon}>
            {icon && (
              <MaterialCommunityIcons
                name="chevron-right"
                size={25}
                color={appStyles.colors.medium}
              />
            )}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 10,
    padding: 12,
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 75,
  },
  textContainer: {
    // padding: 10,
    paddingLeft: 10,
    paddingTop: 10,
    // backgroundColor: "red",
    // width:"70%",
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
  },
  subTitle: {
    paddingTop: 6,
    fontSize: 14,
    color: "grey",
  },
  icon: {
    // backgroundColor:"blue",
    display: "flex",
    justifyContent: "center",
  },
})
