import { StatusBar } from 'expo-status-bar';
import styles from './styles/App.styles';
import { View } from 'react-native';
import Ping from './screens/Ping/Ping';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <StatusBar style="auto" />
      <Ping/>
    </View>
  );
}
