import React from 'react'
import { View } from 'react-native'
import ResultTrend from './ResultTrend/ResultTrend'
import styles from './Analytics.style'
import ResultSummary from './ResultSummary/ResultSummary'
import { useSelector } from 'react-redux'
import PingWaiting from '../Ping/PingResults/PingWaiting/PingWaiting'

const Analytics = () => {
    const pingResults = useSelector((state: any) => state.pingResults.data)
    
    return (
        <View style={styles.container}>
            <ResultTrend />
            {pingResults.length > 1 ?
            <>
                <ResultSummary />
                <ResultTrend />
            </> 
            : <PingWaiting /> }  
        </View>
    )
}

export default Analytics