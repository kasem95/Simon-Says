import {View, Image} from 'react-native';
import React, {FC} from 'react';
import styles from './styles';
import {GameComponent} from '../../components';
import {IGameScreen} from '../../interfacesAndTypes';

const GameScreen: FC<IGameScreen> = ({navigation}) => {
   return (
      <View style={styles.container}>
         <Image
            source={require('../../assets/imgs/SimonSays.png')}
            style={styles.title}
         />
         <GameComponent navigation={navigation} />
      </View>
   );
};

export default GameScreen;
