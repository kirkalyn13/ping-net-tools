import { View, Text } from 'react-native'
import styles from './CellularInfoScreen.styles'
import NavBar from '../../components/NavBar/NavBar'

const CellularInfoScreen = () => {
  return (
    <View style={styles.container}>
      <NavBar />
      <Text>Cellular Info Screen</Text>
    </View>
  )
}

export default CellularInfoScreen