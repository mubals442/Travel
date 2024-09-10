import React from 'react';
import Splasher from '../screens/auth/splasher/Splasher';
import Home from '../screens/auth/home/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {router} from './router';
import CardDatiles from '../screens/auth/cardDatiles/CardDatiles';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Navigation = () => {
  // const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName={router.home}
      screenOptions={{headerShown: false}}>
      {/* <Tab.Screen name={router.splasher} component={Splasher} /> */}
      <Tab.Screen name={router.home} component={Home} />
      <Tab.Screen name={router.CardDatiles} component={CardDatiles} />
    </Tab.Navigator>
  );
};

export default Navigation;
