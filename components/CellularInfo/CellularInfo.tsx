import { useState, useEffect } from 'react'
import { Text, View } from 'react-native'
import { useNetInfo } from "@react-native-community/netinfo"
import * as Cellular from 'expo-cellular'
import styles from './CellularInfo.styles'
import Map from './Map/Map'

const getTechnology = (responseCode: number) => {
    if (responseCode === 0) return "UNKNOWN"
    return `${responseCode + 1}G`
}
const CellularInfo = () => {
    const [ carrier, setCarrier ] = useState("")
    const [ technology, setTechnology ] = useState("")
    const [ countryCode, setCountryCode ] = useState("")
    const [ isVoipAllowed, setIsVoipAllowed] = useState(false)
    const netInfo = useNetInfo()

    useEffect(() => {
        Cellular.getCarrierNameAsync().then((res) => setCarrier(res!))
        Cellular.getCellularGenerationAsync().then((res) => setTechnology(getTechnology(res!)))
        Cellular.getIsoCountryCodeAsync().then((res) => setCountryCode(res!.toUpperCase()))
        Cellular.allowsVoipAsync().then((res) => setIsVoipAllowed(res!))
    },[])

    const renderSimpleInfoRow = (key: string, value: string): JSX.Element => {
        return (
            <View style={styles.infoContainer}>
                <Text style={styles.cellInfoLabel}>{key}: </Text>
                <Text style={styles.cellInfoValue}>{value !== "" ? value : "..."}</Text>
            </View>
        )
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <View style={styles.cellInfoContainer}>
                    <Text style={styles.cellInfoLabel}>Network Type: </Text>
                    <Text style={styles.cellInfoValue}>{netInfo.type.toUpperCase()}</Text>
                </View>
                <Text
                    style={netInfo.isConnected?.toString() ? styles.connected : styles.notConnected}
                    >CONNECTED
                </Text>
            </View>
            {renderSimpleInfoRow("Carrier", carrier)}
            {renderSimpleInfoRow("Technology", technology)}
            {renderSimpleInfoRow("Country Code", countryCode)}
            <View style={styles.infoContainer}>
                <View style={styles.cellInfoContainer}>
                    <Text style={styles.cellInfoLabel}>VOIP: </Text>
                </View>
                <Text
                    style={isVoipAllowed ? styles.connected : styles.notConnected}
                    >ALLOWED
                </Text>
            </View>
            <Map />
        </View>
    )
}

export default CellularInfo