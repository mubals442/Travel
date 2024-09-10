import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';

const CardButton = props => {
  const navigation = useNavigation();

  return (
    <View>
      <Pressable
        onPress={() => {
          navigation.goBack();
        }}
        style={{
          backgroundColor: 'gray',
          width: responsiveWidth(11),
          height: responsiveWidth(11),
          opacity: 0.8,
          borderRadius: responsiveWidth(100) / 2,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={props.item} resizeMode="contain" />
      </Pressable>
    </View>
  );
};

export default CardButton;
