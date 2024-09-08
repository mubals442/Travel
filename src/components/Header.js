import {View, Text, SafeAreaView, Image} from 'react-native';
import React, {useState} from 'react';

import dataObj from '../dataBase/dataUser.json';

const Header = () => {
  const [data, setData] = useState({...dataObj});

  return (
    <SafeAreaView>
      <View>
        {/* <Image source={require(`${dataObj.avatar}`)} /> */}
        <View>
          <Text>Hi, {dataObj.name} 👋</Text>
          <Text>Explore the world</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
