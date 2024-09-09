import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export const style = StyleSheet.create({
  view: {
    backgroundColor: '#00000066',
    marginBottom: 25,
    marginHorizontal: 20,
    height: responsiveHeight(12),
    borderRadius: responsiveWidth(3),
    padding: 10,
  },
  viewOfTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:4
  },
  textOfTitleOne: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  textOfTitleTwo: {
    color: '#CAC8C8',
    marginTop: 7,
    fontSize:14
  },
  viewOfLocation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
