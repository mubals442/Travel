import {View, Text, Pressable} from 'react-native';
import React from 'react';
import ButtonBook from '../../../../components/ButtonBook';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import PlaceInfo from '../../../../components/PlaceInfo';

const Overview = () => {
  const timeIcon = require('../../../../../assets/icons/timeIcon.png');
  const weatherIcon = require('../../../../../assets/icons/weatherIcon.png');
  const blackStarIcon = require('../../../../../assets/icons/blackStarIcon.png');

  return (
    <View style={{marginHorizontal: 30}}>
      <View style={{flexDirection: 'row', height: responsiveHeight(8)}}>
        <Text style={{fontWeight: 'bold', fontSize: 23, color: 'black'}}>
          Overview
        </Text>
        <Text style={{color: '#1B1B1B', marginTop: 9, marginLeft: 23}}>
          Details
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: responsiveHeight(5),
        }}>
        <PlaceInfo text={'8 hours'} image={timeIcon} />
        <PlaceInfo text={'16 C'} image={weatherIcon} />
        <PlaceInfo text={'4.5'} image={blackStarIcon} />
      </View>

      <View style={{zIndex: 0, marginBottom: 10}}>
        <Text style={{fontSize: 18, textAlign: 'justify'}}>
          This vast mountain range is renowned for its remarkable diversity in
          terms of topography and climate. It features
        </Text>
      </View>
      <ButtonBook />
    </View>
  );
};

export default Overview;
