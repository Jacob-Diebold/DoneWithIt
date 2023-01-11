import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native"
import React, {useContext} from "react"
import colors from "../config/colors"
import AccountAction from "../components/AccountAction"
import Logout from "../components/Logout"
import { ListItem, ListItemSeparator } from "../components/lists"
import routes from "../navigation/routes"
import useAuth from "../auth/useAuth"
const actions = [
  {
    id: 1,
    title: "My Listings",
    icon: "format-list-bulleted",
    color: colors.primary,
  },
  {
    id: 2,
    title: "My Messages",
    icon: "email",
    color: colors.secondary,
    targetScreen: routes.MESSAGES
  },
]

export default function AccountScreen({navigation}) {
  const {user} = useAuth()
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topGap} />

      <FlatList
        ListHeaderComponent={
          <ListItem
            image={require("../assets/jacob2.jpg")}
            title={user.name}
            subTitle={user.email}
            backgroundColor={colors.white}
          />
        }
        ListHeaderComponentStyle={styles.header}
        data={actions}
        keyExtractor={(action) => action.id.toString()}
        renderItem={({ item }) => (
          <AccountAction
            title={item.title}
            icon={item.icon}
            color={item.color}
            onPress={() => item.targetScreen ? navigation.navigate(item.targetScreen): console.log(item)}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        ListFooterComponent={<Logout />}
        ListFooterComponentStyle={styles.footer}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
  profile: {
    backgroundColor: "white",
  },
  topGap: {
    height: 20,
  },

  header: {
    paddingBottom: 25,
  },
  footer: {
    paddingTop: 25,
  },
})
