import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
   container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      padding: 5,
      borderWidth: 2,
      borderRadius: 50,
   },
   player_name: {
      color: 'black',
      fontSize: 20,
      marginRight: 10
   },
   score: {
      color: 'green',
      fontSize: 20,
   },
   title_medal_wrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
   },
});

export default styles;
