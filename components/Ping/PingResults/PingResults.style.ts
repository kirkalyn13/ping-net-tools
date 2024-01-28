import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        height: "50%"
    },
    resultLabelContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        marginHorizontal: 16,
        marginBottom: 16,
    },
    resultLabel: {
        fontSize: 16,
        marginRight: 8
    },
    resultUrl: {
        fontSize: 16,
        fontWeight: "bold"
    },
    loading: {
        marginTop: 48,
    }
  });

export default styles