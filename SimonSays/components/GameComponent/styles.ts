import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
   game: {
      backgroundColor: 'gray',
      padding: 10,
      alignSelf: 'center',
   },
   gameWrapper: {
      position: 'absolute',
      right: 0,
      bottom: 0,
      left: 0,
      justifyContent: 'center',
      alignItems: 'center',
   },
   score: {textAlign: 'center', color: 'white', fontSize: 30},
   play: {
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      alignSelf: 'center',
      position: 'absolute',
      zIndex: 200,
   },
   colors_row: {
      flex: 0.5,
      flexDirection: 'row',
      justifyContent: 'space-between',
   },
   red_button: {
      borderTopRightRadius: 200,
      flex: 0.5,
      borderWidth: 10,
      flexDirection: 'row',
   },
   red_button_inverted: {
      backgroundColor: 'gray',
      borderColor: 'gray',
      borderWidth: 5,
      transform: [{translateY: 11}, {translateX: -11}],
      alignSelf: 'flex-end',
   },
   blue_button: {flex: 0.5, borderWidth: 10},
   blue_button_inverted: {
      backgroundColor: 'gray',
      alignSelf: 'flex-start',
      borderColor: 'gray',
      borderWidth: 5,
      transform: [{translateY: -11}, {translateX: -11}],
   },
   green_button: {
      flex: 0.5,
      borderWidth: 10,
      flexDirection: 'row',
      justifyContent: 'flex-end',
   },
   green_button_inverted: {
      backgroundColor: 'gray',
      borderColor: 'gray',
      borderWidth: 5,
      transform: [{translateY: 11}, {translateX: 11}],
      alignSelf: 'flex-end',
   },
   yellow_button: {flex: 0.5, borderWidth: 10},
   yellow_button_inverted: {
      backgroundColor: 'gray',
      borderColor: 'gray',
      borderWidth: 5,
      transform: [{translateY: -11}, {translateX: 11}],
      alignSelf: 'flex-end',
   },
   playIcon: {
      marginLeft: 5,
   },
});

export default styles;
