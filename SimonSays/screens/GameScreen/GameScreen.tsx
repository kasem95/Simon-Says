import {Image} from 'react-native';
import React, {FC} from 'react';
import styles from './styles';
import {GameComponent} from '../../components';
import {IGameScreen} from '../../interfacesAndTypes';
import { SafeAreaView } from 'react-native-safe-area-context';

const GameScreen: FC<IGameScreen> = ({navigation}) => {
   return (
      <SafeAreaView style={styles.container}>
         <Image
            source={require('../../assets/imgs/SimonSays.png')}
            style={styles.title}
         />
         <GameComponent navigation={navigation} />
      </SafeAreaView>
   );
};

export default GameScreen;
