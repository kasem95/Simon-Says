import {View, Text, useWindowDimensions} from 'react-native';
import React, {FC} from 'react';
import {IScore} from '../../interfacesAndTypes';
import styles from './styles';

const Score: FC<IScore> = ({player_name, score}) => {
   const {height} = useWindowDimensions();
   return (
      <View style={[styles.container, {height: height / 10}]}>
         <Text>{player_name}</Text>
         <Text>{score}</Text>
      </View>
   );
};

export default Score;
