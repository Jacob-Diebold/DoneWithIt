import logger from "./app/utility/logger"
import ignoreWarnings from "./app/config/ignoreWarnings"
import React, { useState, useEffect, useCallback } from "react"
import {
  NavigationContainer
} from "@react-navigation/native"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import AuthNavigator from "./app/navigation/AuthNavigator"
import AuthContext from "./app/auth/context"
import AppNavigator from "./app/navigation/AppNavigator"
import navigationTheme from "./app/navigation/navigationTheme"
import OfflineNotice from "./app/components/OfflineNotice"
import authStorage from "./app/auth/storage"
import * as SplashScreen from "expo-splash-screen"
import {navigationRef} from "./app/navigation/rootNavigation"

logger.start()

SplashScreen.preventAutoHideAsync()
export default function App() {
  const [user, setUser] = useState()
  const [appIsReady, setAppIsReady] = useState(false)

  const restoreToken = async () => {
    const user = await authStorage.getUser()
    if (user) setUser(user)
  }
  useEffect(() => {
    try {
      restoreToken()
    } catch (error) {
      console.log(error)
    } finally {
      setAppIsReady(true)
    }
  }, [])

  const onLoad = () => {
    if (appIsReady) {
      setTimeout(async () => {
        await SplashScreen.hideAsync()
      }, 500)
    }
  }

  if (!appIsReady) {
    return null
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={navigationTheme} onReady={onLoad}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  )
}
