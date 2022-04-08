import {
   Text,
   TextInput,
   TouchableOpacity,
   View,
   useWindowDimensions,
} from 'react-native';
import React, {FC, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState, actions} from '../../store';
import styles from './styles';
import {IScoresModal} from '../../interfacesAndTypes';
import Modal from 'react-native-modal';

const ScoresModal: FC<IScoresModal> = ({open, setOpen}) => {
   const dispatch = useDispatch();
   const {scoreState, game} = useSelector((state: RootState) => state);
   const [name, set_name] = useState(scoreState.player_name);
   const [error, set_error] = useState('');
   const {height, width} = useWindowDimensions();

   const _handleTextChange = (t: string) => {
      set_name(t);
   };

   const _handleOnPress = () => {
      set_error('');
      if (name.length > 0) {
         dispatch(actions.change_player_name(name));
         dispatch(
            actions.addScore({
               player_name: name,
               score: game.score,
            }),
         );
         dispatch(actions.gameActions.resetScore());
         setOpen(false);
      } else {
         set_error('Player name is empty');
      }
   };

   return (
      <Modal
         isVisible={open}
         animationInTiming={1000}
         animationOutTiming={1000}
         backdropTransitionInTiming={800}
         backdropTransitionOutTiming={800}
         backdropOpacity={0.2}
         deviceHeight={height}
         deviceWidth={width}>
         <View style={styles.modalContent}>
            <Text style={styles.title}>Enter your name</Text>
            <View style={[styles.textinputWrapper, {width: width - 150}]}>
               <TextInput
                  style={styles.textinput}
                  value={name}
                  onChangeText={_handleTextChange}
               />
            </View>
            <View style={styles.submit_error_wrapper}>
               <TouchableOpacity onPress={_handleOnPress} style={styles.button}>
                  <Text style={styles.button_title}>Submit</Text>
               </TouchableOpacity>
               <Text style={styles.error}>{error}</Text>
            </View>
         </View>
      </Modal>
   );
};

export default ScoresModal;
