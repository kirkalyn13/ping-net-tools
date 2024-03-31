import { Text, View } from "react-native";
import { PieChart } from "react-native-gifted-charts"
import styles from "./ResultSummary.style";
import { COLOR_LIGHT_PRIMARY, COLOR_PRIMARY, COLOR_SECONDARY_TEXT } from "../../../styles/Colors.styles";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const ResultSummary = () => {
    const [ percentage, setPercentage ] = useState<number>(100)
    const [ pieData, setPieData ] = useState<PieData[]>([{value: 100, color: COLOR_SECONDARY_TEXT}])
    const [ total, setTotal ] = useState(0)
    const [ success, setSuccess] = useState(0)
    const [ failed, setFailed ] = useState(0)
    const pingResults = useSelector((state: any) => state.pingResults.data)
    
    const getPieData = () => {
        const totalResults: number = pingResults.length
        if (totalResults < 1) return [{value: 100, color: COLOR_SECONDARY_TEXT}]
        const successResults: number = pingResults.filter((result: PingResult) => result.status === 200).length
        const failedResults: number = totalResults - successResults
        setTotal(totalResults)
        setSuccess(successResults)
        setPercentage((totalResults/successResults)*100)
        setPieData([
            {value: successResults, color: COLOR_PRIMARY},
            {value: failedResults, color: COLOR_SECONDARY_TEXT}
        ])
    } 

    useEffect(() => {
        getPieData()
    },[])

    return(
        <View style={styles.container}>  
            <Text style={styles.title}>Ping Statistics</Text>
            <PieChart
                donut
                innerRadius={80}
                innerCircleColor={COLOR_LIGHT_PRIMARY}
                data={pieData}
                centerLabelComponent={() => {
                return <Text style={styles.percentage}>{percentage}%</Text>;
                }}
            />
            <Text style={styles.infoContainer}>
                Sent: {total}, Received: {success}, Failed: {failed} ({percentage - 100})% loss
            </Text>
        </View>
    )
}

export default ResultSummary