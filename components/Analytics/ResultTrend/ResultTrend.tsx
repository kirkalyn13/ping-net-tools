import { LineChart } from "react-native-gifted-charts"
import { useSelector } from 'react-redux'
import { COLOR_DARK_PRIMARY, COLOR_LIGHT_PRIMARY, COLOR_PRIMARY } from '../../../styles/Colors.styles'
import { Text } from "react-native"
import styles from "./ResultTrend.style"


const ResultTrend = () => {
    const pingResults = useSelector((state: any) => state.pingResults.data)
    
    const lineData: LineData[] = pingResults.map((result: PingResult) => {
        if (result.status !== 200) return {value: 0}
        return {value: result.time}
    })

    const minRTT: number = Math.min(...lineData.map((data: LineData) => data.value))
    const maxRTT: number = Math.max(...lineData.map((data: LineData) => data.value))
    const aveRTT: number = Math.floor((lineData.map((data: LineData) => data.value)
        .reduce((curr: number, acc: number) => curr + acc, 0)) / lineData.length)

    return (
        <>
            <Text style={styles.title}>Round Trip Times (ms)</Text>
            <LineChart
                areaChart
                curved
                isAnimated
                initialSpacing={0}
                data={lineData}
                thickness={2}
                hideRules
                dataPointsColor={COLOR_DARK_PRIMARY}
                color={COLOR_PRIMARY}
                startFillColor={COLOR_DARK_PRIMARY}
                startOpacity={0.8}
                endFillColor={COLOR_LIGHT_PRIMARY}
                endOpacity={0.3}
            />
            <Text style={styles.title}>
                Min: {minRTT}ms, Max: {maxRTT}ms, Ave: {aveRTT}ms
            </Text>
        </>
  )
}

export default ResultTrend