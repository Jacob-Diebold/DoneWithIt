import apiClient from "./client"

const register = (token) => {
    return apiClient.post("/expoPushTokens", {token: token})
}

export default {
    register
}