import {View, Text} from 'react-native';
import React, {useState} from 'react';
import CardDatilesView from './cardDatilesView/CardDatilesView';
import dataObj from '../../../dataBase/travelInfo.json';
import Overview from './overview/Overview';
import { router } from '../../../stack/router';

const CardDatiles = ({route}) => {
  const [dataOfTravel, setdataOfTravel] = useState([...dataObj]);
  console.log(route.name)

  return (
    <View>
      <CardDatilesView/>
      <Overview />
    </View>
  );
};

export default CardDatiles;
