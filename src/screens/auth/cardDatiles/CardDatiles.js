import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CardDatilesView from './CardDatilesView';
import dataObj from '../../../dataBase/travelInfo.json';
import Overview from './Overview';
import {router} from '../../../stack/router';

const CardDatiles = ({route}) => {
  // const [dataOfTravel, setdataOfTravel] = useState([...dataObj]);
  const data = route.params.data;

  // console.log(data.title_en);

  return (
    <ScrollView>
      <CardDatilesView
        image={data.image}
        title={data.title_en}
        location={data.location_en}
        price={data.price}
      />
      <Overview
        time={data.time}
        temperature={data.temperature}
        rating={data.rating}
        overview={data.overview_en}
      />
    </ScrollView>
  );
};

export default CardDatiles;
