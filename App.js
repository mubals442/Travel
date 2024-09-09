import React from 'react';
import {SafeAreaView} from 'react-native';
import Navigation from './src/stack/Navigation';
import Home from './src/screens/auth/home/Home';
import CardDatiles from './src/screens/auth/cardDatiles/CardDatiles';
import {NavigationContainer} from '@react-navigation/native';

function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}

export default App;
