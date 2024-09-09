import React from 'react';
import Splasher from '../screens/auth/splasher/Splasher';
import Home from '../screens/auth/home/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {router} from './router';
import CardDatiles from '../screens/auth/cardDatiles/CardDatiles';

const Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName={router.home}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={router.splasher} component={Splasher} />
      <Stack.Screen name={router.home} component={Home} />
      <Stack.Screen name={router.CardDatiles} component={CardDatiles} />
    </Stack.Navigator>
  );
};

export default Navigation;
