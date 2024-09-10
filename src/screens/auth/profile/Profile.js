import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {style} from './style';

const Profile = () => {
  return (
    <SafeAreaView style={style.Profile.SafeAreaView}>
      <Text style={style.Profile.Text}>Profile</Text>
    </SafeAreaView>
  );
};

export default Profile;
