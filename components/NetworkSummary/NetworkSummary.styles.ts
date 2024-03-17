import { StyleSheet } from 'react-native'
import { COLOR_GREEN, COLOR_PRIMARY, COLOR_RED, COLOR_SECONDARY_TEXT, COLOR_WHITE } from '../../styles/Colors.styles'

const styles = StyleSheet.create({
      container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 24,
        paddingHorizontal: 16,
        marginBottom: 8,
      },
      connected: {
        paddingVertical: 2,
        paddingHorizontal: 8,
        borderRadius: 5,
        fontWeight: "bold",
        backgroundColor: COLOR_GREEN
      },
      notConnected: {
        paddingVertical: 2,
        paddingHorizontal: 8,
        borderRadius: 5,
        fontWeight: "bold",
        backgroundColor: COLOR_SECONDARY_TEXT,
        color: COLOR_WHITE
      },
      networkTypeContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      },
      networkType: {
        fontWeight: "bold"
      },
      networkTypeLabel: {
        marginLeft: 8,
      }
  });

export default styles