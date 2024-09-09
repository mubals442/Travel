import {View, Text, SafeAreaView, Pressable} from 'react-native';
import React from 'react';
import ButtonUi from '../../../../components/ButtonUi';
import {style} from './style';

const FilterButtons = () => {
  return (
    <SafeAreaView style={{marginTop: 30}}>
      <View style={style.view}>
        <Text style={style.textBold}>Popular places</Text>
        <Pressable onPress={() => {console.log("View all")}}>
          <Text style={style.text}>View all</Text>
        </Pressable>
      </View>

      <View style={style.buttonView}>
        <ButtonUi
          text={'Most Viewed'}
          backgroundColor={'#2F2F2F'}
          color={'#ffffff'}
          press={'Most Viewed'}
        />
        <ButtonUi
          text={'Nearby'}
          backgroundColor={'#FBFBFB'}
          color={'#C5C5C5'}
          press={'Nearby'}
        />
        <ButtonUi
          text={'Latest'}
          backgroundColor={'#FBFBFB'}
          color={'#C5C5C5'}
          press={'Latest'}
        />
      </View>
    </SafeAreaView>
  );
};

export default FilterButtons;
