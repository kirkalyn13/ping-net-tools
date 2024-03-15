import { StatusBar } from 'expo-status-bar';
import styles from './styles/App.styles';
import { View } from 'react-native';
import Ping from './screens/Ping/Ping';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import History from './screens/History/History';
import { getHeaderStyles } from './utilities/headerStyles';
import { COLOR_LIGHT_PRIMARY, COLOR_PRIMARY_TEXT } from './styles/Colors.styles';
import Header from './components/Header/Header';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.appContainer}>
        <StatusBar style="auto" />
          <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
              name="Home"
              component={Ping}
              options={{ headerTitle: (props) => <Header {...props} /> }}
            />
            <Stack.Screen
              name="History"
              component={History}
              options={{title: "History"}}
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