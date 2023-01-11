import { useState } from "react"
export default useApi = (apiFunc) => {
  const [data, setData] = useState([])
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const request = async (...args) => {
    setLoading(true)
    const response = await apiFunc(...args)
    setLoading(false)

    if (!response.ok) {
      setErrorMessage(response.problem)
      setError(true)
      return response
    } else {
      setError(false)
      setData(response.data)
      return response
    }
  }
  return { data, error, errorMessage, loading, request }
}
