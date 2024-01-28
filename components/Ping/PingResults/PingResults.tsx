import React from 'react'
import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import PingWaiting from './PingWaiting/PingWaiting'
import PingResultItem from './PingResultItem/PingResultItem'
import styles from './PingResults.style'
import { COLOR_DARK_PRIMARY } from '../../../styles/Colors.styles'

interface PingResultsProps {
  url: string,
  results: PingResult[],
  loading: boolean
}

const PingResults = ({ url, results = [], loading }: PingResultsProps) => {
  const sortResults = (results: PingResult[]): PingResult[] => results.sort((a, b) => a.iteration - b.iteration)

  const listHeader = () => {
    return (
      <View style={styles.resultLabelContainer}>
        <Text style={styles.resultLabel}>Ping Results for: </Text>
        <Text style={styles.resultUrl}>{url}</Text>
      </View>
    )
  }

  return (
    <View>
        { !loading ?
        <>
          {results.length !== 0 && listHeader()}
          <FlatList
            data={sortResults(results)}
            ListEmptyComponent={<PingWaiting />}
            renderItem={({item}) => {
              return <PingResultItem result={item} />
            }} />
          </> : <ActivityIndicator 
            size="large"
            style={styles.loading}
            color={COLOR_DARK_PRIMARY} />}
    </View>
  )
}

export default PingResults