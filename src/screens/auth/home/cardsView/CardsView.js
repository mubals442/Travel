import {View, Image} from 'react-native';
import React from 'react';

import CardButton from '../../../../components/CardButton';
import CardsBoxInfo from './CardsBoxInfo';
import {style} from './style';

const CardsView = props => {
  const favoriteIcon = require('../../../../../assets/icons/favoriteIcon.png');

  return (
    <View style={style.viwe}>
      <Image
        source={{uri: `${props.image}`}}
        resizeMode="cover"
        style={style.image}
      />

      <View style={{flexDirection: 'row-reverse', marginRight: 12}}>
        <CardButton item={favoriteIcon} acion={() => console.log('action')} />
      </View>

      <CardsBoxInfo
        title={props.title}
        location={props.location}
        rating={props.rating}
      />
    </View>
  );
};

export default CardsView;
