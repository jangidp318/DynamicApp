import 'react-native-gesture-handler';
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActionType, NavigationContainer, useNavigation } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ContactUsScreen from './screens/ContactUsScreen';
import { createStackNavigator } from '@react-navigation/stack';
import WebViewScreen from './screens/WebViewScreen';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import SplashScreen from './screens/SplashScreen';

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
      <Drawer.Screen name="Contact Us" component={ContactUsScreen} />
    </Drawer.Navigator>)
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MainDrawer" component={DrawerNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="WebViewScreen" component={WebViewScreen} options={{ headerTitle: 'Website' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
