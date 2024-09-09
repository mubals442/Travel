import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {responsiveWidth} from 'react-native-responsive-dimensions';

const CardButton = props => {
  return (
    <View>

        <View
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
        </View>
    </View>
  );
};

export default CardButton;
