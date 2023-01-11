import NetInfo, { useNetInfo } from "@react-native-community/netinfo"

function isOnline() {
  const netInfo = useNetInfo()
  // return false
  return netInfo.isInternetReachable
}

export default isOnline
