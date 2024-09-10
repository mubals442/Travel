import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {style} from './style';

const History = () => {
  return (
    <SafeAreaView style={style.History.SafeAreaView}>
      <Text style={style.History.Text}>History</Text>
    </SafeAreaView>
  );
};

export default History;
