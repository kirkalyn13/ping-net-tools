import { StyleSheet } from 'react-native'
import { COLOR_ACCCENT, COLOR_PRIMARY } from '../../../styles/Colors.styles'

const styles = StyleSheet.create({
      inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 8,
      },
      textInputContainer: {
        width: "60%",
        marginBottom: 24,
      },
      textInput: {
        borderWidth: 1,
        borderColor: COLOR_ACCCENT,
        borderRadius: 6,
        marginTop: 16,
        marginHorizontal: 8,
        padding: 8,
      },
      pressableContainer: {
        alignItems: 'center',
      },
      disabledPressableContainer: {
        opacity: 0.3,
        alignItems: 'center',
      },
      pressableImage: {
        width: 100,
        height: 100,
      },
      pressableText: {
        marginTop: 5,
        fontSize: 16,
        color: 'black',
      },
  });

export default styles