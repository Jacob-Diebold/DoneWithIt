import { SafeAreaView, StyleSheet, Text, View } from "react-native"
import React, { useState } from "react"

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
import useApi from "../hooks/useApi"
import AppActivityIndicator from "../components/AppActivityIndicator"

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(1).label("Full Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).max(20).label("Password"),
})

export default function RegisterScreen() {
  const registerApi = useApi(authApi.register)
  const loginApi = useApi(authApi.login)

  //This is a custom hook. i dont know why i dont need to import it. but if i do import it, it gives me context hints
  const { login } = useAuth()
  const [registerFailed, setRegisterFailed] = useState(false)
  const [error, setError] = useState(null)

  handleRegister = async (data) => {
    const result = await registerApi.request(data)
    // console.log(result)
    // console.log(result.ok)
    // console.log(result.problem)
    // console.log(result.data.error)
    if (!result.ok) {
      if (result.data) setError(result.data.error)
      else {
        setError("An unexpected error occurred.")
        console.log(result)
      }
      return setRegisterFailed(true)
    }

    setRegisterFailed(false)
    console.log("register succeeded")
    //NEED TO IMPLEMENT LOGIN HERE AFTER IM DONE WITH ERROR MESSAGE
    const loginResult = await loginApi.request(data.email, data.password)
    // console.log(loginResult)
    login(loginResult.data)
  }

  return (
    <>
      <AppActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <SafeAreaView style={styles.screen}>
        <AppForm
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleRegister}
          validationSchema={validationSchema}
        >
          <AppErrorMessage error={error} visible={registerFailed} />
          <AppFormField
            name="name"
            autoCorrect={false}
            placeholder="Name"
            icon="account"
          />
          {/* ------EMAIL INPUT FIELD------- */}
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

          <SubmitButton title="Register" />
        </AppForm>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  screen: {
    margin: 10,
    marginTop: 20,
  },
})
