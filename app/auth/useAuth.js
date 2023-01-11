import { useContext } from "react"
import AuthContext from "./context"
import authStorage from "./storage"
import jwtDecode from "jwt-decode"


export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext)
  const logout = () => {
    setUser(null)
    authStorage.removeToken()
  }
  const login = (token) => {
    const user = jwtDecode(token)
    setUser(user)
    authStorage.storeToken(token)
  }

  return { user, setUser, logout, login }
}
