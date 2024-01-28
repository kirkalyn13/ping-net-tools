import React from 'react'
import { View, FlatList } from 'react-native'
import PingWaiting from './PingWaiting/PingWaiting'
import PingResultItem from './PingResultItem/PingResultItem'

interface PingResultsProps {
  results: PingResult[]
}

const PingResults = ({ results = [] }: PingResultsProps) => {
  return (
    <View>
        {results.length !== 0 ?
          <FlatList
          data={results}
          renderItem={({item}) => {
            return <PingResultItem result={item} />
          }} /> : <PingWaiting />}
    </View>
  )
}

export default PingResults