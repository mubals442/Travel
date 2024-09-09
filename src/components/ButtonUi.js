import {View, Text, Pressable, Touchable} from 'react-native';
import React from 'react';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

const ButtonUi = props => {
  return (
    <Pressable
    onPress={() => {console.log(props.press)}}
      style={{
        borderWidth: 0,
        // backgroundColor: '#2F2F2F',
        backgroundColor: `${props.backgroundColor}`,
        width: responsiveScreenWidth(26),
        height: responsiveScreenHeight(6),
        borderRadius: responsiveScreenWidth(5),
        justifyContent: 'center',
      }}>
      <Text
        style={{
          // color: '#ffffff',
          color: `${props.color}`,
          textAlign: 'center',
        }}>
        {props.text}
      </Text>
    </Pressable>
  );
};

export default ButtonUi;
