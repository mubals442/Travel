import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

const ButtonUi = ({text, backgroundColor, color, press}) => {
  return (
    <TouchableOpacity
      onPress={press}
      style={{
        backgroundColor: backgroundColor,
        width: responsiveScreenWidth(26),
        height: responsiveScreenHeight(6),
        borderRadius: responsiveScreenWidth(5),
        justifyContent: 'center',
      }}>
      <Text
        style={{
          color: color,
          textAlign: 'center',
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonUi;
