import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from '../PingResults.style'

const getSrcPath = require("../../../../assets/images/do-ping.png")

const PingWaiting = () => {
  return (
    <View style={styles.textContainer}>
        <Image
        source={getSrcPath}
        style={styles.logo}
        />
        <Text style={styles.text}>
            Ping Somewhere!
        </Text>
    </View>
  )
}

export default PingWaiting