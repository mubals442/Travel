import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import FilterButtons from './FilterButtons';
import CardsView from './CardsView';

const Home = () => {
  return (
    <SafeAreaView style={{marginHorizontal: 20, marginTop: 10}}>
      <Header />
      <SearchBar />
      <FilterButtons />
      <CardsView />
    </SafeAreaView>
  );
};

export default Home;
