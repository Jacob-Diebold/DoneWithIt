import React from "react"
import colors from "../config/colors"
import AccountAction from "./AccountAction"
import useAuth from "../auth/useAuth"

export default function Logout() {
  const { logout } = useAuth()
  
  return (
    <AccountAction
      title="Log Out"
      icon="logout"
      color={colors.logout}
      onPress={logout}
    />
  )
}
