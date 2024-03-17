import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
      container: {
        width: "100%",
        paddingBottom: 8,
        marginTop: 16,
      },
      headerContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingBottom: 8,
        marginHorizontal: 8,
      },
      logo: {
        height: 32,
        width: 32,
        marginRight: 16,
      },
      title: {
        fontSize: 24,
        fontWeight: "bold",
        fontStyle: "italic"
      }
  });

export default styles