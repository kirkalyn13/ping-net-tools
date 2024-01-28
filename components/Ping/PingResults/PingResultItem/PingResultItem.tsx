import React from 'react'
import { View, Text } from "react-native"
import styles from './PingResultItem.styles'

interface PingResultItemProps {
    result: PingResult
}

const isSuccess = (status: number): boolean => ( status >= 200 && status < 300 ) ? true: false
const cleanErrorString = (error: string): string => error.replace(/^TypeError: /, '')

const PingResultItem = ({ result }: PingResultItemProps) => {
  console.log(result)
  return (
    <View 
      key={result.iteration}
      style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.iteration}>{result.iteration}:</Text>
        <Text style={isSuccess(result.status) ? styles.success : styles.failed}>
          {result.status}
        </Text>
      </View>
      {!result.error ? <Text>{result.time} ms</Text> : <Text style={styles.error}>{cleanErrorString(result.error ?? "")}</Text>}
      
    </View>
  )
}

export default PingResultItem