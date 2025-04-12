import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetainScreen from './src/screens/DetainScreen';

const RootStack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Profile" component={ProfileScreen} />
        <RootStack.Screen name="Detail" component={DetainScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
