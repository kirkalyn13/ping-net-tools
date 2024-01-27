import { StyleSheet } from 'react-native'
import { COLOR_GREEN, COLOR_PRIMARY, COLOR_RED } from '../../styles/Colors.styles'

const styles = StyleSheet.create({
      container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16,
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor:  COLOR_PRIMARY,
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
        backgroundColor: COLOR_RED
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