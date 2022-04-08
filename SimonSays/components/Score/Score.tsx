import {View, Text, useWindowDimensions} from 'react-native';
import React, {FC} from 'react';
import {IScore} from '../../interfacesAndTypes';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Score: FC<IScore> = ({player_name, score, position}) => {
   const {height} = useWindowDimensions();
   return (
      <View
         style={[
            styles.container,
            {height: height / 10},
            position === 0 && {borderColor: 'orange'},
         ]}>
         <View style={styles.title_medal_wrapper}>
            <Text
               style={[
                  styles.player_name,
                  position === 0 && {color: '#FF8C00'},
                  {fontSize: height / 30},
               ]}>
               {player_name}
            </Text>
            {position === 0 && (
               <Icon name="medal" size={height / 30} color="#FF8C00" />
            )}
         </View>
         <Text style={[styles.score, {fontSize: height / 30}]}>{score}</Text>
      </View>
   );
};

export default Score;
