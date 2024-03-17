import { View, Text } from 'react-native'
import styles from './AnalyticsScreen.styles'
import NavBar from '../../components/NavBar/NavBar'

const AnalyticsScreen = () => {
  return (
    <View style={styles.container}>
        <NavBar />
        <Text>Analytics Screen</Text>
    </View>
  )
}

export default AnalyticsScreen