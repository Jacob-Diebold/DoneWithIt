import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  SafeAreaView,
  FlatList,
} from "react-native"
import React from "react"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import AppText from "../AppText"
import appStyles from "../../config/appStyles"
import PickerItem from "./PickerItem"

export default function AppPicker({
  icon,
  items,
  numberOfColumns = 1,
  placeholder,
  onSelectItem,
  selectedItem,
  giveStyle,
  PickerItemComponent = PickerItem,
  ...otherProps
}) {
  const [modalVisible, setModalVisible] = React.useState(false)
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, giveStyle]}>
          {icon && <MaterialCommunityIcons name={icon} style={styles.icon} />}

          {/* This changes the styling if a selected item has been selected, or it shows the placeholder with a default color */}

          {selectedItem ? (
            <AppText style={[appStyles.text, styles.text]}>
              {selectedItem.label}
            </AppText>
          ) : (
            <AppText style={[appStyles.text, styles.text, styles.placeholder]}>
              {placeholder}
            </AppText>
          )}

          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={appStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <SafeAreaView style={styles.modal}>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            numColumns={numberOfColumns}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                onPress={() => {
                  setModalVisible(false)
                  onSelectItem(item)
                }}
              />
            )}
          />
        </SafeAreaView>
      </Modal>
    </>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: appStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    margin: 10,
    color: appStyles.colors.medium,
    fontSize: 20,
  },
  text: {
    flex: 1,
  },
  modal: {},
  placeholder: {
    color: appStyles.colors.medium,
  },
})
