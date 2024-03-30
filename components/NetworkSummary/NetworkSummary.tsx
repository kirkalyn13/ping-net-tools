import React from 'react'
import styles from './NetworkSummary.styles'
import { View, Text } from 'react-native'
import { useNetInfo } from "@react-native-community/netinfo"

const NetworkSummary = () => {
    const netInfo = useNetInfo();

    return (
        <View style={styles.container}>
            <View style={styles.networkTypeContainer}>
                <Text style={styles.networkTypeLabel}>Network Type: </Text>
                <Text style={styles.networkTypeValue}>{netInfo.type.toUpperCase()}</Text>
            </View>
            <Text
                style={netInfo.isConnected?.toString() ? styles.connected : styles.notConnected}
                >CONNECTED
            </Text>
        </View>
    )
}

export default NetworkSummary