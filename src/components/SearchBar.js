import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const SearchBar = () => {
  const lineIcon = require('../assets/icons/lineIcon.png');
  const filterIcon = require('../assets/icons/filterIcon.png');

  return (
    <SafeAreaView
      style={{
        marginHorizontal: 30,
        marginTop: 15,
        marginBottom: 13,
        position: 'relative',
      }}>
      <TextInput
        style={{
          borderWidth: 2,
          borderColor: '#D2D2D2',
          color: '#888888',
          width: '100%',
          paddingLeft: 30,
          height: responsiveHeight(7),
          borderRadius: responsiveWidth(4),
        }}
        placeholder="SearchBar"></TextInput>

      <Image
        source={lineIcon}
        style={{position: 'absolute', right: 80, top: 12}}
        resizeMode="contain"
      />
      <Pressable
        onPress={() => {
          console.log('filter');
        }}
        style={{position: 'absolute', right: 30, top: 16}}>
        <Image source={filterIcon} resizeMode="contain" />
      </Pressable>
    </SafeAreaView>
  );
};

export default SearchBar;
