import { Text, View } from "react-native";
import { PieChart } from "react-native-gifted-charts"
import styles from "./ResultSummary.style";
import { COLOR_LIGHT_PRIMARY, COLOR_PRIMARY, COLOR_SECONDARY_TEXT } from "../../../styles/Colors.styles";
import { useSelector } from "react-redux";
import { useState } from "react";

type PieData = {
    value: number
    color: string
}

const ResultSummary = () => {
    const [ percentage, setPercentage ] = useState<number>(100)
    const pingResults = useSelector((state: any) => state.pingResults.data)
    
    const getPieData = (): PieData[] => {
        const totalResults: number = pingResults.length
        if (totalResults < 1) return [{value: 100, color: COLOR_SECONDARY_TEXT}]
        const success: number = pingResults.filter((result: PingResult) => result.status === 200).length
        const failed: number = totalResults - success
        setPercentage((totalResults/success)*100)
        return [
            {value: success, color: COLOR_PRIMARY},
            {value: failed, color: COLOR_SECONDARY_TEXT}
        ]
    } 

    return(
        <View style={styles.container}>  
            <Text style={styles.title}>Summary</Text>
            <PieChart
                donut
                innerRadius={80}
                innerCircleColor={COLOR_LIGHT_PRIMARY}
                data={getPieData()}
                centerLabelComponent={() => {
                return <Text style={styles.percentage}>100%</Text>;
                }}
            />
        </View>
    )
}

export default ResultSummary