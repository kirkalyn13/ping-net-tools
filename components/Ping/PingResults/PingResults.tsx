import React from 'react'
import { View, Text, FlatList } from 'react-native'
import PingWaiting from './PingWaiting/PingWaiting'
import PingResultItem from './PingResultItem/PingResultItem'
import styles from './PingResults.style'

interface PingResultsProps {
  url: string,
  results: PingResult[]
}

const PingResults = ({ url, results = [] }: PingResultsProps) => {
  const sortResults = (results: PingResult[]): PingResult[] => results.sort((a, b) => a.iteration - b.iteration)
  return (
    <View>
        {results.length !== 0 ?
        <>
          <View style={styles.resultLabelContainer}>
            <Text style={styles.resultLabel}>Ping Results for: </Text>
            <Text style={styles.resultUrl}>{url}</Text>
          </View>
          <FlatList
          data={sortResults(results)}
          renderItem={({item}) => {
            return <PingResultItem result={item} />
          }} />
          </> : <PingWaiting />}
    </View>
  )
}

export default PingResults