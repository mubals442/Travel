import React from 'react';
import Splasher from '../screens/auth/splasher/Splasher';
import Home from '../screens/auth/home/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {router} from './router';
import CardDatiles from '../screens/auth/cardDatiles/CardDatiles';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import History from '../screens/auth/history/History';
import Favorite from '../screens/auth/favorite/Favorite';
import Profile from '../screens/auth/profile/Profile';

const Navigation = () => {
  // const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName={router.home}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name={router.home} component={Home} />
      <Tab.Screen name={router.CardDatiles} component={CardDatiles} />
      <Tab.Screen name={router.History} component={History} />
      <Tab.Screen name={router.Favorite} component={Favorite} />
      <Tab.Screen name={router.Profile} component={Profile} />
    </Tab.Navigator>
  );
};

export default Navigation;
