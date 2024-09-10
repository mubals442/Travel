import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const CardsBoxInfo = props => {
  const starIcon = require('../../../../assets/icons/starIcon.png');
  const markerIcon = require('../../../../assets/icons/markerIcon.png');

  return (
    <View
      style={{
        backgroundColor: '#00000066',
        marginHorizontal: 16,
        padding: 9,
        height: responsiveHeight(9),
        borderRadius: responsiveWidth(3),
        marginBottom: 13,
      }}>
      <Text style={{color: 'white', zIndex: 999}}>{props.title}</Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 7,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={markerIcon} resizeMode="contain" />
          <Text style={{color: '#CAC8C8', zIndex: 999, marginLeft: 3}}>
            {props.location}
          </Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={starIcon} resizeMode="contain" />
          <Text style={{color: '#CAC8C8', zIndex: 999, marginLeft: 8}}>
            {props.rating}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CardsBoxInfo;
