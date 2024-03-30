import { StyleSheet } from 'react-native'
import { COLOR_LIGHT_PRIMARY, COLOR_PRIMARY } from '../../styles/Colors.styles';

export const styles = StyleSheet.create({
    container: {
      width: "100%",
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: COLOR_LIGHT_PRIMARY,
      paddingVertical: 16,
      borderBottomWidth: 1,
      borderBottomColor:  COLOR_PRIMARY,
    },
    iconContainer: {
      width: "100%",
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
});