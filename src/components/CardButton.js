import {View, Text, Image, Pressable, TouchableOpacity} from 'react-native';
import React from 'react';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';

const CardButton = props => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        onPress={
          // navigation.goBack();
          props.acion
        }
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
      </TouchableOpacity>
    </View>
  );
};

export default CardButton;
