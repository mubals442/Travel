import {View, Text, SafeAreaView, Image} from 'react-native';
import React, {useState} from 'react';

import dataOfUserObj from '../dataBase/user.json';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {font} from '../../assets/fonts/font';

const Header = () => {
  const [user, setUser] = useState({...dataOfUserObj});

  return (
    <SafeAreaView
      style={{
        marginHorizontal: 30,
        marginTop: 15,
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 13,
      }}>
      <View
        style={{
          backgroundColor: 'gray',
          width: responsiveWidth(10),
          height: responsiveWidth(10),
          borderRadius: responsiveWidth(100) / 2,
        }}></View>

      <View>
        <Text style={{fontWeight: 'bold', fontSize: 30, color: 'black',fontFamily: 'Tajawal-Regular'}}>
          Hi, {user.name} 👋
        </Text>
        <Text style={{fontSize: 20, fontFamily: 'Tajawal-Regular'}}>
          Explore the world
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Header;
