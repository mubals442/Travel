import {View, Text, Pressable, Image} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const ButtonBook = () => {
  const sendIcon = require('../../assets/icons/sendIcon.png');

  return (
    <Pressable
      onPress={() => {
        console.log('Book Now');
      }}
      style={{
        position: 'sticky',
        bottom: 0,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        height: responsiveHeight(8),
        borderRadius: responsiveWidth(5),
        flexDirection: 'row',
        zIndex: 999,
      }}>
      <Text style={{color: '#ffffff', fontSize: 23, fontFamily: 'bold'}}>
        Book Now
      </Text>
      <Image source={sendIcon} style={{marginLeft: 15}} />
    </Pressable>
  );
};

export default ButtonBook;
