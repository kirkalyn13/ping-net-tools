import React from 'react'
import { View, Text, FlatList } from 'react-native'

interface PingResultsProps {
  results: any[]
}

const PingResults = ({ results = [] }: PingResultsProps) => {
  return (
    <View>
        <Text>Ping Results</Text>
        {results.length !== 0 ?
          <FlatList
          data={results}
          renderItem={({item}) => {
            return <Text>{item} ms</Text>
          }} /> :
          <Text>Ping a website!</Text>}
    </View>
  )
}

export default PingResults