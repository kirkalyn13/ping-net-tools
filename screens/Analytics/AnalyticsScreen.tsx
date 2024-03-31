import { ScrollView } from 'react-native'
import styles from './AnalyticsScreen.styles'
import NavBar from '../../components/NavBar/NavBar'
import Analytics from '../../components/Analytics/Analytics'

const AnalyticsScreen = () => {
  return (
    <ScrollView style={styles.container}>
        <NavBar />
        <Analytics />
    </ScrollView >
  )
}

export default AnalyticsScreen