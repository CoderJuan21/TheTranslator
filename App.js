import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'; 
import { AppTabNavigator } from './components/AppTabNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-view';

export default function App() {
  return (
    <SafeAreaProvider>
    <AppContainer/>
    </SafeAreaProvider>
  );
}


const switchNavigator = createSwitchNavigator({
  Drawer:{screen: AppTabNavigator}
})

const AppContainer =  createAppContainer(switchNavigator);


