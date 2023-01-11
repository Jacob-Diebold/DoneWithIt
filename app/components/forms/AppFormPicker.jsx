// This component combines the App Picker with an Error Message to use in forms
import React from "react"
import { useFormikContext } from "formik"

import { AppPicker } from "../picker"
import AppErrorMessage from "./AppErrorMessage"

export default function AppFormPicker({
  name,
  items,
  placeholder,
  giveStyle,
  numberOfColumns,
  PickerItemComponent,
  ...otherProps
}) {
  const { errors, touched, setFieldValue, values } = useFormikContext()
  return (
    <>
      <AppPicker
        PickerItemComponent={PickerItemComponent}
        numberOfColumns={numberOfColumns}
        giveStyle={giveStyle}
        placeholder={placeholder}
        items={items}
        onSelectItem={(item) => {
          setFieldValue(name, item)
        }}
        selectedItem={values[name]}
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}
