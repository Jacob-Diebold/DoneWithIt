import { Text } from 'react-native'
import React from 'react'

import appStyles from '../config/appStyles'

export default function AppText({children, style}) {
  return <Text style={[appStyles.text, style]}>{children}</Text>
}