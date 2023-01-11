import apiClient from "./client"

const login = (email,password) => {
    return apiClient.post("/auth", {email, password})
}
const register = (userInfo) => {
    return apiClient.post("/users", userInfo)
}
export default {
    login,
    register
}