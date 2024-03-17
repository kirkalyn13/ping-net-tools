import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COLOR_LIGHT_PRIMARY, COLOR_PRIMARY_TEXT } from './styles/Colors.styles';
import Header from './components/Header/Header';
import PingScreen from './screens/PingScreen/PingScreen';
import CellularInfoScreen from './screens/CellularInfoScreen/CellularInfoScreen';
import AnalyticsScreen from './screens/Analytics/AnalyticsScreen';
import styles from './styles/App.styles';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
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
  );
}

const screenOptions: any = {
  headerStyle: {
    backgroundColor: COLOR_LIGHT_PRIMARY,
  },
  headerTintColor: COLOR_PRIMARY_TEXT,
  headerTitleStyle: {
      fontWeight: 'bold',
  },
}