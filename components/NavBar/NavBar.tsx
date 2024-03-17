import { View, TouchableOpacity } from 'react-native'
import { FontAwesome5, Ionicons } from '@expo/vector-icons'
import { styles } from './NavBar.styles'
import { COLOR_PRIMARY_TEXT } from '../../styles/Colors.styles'
import { NavigationProp, useNavigation } from '@react-navigation/native'

const NavBar = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <FontAwesome5 name="table-tennis" size={32} color={COLOR_PRIMARY_TEXT} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("CellularInfo")}>
          <Ionicons name="cellular" size={32} color={COLOR_PRIMARY_TEXT} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Analytics")}>
          <Ionicons name="analytics" size={32} color={COLOR_PRIMARY_TEXT} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default NavBar