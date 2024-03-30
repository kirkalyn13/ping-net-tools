import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import PingWaiting from './PingWaiting/PingWaiting'
import PingResultItem from './PingResultItem/PingResultItem'
import styles from './PingResults.style'
import { COLOR_DARK_PRIMARY } from '../../../styles/Colors.styles'
import { useSelector } from 'react-redux'

interface PingResultsProps {
  url: string,
  loading: boolean
}

const PingResults = ({ url, loading }: PingResultsProps) => {
  const pingResults = useSelector((state: any) => state.pingResults.data)

  const listHeader = () => {
    return (
      <View style={styles.resultLabelContainer}>
        <Text style={styles.resultLabel}>Ping Results for: </Text>
        <Text style={styles.resultUrl}>{url}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
        { !loading ?
        <>
          {pingResults.length !== 0 && listHeader()}
          <FlatList
            data={pingResults}
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