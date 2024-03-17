import { StyleSheet } from 'react-native'
import { COLOR_LIGHT_PRIMARY, COLOR_WHITE } from '../../styles/Colors.styles';

export const styles = StyleSheet.create({
    container: {
      width: "100%",
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: COLOR_LIGHT_PRIMARY,
      padding: 8,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: COLOR_WHITE,
    },
    iconContainer: {
      width: "100%",
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
});