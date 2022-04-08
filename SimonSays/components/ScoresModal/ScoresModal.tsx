import {
   Text,
   Modal,
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

const ScoresModal: FC<IScoresModal> = ({open, setOpen}) => {
   const dispatch = useDispatch();
   const {scoreState, game} = useSelector((state: RootState) => state);
   const [name, set_name] = useState(scoreState.player_name);
   const [error, set_error] = useState('');
   const {height} = useWindowDimensions();

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
      <Modal animationType="slide" transparent={true} visible={open}>
         <View style={[styles.modal, {height: height / 2}]}>
            <Text>Enter your name</Text>
            <TextInput value={name} onChangeText={_handleTextChange} />
            <TouchableOpacity onPress={_handleOnPress}>
               <Text>Submit</Text>
            </TouchableOpacity>
            <Text style={styles.error}>{error}</Text>
         </View>
      </Modal>
   );
};

export default ScoresModal;
