import React from 'react'
import { View, FlatList } from 'react-native'
import PingWaiting from './PingWaiting/PingWaiting'
import PingResultItem from './PingResultItem/PingResultItem'

interface PingResultsProps {
  results: PingResult[]
}

const PingResults = ({ results = [] }: PingResultsProps) => {
  const sortResults = (results: PingResult[]): PingResult[] => results.sort((a, b) => a.iteration - b.iteration)
  return (
    <View>
        {results.length !== 0 ?
          <FlatList
          data={sortResults(results)}
          renderItem={({item}) => {
            return <PingResultItem result={item} />
          }} /> : <PingWaiting />}
    </View>
  )
}

export default PingResults