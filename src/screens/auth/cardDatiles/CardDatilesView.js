import {View, Image} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import CardButton from '../../../components/CardButton';
import dataObj from '../../../dataBase/travelInfo.json';
import CardDatilesBox from './CardDatilesBox';
import {router} from '../../../stack/router';
import {useNavigation} from '@react-navigation/native';

const CardDatilesView = props => {
  const [dataOfTravel, setdataOfTravel] = useState([...dataObj]);
  const saveIcon = require('../../../../assets/icons/saveIcon.png');
  const backIcon = require('../../../../assets/icons/backIcon.png');

  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: 'lightblue',
        height: responsiveHeight(50),
        borderRadius: responsiveWidth(5),
        margin: 30,
        position: 'relative',
        flexDirection: 'column',
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,

        elevation: 18,
      }}>
      <Image
        source={{uri: `${props.image}`}}
        resizeMode="cover"
        style={{
          width: '100%',
          height: responsiveHeight(50),
          borderRadius: responsiveWidth(5),
          position: 'absolute',
        }}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 15,
        }}>
        <CardButton item={backIcon} action={() => navigation.goBack()} />
        <CardButton item={saveIcon} action={() => console.log("save")}/>
      </View>

      <CardDatilesBox
        title={props.title}
        location={props.location}
        price={props.price}
      />
    </View>
  );
};

export default CardDatilesView;
