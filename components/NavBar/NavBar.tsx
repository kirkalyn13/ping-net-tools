import { View, TouchableOpacity } from 'react-native'
import { FontAwesome5, Ionicons } from '@expo/vector-icons'
import { styles } from './NavBar.styles'
import { COLOR_PRIMARY_TEXT } from '../../styles/Colors.styles'

const NavBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <FontAwesome5 name="table-tennis" size={32} color={COLOR_PRIMARY_TEXT} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="cellular" size={32} color={COLOR_PRIMARY_TEXT} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="analytics" size={32} color={COLOR_PRIMARY_TEXT} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default NavBar