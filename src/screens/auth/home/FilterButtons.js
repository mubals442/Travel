import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import ButtonUi from '../../../components/ButtonUi';
import {style} from './style';

const FilterButtons = () => {
  const [activeFilter, setActiveFilter] = useState('Most Viewed'); // Default active filter

  const filter = ['Most Viewed', 'Nearby', 'Latest'];

  return (
    <SafeAreaView style={style.FilterButtons.SafeAreaView}>
      <View style={style.FilterButtons.ViewOne}>
        <Text style={style.FilterButtons.TextOne}>Popular places</Text>
        <TouchableOpacity
          onPress={() => {
            console.log('View all');
          }}>
          <Text style={style.FilterButtons.TextTwo}>View all</Text>
        </TouchableOpacity>
      </View>

      <View style={style.FilterButtons.ViewTwo}>
        {filter.map((item, index) => {
          return (
            <ButtonUi
              key={index}
              text={item}
              backgroundColor={activeFilter === item ? '#2F2F2F' : '#FBFBFB'}
              color={activeFilter === item ? '#ffffff' : '#C5C5C5'}
              press={() => {
                setActiveFilter(item), console.log(item);
              }}
            />
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default FilterButtons;
