import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export const style = StyleSheet.create({
  view: {
    backgroundColor: 'lightblue',
    height: responsiveHeight(50),
    borderRadius: responsiveWidth(5),
    margin: 30,
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
  },
  image: {
    width: '100%',
    height: responsiveHeight(50),
    borderRadius: responsiveWidth(5),
    position: 'absolute',
  },
  viewOfButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
  },
});
