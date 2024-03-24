import { StyleSheet } from 'react-native'
import { COLOR_GREEN, COLOR_SECONDARY_TEXT, COLOR_WHITE } from '../../styles/Colors.styles'

const styles = StyleSheet.create({
      container: {
        flexDirection: "column",
        marginTop: 24,
      },
      infoContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 8,
        paddingHorizontal: 16,
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
      cellInfoContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      },
      cellInfoLabel: {
        fontWeight: "bold"
      },
      cellInfoValue: {
        marginLeft: 8,
      }
  });

export default styles