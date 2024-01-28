import React from 'react'
import { View, Text } from "react-native"
import styles from './PingResultItem.styles'

interface PingResultItemProps {
    result: PingResult
}

const isSuccess = (status: number): boolean => ( status >= 200 && status < 300 ) ? true: false

const PingResultItem = ({ result }: PingResultItemProps) => {
  return (
    <View 
      key={result.iteration}
      style={styles.container}>
      <Text>{result.iteration}</Text>
      <Text style={isSuccess(result.status) ? styles.success : styles.failed}>
        {result.status}
      </Text>
      <Text>{result.time} ms</Text>
    </View>
  )
}

export default PingResultItem