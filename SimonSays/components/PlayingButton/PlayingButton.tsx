import {Pressable, View} from 'react-native';
import React, {FC} from 'react';
import _styles from './styles';
import {IPlayingButton} from '../../interfacesAndTypes';
import {useDispatch, useSelector} from 'react-redux';
import {actions, RootState} from '../../store';

const PlayingButton: FC<IPlayingButton> = ({
   color,
   styles,
   disabled,
   borderColor,
   setColor,
   real_color,
   sound,
   navigation,
   invertedRadius,
}) => {
   const dispatch = useDispatch();
   const {game} = useSelector((state: RootState) => state);

   const _handleOnPress = async () => {
      sound.stop();
      dispatch(actions.gameActions.setPressed(true));

      // play sound when press, after sound played successfully player can press one more time
      sound.play(success => {
         if (success) {
            dispatch(actions.gameActions.setPressed(false));
         }
      });

      // check if color pressed is right
      if (real_color === game.simon_seq[game.step]) {
         dispatch(actions.gameActions.addToPlayerSeq(real_color));
         dispatch(actions.gameActions.incrementStep());
         // check if player sequence length is same as simon's
         if (game.player_seq.length + 1 === game.simon_seq.length) {
            dispatch(actions.gameActions.scoreIncrement());
         }
      } else {
         dispatch(actions.gameActions.gameFailed());
         dispatch(actions.gameActions.stopGame());
         navigation.navigate('ScoresScreen');
      }
   };

   return (
      <Pressable
         style={[
            {
               ...(styles || _styles.button),
               backgroundColor: color,
               borderColor: borderColor,
            },
         ]}
         onTouchStart={() =>
            !disabled && setColor(borderColor)
         }
         onTouchEnd={() => !disabled && setColor(real_color)}
         disabled={disabled}
         onPress={_handleOnPress}
         android_disableSound>
         <View style={invertedRadius} />
      </Pressable>
   );
};

export default PlayingButton;
