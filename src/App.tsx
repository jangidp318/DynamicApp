import 'react-native-gesture-handler';
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActionType, NavigationContainer, useNavigation } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/DrawerScreens/AboutScreen';
import ContactUsScreen from './screens/DrawerScreens/ContactUsScreen';
import { createStackNavigator } from '@react-navigation/stack';
import WebViewScreen from './screens/WebViewScreen';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import SplashScreen from './screens/SplashScreen';
import PrivacyPolicyScreen from './screens/DrawerScreens/PrivacyPolicyScreen';
import QuizScreen from './screens/QuizScreen';
import QuizDetailsScreen from './screens/QuizDetailsScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} options={{
        headerTitle: () => {
          return (
            <View style={{ flexDirection: 'row', height: 60, backgroundColor: 'white', alignItems: 'center' }}>
              <View>
                <Image source={require('./assets/TOB_Header.png')} style={{ width: 220, height: 60 }} /></View>
            </View>
          )
        },
      }} />
      <Drawer.Screen name="About" component={AboutScreen} />
      <Drawer.Screen name="Privacy Policy" component={PrivacyPolicyScreen} />
      <Drawer.Screen name="ContactUs" component={ContactUsScreen} />
    </Drawer.Navigator>)
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MainDrawer" component={DrawerNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="WebViewScreen" component={WebViewScreen} options={{ headerTitle: 'Website' }} />
        <Stack.Screen name="QuizScreen" component={QuizScreen} options={{ headerTitle: 'Quiz' }} />
        <Stack.Screen name="QuizDetailsScreen" component={QuizDetailsScreen} options={{ headerTitle: 'Quiz' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
