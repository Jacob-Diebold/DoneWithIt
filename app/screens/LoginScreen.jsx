// Framework imports
import React, { useState } from "react"
import { Image, SafeAreaView, StyleSheet } from "react-native"
import * as Yup from "yup"

// component imports
import {
  AppErrorMessage,
  AppForm,
  AppFormField,
  SubmitButton,
} from "../components/forms"
import authApi from "../api/auth"
import useAuth from "../auth/useAuth"
// Declaring the Schema for Yup form validation
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).max(20).label("Password"),
})

export default function LoginScreen(props) {
  const { login } = useAuth()

  const [loginFailed, setLoginFailed] = useState(false)
  const [errorMessage, setErrorMessage] = useState("Invalid Email or Password")

  const handleSubmit = async (data) => {
    // console.log(data)
    const result = await authApi.login(data.email, data.password)
    console.log(result.ok)
    console.log(result.problem)
    // console.log(result)
    if (result.problem == "NETWORK_ERROR") {
      setErrorMessage("Network Error")
      return setLoginFailed(true)
    }
    if (!result.ok) {
      setErrorMessage("Invalid Email or Password")
      return setLoginFailed(true)
    }

    setLoginFailed(false)

    login(result.data)
  }
  return (
    <SafeAreaView style={styles.screen}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {/* ------EMAIL INPUT FIELD------- */}
        <AppErrorMessage error={errorMessage} visible={loginFailed} />
        <AppFormField
          name="email"
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="email-address"
          icon="email"
          placeholder="Email"
          textContentType="emailAddress"
        />

        {/* ------PASSWORD INPUT FIELD------- */}

        <AppFormField
          name="password"
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          placeholder="Password"
          textContentType="password"
          secureTextEntry
        />

        {/* ------Submit Button------ */}
        <SubmitButton title="Login" />
      </AppForm>
    </SafeAreaView>
  )
}

// Styling

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  screen: {
    margin: 10,
  },
})
