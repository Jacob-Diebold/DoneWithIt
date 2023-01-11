import apiClient from "./client"

const send = (message, listingId) => {
  return apiClient.post("/messages", { message, listingId })
}

export default {
  send,
}
