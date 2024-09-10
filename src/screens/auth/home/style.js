import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export const style = StyleSheet.create({
  Home: {
    TouchableOpacity: {
      height: responsiveHeight(50),
    },
  },
  Header: {
    SafeAreaView: {
      marginHorizontal: 30,
      marginTop: 15,
      flexDirection: 'row-reverse',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 13,
    },
    View: {
      backgroundColor: 'gray',
      width: responsiveWidth(12),
      height: responsiveWidth(12),
      borderRadius: responsiveWidth(100) / 2,
    },
    Image: {
      width: responsiveWidth(12),
      height: responsiveWidth(12),
      borderRadius: responsiveWidth(100) / 2,
    },
    TextOne: {
      fontWeight: 'bold',
      fontSize: 30,
      color: 'black',
    },
    TextTwo: {
      fontSize: 20,
    },
  },
  SearchBar: {
    SafeAreaView: {
      marginHorizontal: 30,
      marginTop: 15,
      marginBottom: 13,
      position: 'relative',
    },
    TextInput: {
      borderWidth: 2,
      borderColor: '#D2D2D2',
      color: '#888888',
      width: '100%',
      paddingLeft: 30,
      height: responsiveHeight(7),
      borderRadius: responsiveWidth(4),
      fontSize: 19,
    },
    Image: {position: 'absolute', right: 80, top: 12, zIndex: 999},
    TouchableOpacity: {position: 'absolute', right: 30, top: 16},
  },
  FilterButtons: {
    SafeAreaView: {marginTop: 30},
    ViewOne: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 30,
      marginBottom: 38,
    },
    TextOne: {
      fontWeight: 'bold',
      fontSize: 20,
      color: 'black',
    },
    TextTwo: {
      color: '#888888',
      fontWeight: '600',
      fontSize: 19,
    },
    ViewTwo: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginLeft: 30,
      marginRight: 8,
    },
  },
  CardsView: {
    ViewOne: {
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
    Image: {
      width: responsiveWidth(60),
      height: responsiveHeight(45),
      borderRadius: responsiveWidth(6),
      position: 'absolute',
    },
    ViewTwo: {flexDirection: 'row-reverse', marginRight: 12},
  },
});
