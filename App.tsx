import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './components/Header/Header';
import PingScreen from './screens/PingScreen/PingScreen';
import CellularInfoScreen from './screens/CellularInfoScreen/CellularInfoScreen';
import AnalyticsScreen from './screens/Analytics/AnalyticsScreen';
import styles from './styles/App.styles';
import { screenOptions } from './utilities/screenOptions';
import { Provider } from 'react-redux';
import { store } from './feature/store';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <View style={styles.appContainer}>
          <StatusBar style="auto" />
            <Stack.Navigator 
              screenOptions={screenOptions}
              initialRouteName='Home'>
              <Stack.Screen
                name="Home"
                component={PingScreen}
                options={{ headerTitle: (props) => <Header {...props} /> }}
              />
              <Stack.Screen
                name="CellularInfo"
                component={CellularInfoScreen}
                options={{ headerTitle: (props) => <Header {...props} /> }}
              />
              <Stack.Screen
                name="Analytics"
                component={AnalyticsScreen}
                options={{ headerTitle: (props) => <Header {...props} /> }}
              />
            </Stack.Navigator>
        </View>
      </NavigationContainer>
    </Provider>
  );
}