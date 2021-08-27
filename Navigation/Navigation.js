import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from '../Application/Home';
import List from '../Application/List';
import Remerciement from '../Application/Remerciement';
import StepOne from '../Application/StepOne';
import StepTwo from '../Application/StepTwo';

let NavigationBis = createStackNavigator();

let Navigation = () => {
  return (
    <NavigationBis.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <NavigationBis.Screen name="Home" component={Home} />
      <NavigationBis.Screen name="Remerciement" component={Remerciement} />
      <NavigationBis.Screen name="List" component={List} />
      <NavigationBis.Screen name="StepOne" component={StepOne} />
      <NavigationBis.Screen name="StepTwo" component={StepTwo} />
    </NavigationBis.Navigator>
  );
};

export default Navigation;
