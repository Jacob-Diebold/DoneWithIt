import * as Location from "expo-location"
import {useState, useEffect} from "react"
export default function useLocation() {
  const [location, setLocation] = useState()

  async function getLocation() {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync()
      if (!granted) {
        console.log("permission denied")
        return
      }
  
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({})
      setLocation({ latitude, longitude })
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getLocation()
  }, [])
  return location
}
