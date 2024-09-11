import {SafeAreaView, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Header from './Header';
import SearchBar from '../../../components/SearchBar';
import FilterButtons from './FilterButtons';
import CardsView from './CardsView';
import dataObj from '../../../dataBase/travelInfo.json';
import {router} from '../../../stack/router';
import {style} from './style';

const Home = ({navigation}) => {
  const [dataOfTravel, setdataOfTravel] = useState([...dataObj]);

  return (
    <SafeAreaView>
      <Header goTo={() => navigation.navigate(router.Profile)} />

      <SearchBar />

      <FilterButtons />

      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={dataOfTravel}
        renderItem={({item}) => (
          <TouchableOpacity
            style={style.Home.TouchableOpacity}
            onPress={() => {
              navigation.navigate(router.CardDatiles, {data: item});
            }}>
            <CardsView
              title={item.title_en}
              location={item.location_en}
              image={item.image}
              rating={item.rating}
            />
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
      
    </SafeAreaView>
  );
};

export default Home;
