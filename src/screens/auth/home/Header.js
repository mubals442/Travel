import {
  View,
  Text,
  SafeAreaView,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

import dataOfUserObj from '../../../dataBase/user.json';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {style} from './style';
// import {font} from '../../../../assets/fonts/font';

const Header = props => {
  const [user, setUser] = useState({...dataOfUserObj});
  const avatar = require('../../../../assets/avatar.png');

  return (
    <SafeAreaView style={style.Header.SafeAreaView}>
      <View style={style.Header.View}>
        <TouchableOpacity onPress={props.goTo}>
          <Image style={style.Header.Image} source={avatar} />
        </TouchableOpacity>
      </View>

      <View>
        <Text style={style.Header.TextOne}>Hi, {user.name} 👋</Text>
        <Text style={style.Header.TextTwo}>Explore the world</Text>
      </View>
    </SafeAreaView>
  );
};

export default Header;
