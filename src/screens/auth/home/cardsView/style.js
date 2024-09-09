import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export const style = StyleSheet.create({
  viwe: {
    marginTop: 30,
    width: responsiveWidth(60),
    height: responsiveHeight(45),
    borderRadius: responsiveWidth(6),
    marginLeft: 30,
    marginRight: 7,
    paddingVertical: 13,
    flex: 1,
    justifyContent: 'space-between',
    position: 'relative',
  },
  image: {
    width: responsiveWidth(60),
    height: responsiveHeight(45),
    borderRadius: responsiveWidth(6),
    position: 'absolute',
  },
});
