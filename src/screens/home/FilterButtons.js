import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import ButtonUi from '../../components/ButtonUi';

const FilterButtons = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Popular places</Text>
        <Text>View all</Text>
      </View>

      <View>
        <ButtonUi />
        <ButtonUi />
        <ButtonUi />
      </View>
    </SafeAreaView>
  );
};

export default FilterButtons;
