import { StatusBar } from 'expo-status-bar';
import styles from './styles/App.styles';
import { View } from 'react-native';
import Ping from './screens/Ping/Ping';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import History from './screens/History/History';
import { getHeaderStyles } from './utilities/headerStyles';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.appContainer}>
        <StatusBar style="auto" />
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Ping}
              options={getHeaderStyles("Ping Tools")}
            />
            <Stack.Screen
              name="History"
              component={History}
              options={getHeaderStyles("History")}
            />
          </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}