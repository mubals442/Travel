import {View, Text, Image} from 'react-native';
import React from 'react';
import {responsiveWidth} from 'react-native-responsive-dimensions';

const PlaceInfo = props => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View
        style={{
          backgroundColor: '#EDEDED',
          width: responsiveWidth(7),
          height: responsiveWidth(7),
          borderRadius:responsiveWidth(2),
          marginRight:6,
          justifyContent:'center',
          alignItems:'center'
        }}>
        <Image source={props.image} />
      </View>

      <Text style={{marginTop:2}}>{props.text}</Text>
    </View>
  );
};

export default PlaceInfo;
