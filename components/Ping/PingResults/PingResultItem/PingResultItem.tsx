import React from 'react'
import { View, Text } from "react-native"
import styles from './PingResultItem.styles'

interface PingResultItemProps {
    result: PingResult
}

const PingResultItem = ({ result }: PingResultItemProps) => {
  return (
    <View 
      key={result.iteration}
      style={styles.container}>
      <Text style={styles.failed}>{result.status}</Text>
      <Text>{result.time} ms</Text>
    </View>
  )
}

export default PingResultItem