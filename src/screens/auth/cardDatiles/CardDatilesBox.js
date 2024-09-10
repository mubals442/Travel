import {View, Text, Image} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const CardDatilesBox = props => {
  const markerIcon = require('../../../../assets/icons/markerIcon.png');

  return (
    <View
      style={{
        backgroundColor: '#00000066',
        marginBottom: 25,
        marginHorizontal: 20,
        height: responsiveHeight(12),
        borderRadius: responsiveWidth(3),
        padding: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 4,
        }}>
        <Text
          style={{
            color: '#ffffff',
            fontWeight: 'bold',
            fontSize: 20,
          }}>
          {props.title}
        </Text>
        <Text
          style={{
            color: '#CAC8C8',
            marginTop: 7,
            fontSize: 14,
          }}>
          Price
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Image source={markerIcon} resizeMode="contain" />
          <Text
            style={{color: '#CAC8C8', marginLeft: 5, justifyContent: 'center'}}>
            {props.location}
          </Text>
        </View>

        <Text
          style={{
            color: '#CAC8C8',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 5,
            fontWeight: 'bold',
            fontSize: 24,
          }}>
          <Text style={{fontSize: 18, color: '#434343'}}>$</Text>
          {props.price}
        </Text>
      </View>
    </View>
  );
};

export default CardDatilesBox;
