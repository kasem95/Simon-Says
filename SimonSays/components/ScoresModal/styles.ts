import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
   modal: {
      margin: 50,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      justifyContent: 'space-between',
   },
   error: {
      color: 'red',
      textAlign: 'center',
      fontSize: 15,
   },
});

export default styles;
