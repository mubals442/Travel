import {SafeAreaView, TextInput, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {style} from '../screens/auth/home/style';

const SearchBar = () => {
  const lineIcon = require('../../assets/icons/lineIcon.png');
  const filterIcon = require('../../assets/icons/filterIcon.png');

  return (
    <SafeAreaView style={style.SearchBar.SafeAreaView}>
      <TextInput
        style={style.SearchBar.TextInput}
        placeholder="Search places"></TextInput>

      <Image
        source={lineIcon}
        style={style.SearchBar.Image}
        resizeMode="contain"
      />
      <TouchableOpacity
        onPress={() => {
          console.log('filter');
        }}
        style={style.SearchBar.TouchableOpacity}>
        <Image source={filterIcon} resizeMode="contain" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SearchBar;
