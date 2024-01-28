import { StyleSheet } from 'react-native'
import { COLOR_GREEN, COLOR_RED, COLOR_WHITE } from '../../../../styles/Colors.styles'

const styles = StyleSheet.create({
      container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 8,
      },
      leftContainer: {
        width: "50%",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start"
      },
      iteration: {
        marginRight: 8,
      },
      success: {
        paddingVertical: 2,
        paddingHorizontal: 8,
        borderRadius: 5,
        fontWeight: "bold",
        backgroundColor: COLOR_GREEN
      },
      failed: {
        paddingVertical: 2,
        paddingHorizontal: 8,
        borderRadius: 5,
        fontWeight: "bold",
        backgroundColor: COLOR_RED,
        color: COLOR_WHITE
      },
      error: {
        overflow: "scroll"
      }
  });

export default styles