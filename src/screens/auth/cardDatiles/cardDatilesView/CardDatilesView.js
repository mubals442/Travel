import {View, Text, Pressable, Image} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import CardButton from '../../../../components/CardButton';
import dataObj from '../../../../dataBase/travelInfo.json';
import {style} from './style';
import CardDatilesBox from '../cardDatilesBox/CardDatilesBox';
import {router} from '../../../../stack/router';
import {useNavigation} from '@react-navigation/native';

const CardDatilesView = props => {
  const [dataOfTravel, setdataOfTravel] = useState([...dataObj]);
  const saveIcon = require('../../../../../assets/icons/saveIcon.png');
  const backIcon = require('../../../../../assets/icons/backIcon.png');

  const navigation = useNavigation();

  return (
    <View style={style.view}>
      <Image
        source={{uri: `${dataOfTravel[1].image}`}}
        resizeMode="cover"
        style={style.image}
      />

      <View style={style.viewOfButtons}>
        <CardButton item={backIcon} acion={() => navigation.goBack()} />
        <CardButton item={saveIcon} />
      </View>

      <CardDatilesBox
        title={dataOfTravel[1].title_en}
        location={dataOfTravel[1].location_en}
        price={dataOfTravel[1].price}
      />
    </View>
  );
};

export default CardDatilesView;
