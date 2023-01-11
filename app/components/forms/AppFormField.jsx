import { StyleSheet, Text, View } from "react-native"
import React from "react"
import { useFormikContext } from "formik"

import AppErrorMessage from "./AppErrorMessage"
import AppTextInput from "../AppTextInput"

export default function AppFormField({ name, ...otherProps }) {
  const {setFieldTouched, setFieldValue, errors, touched, values} = useFormikContext()
  return (
    <>
      <AppTextInput
        onChangeText={text => setFieldValue(name, text)}
        value={values[name]}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
        
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}
