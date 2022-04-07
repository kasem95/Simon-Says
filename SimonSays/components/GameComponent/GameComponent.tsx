import {View, Text, useWindowDimensions} from 'react-native';
import React, {FC, useRef} from 'react';
import styles from './styles';
import PlayingButton from '../PlayingButton/PlayingButton';
import {IGameComponent} from '../../interfaces';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';

const GameComponent: FC<IGameComponent> = () => {
   const {width} = useWindowDimensions();
   const {start, score} = useSelector((state: RootState) => state.game);
   const red_button_ref = useRef<React.Ref<View>>(null);
   const blue_button_ref = useRef<React.Ref<View>>(null);
   const green_button_ref = useRef<React.Ref<View>>(null);
   const yellow_button_ref = useRef<React.Ref<View>>(null);

   return (
      <View
         style={[
            {width: width - 50, height: width - 50, borderRadius: width - 50},
            styles.game,
         ]}>
         <PlayingButton
            color={'red'}
            press_color={'#8B0000'}
            disabled={!start}
         />
         <PlayingButton
            color={'green'}
            press_color={'#006400'}
            disabled={!start}
         />
         <Text style={styles.score}>{score}</Text>
         <PlayingButton
            color={'yellow'}
            press_color={'#CCCC00'}
            disabled={!start}
         />
         <PlayingButton
            color={'blue'}
            press_color={'#00008B'}
            disabled={!start}
         />
      </View>
   );
};

export default GameComponent;
