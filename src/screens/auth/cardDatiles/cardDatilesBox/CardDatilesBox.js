import {View, Text, Image} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {style} from './style';

const CardDatilesBox = props => {
  const markerIcon = require('../../../../assets/icons/markerIcon.png');

  return (
    <View style={style.view}>
      <View style={style.viewOfTitle}>
        <Text style={style.textOfTitleOne}>{props.title}</Text>
        <Text style={style.textOfTitleTwo}>Price</Text>
      </View>

      <View style={style.viewOfLocation}>
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
            fontWeight:'bold',
            fontSize:24
          }}>
          <Text style={{fontSize:18,color:"#434343"}}>$</Text>{props.price}
        </Text>
      </View>
    </View>
  );
};

export default CardDatilesBox;
