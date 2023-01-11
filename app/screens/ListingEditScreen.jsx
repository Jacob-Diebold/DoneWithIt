import { SafeAreaView, StyleSheet, Text, View } from "react-native"
import React, { useEffect, useState } from "react"

import appStyles from "../config/appStyles"
import * as Location from "expo-location"
import * as Yup from "yup"
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms"
import { CategoryPickerItem } from "../components/picker"
import FormImagePicker from "../components/forms/FormImagePicker"
import useLocation from "../hooks/useLocation"

import listingsApi from "../api/listings"
import UploadScreen from "./UploadScreen"
import isOnline from "../hooks/isOnline"

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number()
    .required()
    .min(1)
    .max(10000)
    .test(
      "maxDigitsAfterDecimal",
      "Price can only have up to 2 digits after decimal",
      (number) => /^\d+(\.\d{1,2})?$/.test(number)
    )
    .label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().label("Description"),
  images: Yup.array()
    .min(1, "Please select at least one image")
    .max(3, "You can only upload up to 3 images"),
})

const categories = [
  {
    label: "Furniture",
    value: 1,
    icon: "floor-lamp",
    color: appStyles.colors.furniture,
  },
  { label: "Cars", value: 2, icon: "car", color: appStyles.colors.cars },
  {
    label: "Cameras",
    value: 3,
    icon: "camera",
    color: appStyles.colors.cameras,
  },
  { label: "Games", value: 4, icon: "cards", color: appStyles.colors.games },
  {
    label: "Clothing",
    value: 5,
    icon: "shoe-heel",
    color: appStyles.colors.clothing,
  },
  {
    label: "Sports",
    value: 6,
    icon: "basketball",
    color: appStyles.colors.sports,
  },
  {
    label: "Movies & Music",
    value: 7,
    icon: "headphones",
    color: appStyles.colors.movies,
  },
  {
    label: "Books",
    value: 8,
    icon: "book-open-blank-variant",
    color: appStyles.colors.books,
  },
  {
    label: "Other",
    value: 9,
    icon: "dots-horizontal",
    color: appStyles.colors.other,
  },
]

export default function ListingEditScreen() {
  const location = useLocation()
  const [uploadVisible, setUploadVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  async function handleSubmit(listing, { resetForm }) {
    setUploadVisible(true)
    const result = await listingsApi.addListing(
      { ...listing, location },
      (progress) => setProgress(progress)
    )
    if (!result.ok) {
      setUploadVisible(false)
      setProgress(0)
      console.log(result.problem)
      return alert("Could not save listing")
    }
    // return setProgress(0)
    // return alert("Success")
    resetForm()
  }
  function handleFinish() {
    setUploadVisible(false)
    setProgress(0)
  }

  return (
    <SafeAreaView >
    <View style={styles.screen}>
      <UploadScreen
        onDone={handleFinish}
        progress={progress}
        visible={uploadVisible}
      />
      <AppForm
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        {/* title */}
        <AppFormField
          giveStyle={styles.title}
          name="title"
          maxLength={255}
          placeholder="Title"
          autoCapitalize="words"
        />
        {/* price */}
        <AppFormField
          name="price"
          giveStyle={styles.price}
          maxLength={7}
          placeholder="Price"
          keyboardType="decimal-pad"
        />
        {/* INSERT CATEGORY PICKER HERE */}

        <AppFormPicker
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          giveStyle={styles.category}
          items={categories}
          placeholder="Category"
        />

        {/* <AppFormField 
            name="category"
          placeholder="Categories"
        /> */}
        {/* description */}
        <AppFormField
          giveStyle={styles.multi}
          name="description"
          placeholder="Description"
          multiline
          maxLength={255}
          maxHeight={80}
        />

        {isOnline() && <SubmitButton title="Post" />}
      </AppForm>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    margin: 15,
    marginTop: 20,
  },
  multi: {
    paddingHorizontal: 20,
  },
  title: {},
  price: {
    width: "30%",
  },
  category: {
    width: "50%",
    height: 60,
  },
})
