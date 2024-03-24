import React from 'react'
import { View, Text } from 'react-native'
import MapView from 'react-native-maps'
import styles from './Map.styles'

const Map = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Location:</Text>
        <MapView style={styles.map}/>
    </View>
  )
}

export default Map