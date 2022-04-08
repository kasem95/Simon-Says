import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
   modal: {
      flex: 1,
      margin: 0,
   },
   modalContent: {
      flex: 0.5,
      backgroundColor: 'white',
      borderRadius: 30,
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
      marginHorizontal: 10,
   },
   button: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      backgroundColor: 'green',
      borderRadius: 30,
      width: 200,
   },
   button_title: {
      color: 'white',
      fontSize: 20,
      textAlign: 'center',
   },
   error: {
      color: 'red',
      textAlign: 'center',
      fontSize: 20,
   },
   title: {
      textAlign: 'center',
      fontSize: 30,
      color: 'black',
   },
   textinputWrapper: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
      backgroundColor: '#f8f7ff',
      paddingHorizontal: 7,
   },
   submit_error_wrapper: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
   },
   textinput: {
      textAlign: 'center',
      fontSize: 24,
      color: 'black',
   }
});

export default styles;
