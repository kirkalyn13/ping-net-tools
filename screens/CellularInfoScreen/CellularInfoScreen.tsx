import { View, Text } from 'react-native'
import styles from './CellularInfoScreen.styles'
import NavBar from '../../components/NavBar/NavBar'
import CellularInfo from '../../components/CellularInfo/CellularInfo'

const CellularInfoScreen = () => {
  return (
    <View style={styles.container}>
      <NavBar />
      <CellularInfo />
    </View>
  )
}

export default CellularInfoScreen