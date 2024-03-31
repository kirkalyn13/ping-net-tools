import { LineChart } from "react-native-gifted-charts"
import { useSelector } from 'react-redux'
import { COLOR_DARK_PRIMARY, COLOR_LIGHT_PRIMARY, COLOR_PRIMARY } from '../../../styles/Colors.styles'
import { Text } from "react-native"
import styles from "./ResultTrend.style"

const ResultTrend = () => {
    const pingResults = useSelector((state: any) => state.pingResults.data)
    
    const lineData = pingResults.map((result: PingResult) => {
        if (result.status !== 200) return {value: 0}
        return {value: result.time}
    })

    return (
        <>
            <Text style={styles.title}>Trend</Text>
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
        </>
  )
}

export default ResultTrend