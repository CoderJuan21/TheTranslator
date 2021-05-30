import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ConverterScreen from '../screens/ConverterScreen';
import TranslateScreen from '../screens/TranslateScreen';


export const AppTabNavigator = createBottomTabNavigator({
  ConverterScreen : {
    screen: ConverterScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/inputIcon.png")} style={{width:25, height:25}}/>,
      tabBarLabel : "Converter",
    }
  },
  LanguageTranslater: {
    screen: TranslateScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/translateIcon.png")} style={{width:25, height:25}}/>,
      tabBarLabel : "Translate",
    }
  }
});