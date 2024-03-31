import { View } from 'react-native'
import styles from './AnalyticsScreen.styles'
import NavBar from '../../components/NavBar/NavBar'
import Analytics from '../../components/Analytics/Analytics'

const AnalyticsScreen = () => {
  return (
    <View style={styles.container}>
        <NavBar />
        <Analytics />
    </View>
  )
}

export default AnalyticsScreen