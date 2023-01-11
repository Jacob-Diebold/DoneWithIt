import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Button,
  ActivityIndicator,
} from "react-native"
import React, { useState, useEffect } from "react"
import colors from "../config/colors"
import Card from "../components/Card"

import listingsApi from "../api/listings"
import routes from "../navigation/routes"
import AppText from "../components/AppText"
import AppButton from "../components/AppButton"
import AppActivityIndicator from "../components/AppActivityIndicator"
import useApi from "../hooks/useApi"
import OfflineNotice from "../components/OfflineNotice"

export default function ListingsScreen({ navigation }) {
  const getListingsApi = useApi(listingsApi.getListings)
  const [firstLoad, setFirstLoad] = useState(true)

  useEffect(() => {
    getListingsApi.request()
  }, [])

  //// TESTING GROUND
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = async () => {
    setFirstLoad(false)
    setRefreshing(true)
    await getListingsApi.request()
    setRefreshing(false)
  }
  // console.log(getListingsApi.data)
  ///// END OF TESTING GROUND
  return (
    <>
      <AppActivityIndicator visible={firstLoad && getListingsApi.loading} />
      <SafeAreaView style={styles.container}>
        {getListingsApi.error && (
          <>
            <View style={styles.error}>
              <AppText>Couldn't Retrieve Listings.</AppText>
              <AppText>{getListingsApi.errorMessage}</AppText>
            </View>
            <AppButton
              title="Retry"
              onPress={getListingsApi.request}
              color={colors.primary}
            ></AppButton>
          </>
        )}
        <FlatList
          style={styles.list}
          data={getListingsApi.data}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={"$" + item.price}
              imageUrl={item.images[0].url}
              thumbnailUrl={item.images[0].thumbnailUrl}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            />
          )}
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      </SafeAreaView>
    </>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: "center",
    paddingTop: 37,
  },
  list: {
    flex: 1,
    paddingTop: 30,
  },
  error: {
    paddingHorizontal: 10,
    paddingTop: 20,
  },
})
