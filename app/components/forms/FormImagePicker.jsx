import React from "react"
import { ImageInputList } from "../handleImages"
import AppErrorMessage from "./AppErrorMessage"
import { useFormikContext } from "formik"

export default function FormImagePicker({ name }) {
  const { errors, touched, setFieldValue, values } = useFormikContext()
  const imageUris = values[name]

  function handleAdd(uri) {
    setFieldValue(name, [...imageUris, uri])
  }
  function handleRemove(uri) {
    setFieldValue(
      name,
      imageUris.filter((imageUri) => imageUri !== uri)
    )
  }
  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}
