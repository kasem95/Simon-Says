import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {useDispatch} from 'react-redux';
import {GameComponent} from '../../components';
import {gameActions} from '../../store/features/gameSlice';

const GameScreen = () => {
   const dispatch = useDispatch();
   const _handleStart = () => {
      dispatch(gameActions.startGame());
   };

   return (
      <View style={styles.container}>
         {/* <Text>SIMON SAYS</Text> */}
         <Image
            source={require('../../assets/imgs/simon-says-logo.jpg')}
            style={styles.title}
         />
         <GameComponent />
         <TouchableOpacity onPress={_handleStart}>
            <Text>Start game</Text>
         </TouchableOpacity>
      </View>
   );
};

export default GameScreen;
