import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        width: "100%",
        justifyContent: "center"
    },
    textContainer: {
        position: "relative",
        justifyContent: "center",
        flexDirection: "row",
        marginTop: 32,
        width: "100%",
        textAlign: "center"
    },
    text: {
        width: "auto",
        fontSize: 24,
        textAlign: "center"
    },
    logo: {
        height: 32,
        width: 32,
        marginRight: 16,
      },
  });

export default styles