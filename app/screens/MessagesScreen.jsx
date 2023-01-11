import React, { useState } from "react"
import { FlatList, View, StyleSheet, SafeAreaView } from "react-native"
// import ListItem from "../components/ListItem"
// import ListItemSeparator from "../components/ListItemSeparator"
// import ListItemDeleteAction from "../components/ListItemDeleteAction"
import {
  ListItem,
  ListItemSeparator,
  ListItemDeleteAction,
} from "../components/lists"

import Constants from "expo-constants"
import colors from "../config/colors"
const initialMessages = [
  {
    id: 1,
    title: "Title 1",
    description: "Description - 1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "Title 2",
    description: "Description - 2",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 3,
    title: "Title 3",
    description: "Description - 3",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 4,
    title: "Title 4",
    description: "Description - 4",
    image: require("../assets/mosh.jpg"),
  },
]

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages)
  const [refreshing, setRefreshing] = useState(false)
  function handleDelete(message) {
    setMessages(messages.filter((m) => m.id !== message.id))
  }

  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            icon={true}
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => setMessages(initialMessages)}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
})

export default MessagesScreen
