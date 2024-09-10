import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../../components/Header';
import SearchBar from '../../../components/SearchBar';
import FilterButtons from './filterButtons/FilterButtons';
import CardsView from './cardsView/CardsView';
import dataObj from '../../../dataBase/travelInfo.json';
import {router} from '../../../stack/router';
import {responsiveHeight} from 'react-native-responsive-dimensions';

const Home = ({navigation}) => {
  const [dataOfTravel, setdataOfTravel] = useState([...dataObj]);

  return (
    <SafeAreaView>
      <Header />
      <SearchBar />
      <FilterButtons />

      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={dataOfTravel}
        renderItem={({item}) => (
          <Pressable
            style={{
              height: responsiveHeight(50),
            }}
            onPress={() => {
              navigation.navigate(router.CardDatiles);
            }}>
            <CardsView
              title={item.title_en}
              location={item.location_en}
              image={item.image}
              rating={item.rating}
            />
          </Pressable>
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default Home;
