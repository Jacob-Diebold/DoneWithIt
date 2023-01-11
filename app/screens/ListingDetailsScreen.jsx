import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Button,
} from "react-native"
import React, { useState } from "react"
import { Image } from "react-native-expo-image-cache"
// import ListItem from "../components/ListItem"
import { ListItem } from "../components/lists"
import colors from "../config/colors"

import AppTextInput from "../components/AppTextInput"
import { SubmitButton } from "../components/forms"
import ContactSellerForm from "../components/ContactSellerForm"

export default function ListingDetailsScreen({ route }) {
  const [message, setMessage] = useState(null)
  const handlePress = () => {
    const message = message
    const listingID = listing.id
    console.log("Message: ", message, "ID: ", listingID)
  }
  const listing = route.params
  // console.log(listing)
  return (
    <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={100} >
      <View style={styles.container}>
        <Image
          style={styles.image}
          uri={listing.images[0].url}
          preview={{ uri: listing.images[0].thumbnailUrl }}
          tint="light"
        />
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.subTitle}>${listing.price}</Text>
        <ListItem
          title={"John Doe"}
          subTitle="10 Listings"
          image={require("../assets/mosh.jpg")}
        />
        <ContactSellerForm listing={listing} />
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {},
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 21,
    paddingTop: 20,
    paddingLeft: 20,
    fontWeight: "500",
  },
  subTitle: {
    paddingTop: 8,
    paddingLeft: 20,
    fontSize: 18,
    fontWeight: "bold",
    color: colors.secondary,
  },
})
