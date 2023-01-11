import React from "react"
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native"
import colors from "../config/colors"
import ButtonDefault from "../components/AppButton"
import routes from "../navigation/routes"

function WelcomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground
        blurRadius= {10}
        style={styles.backgroundImage}
        source={require("../assets/background.jpg")
        }
      >
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.motto}>Sell What You Don't Need</Text>
        <View style={styles.buttons}>
          <ButtonDefault color={colors.primary} title="Login" onPress={() => navigation.navigate(routes.LOGIN)} />
          <ButtonDefault color={colors.secondary} title="Register" onPress={() => navigation.navigate(routes.REGISTER)} />
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    top: 75,
  },
  motto: {
    top: 75,
    paddingTop:20,
    fontSize: 25,
    fontWeight:"600" 
  }, 
  buttons: {
    width: "100%",
    height: 130,
    position: "absolute",
    bottom: 20,
    marginBottom:25,
    alignItems: "center",
    // backgroundColor:"red",
    
  },
})

export default WelcomeScreen
