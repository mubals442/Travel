import {View, Image} from 'react-native';
import React from 'react';

import CardButton from '../../../components/CardButton';
import CardsBoxInfo from './CardsBoxInfo';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {style} from './style';

const CardsView = props => {
  const favoriteIcon = require('../../../../assets/icons/favoriteIcon.png');

  return (
    <View style={style.CardsView.ViewOne}>
      <Image
        source={{uri: `${props.image}`}}
        resizeMode="cover"
        style={style.CardsView.Image}
      />

      <View style={style.CardsView.ViewTwo}>
        <CardButton
          item={favoriteIcon}
          action={() => console.log('Favorite')}
        />
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
