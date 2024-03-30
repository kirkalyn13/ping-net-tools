import { COLOR_LIGHT_PRIMARY, COLOR_PRIMARY_TEXT } from "../styles/Colors.styles"
import { NativeStackNavigationOptions } from '@react-navigation/native-stack'

export const screenOptions: NativeStackNavigationOptions = {
    headerStyle: {
      backgroundColor: COLOR_LIGHT_PRIMARY,
    },
    headerTintColor: COLOR_PRIMARY_TEXT,
    headerTitleStyle: {
        fontWeight: 'bold',
    },
    animation: "fade"
  }