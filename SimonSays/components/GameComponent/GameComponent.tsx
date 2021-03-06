import {
   View,
   Text,
   ColorValue,
   Animated,
   Easing,
   useWindowDimensions,
} from 'react-native';
import React, {FC, useEffect, useRef, useState} from 'react';
import styles from './styles';
import PlayingButton from '../PlayingButton/PlayingButton';
import {IGameComponent, SequenceType} from '../../interfacesAndTypes';
import {useDispatch, useSelector} from 'react-redux';
import {actions, RootState} from '../../store';
import Sound from 'react-native-sound';
import Icon from 'react-native-vector-icons/FontAwesome';

const DARK_RED = '#8B0000';
const DARK_BLUE = '#00008B';
const DARK_GREEN = '#006400';
const DARK_YELLOW = '#CCCC00';

const RED_SOUND = 'https://s3.amazonaws.com/freecodecamp/simonSound1.mp3';
const BLUE_SOUND = 'https://s3.amazonaws.com/freecodecamp/simonSound2.mp3';
const GREEN_SOUND = 'https://s3.amazonaws.com/freecodecamp/simonSound3.mp3';
const YELLOW_SOUND = 'https://s3.amazonaws.com/freecodecamp/simonSound4.mp3';

const GameComponent: FC<IGameComponent> = ({navigation}) => {
   const dispatch = useDispatch();
   const {start, score, simon_seq, simon_talking} = useSelector(
      (state: RootState) => state.game,
   );
   const [press_red_color, set_press_red_color] = useState<ColorValue>('red');
   const [press_blue_color, set_press_blue_color] =
      useState<ColorValue>('blue');
   const [press_green_color, set_press_green_color] =
      useState<ColorValue>('green');
   const [press_yellow_color, set_press_yellow_color] =
      useState<ColorValue>('yellow');
   const [sounds, setSounds] = useState<Sound[]>([]);
   const spinValue = useRef<Animated.Value>(new Animated.Value(0)).current;
   const {width, height} = useWindowDimensions();

   const sleep = (ms: number) => {
      return new Promise(resolve => setTimeout(resolve, ms));
   };

   Sound.setCategory('Playback');

   // load buttons sounds
   useEffect(() => {
      setSounds([
         new Sound(RED_SOUND, Sound.MAIN_BUNDLE, err => {
            if (err) {
               console.log('failed to load the red sound', err);
               return;
            }
         }),
         new Sound(BLUE_SOUND, Sound.MAIN_BUNDLE, err => {
            if (err) {
               console.log('failed to load the blue sound', err);
               return;
            }
         }),
         new Sound(GREEN_SOUND, Sound.MAIN_BUNDLE, err => {
            if (err) {
               console.log('failed to load the green sound', err);
               return;
            }
         }),
         new Sound(YELLOW_SOUND, Sound.MAIN_BUNDLE, err => {
            if (err) {
               console.log('failed to load the yellow sound', err);
               return;
            }
         }),
      ]);

      return () => sounds.forEach(s => s.release());

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   useEffect(() => {
      // spinning animation
      const animation = Animated.loop(
         Animated.timing(spinValue, {
            toValue: 1,
            duration: 3000,
            easing: Easing.linear,
            useNativeDriver: true,
         }),
      );
      // start spinning
      if (!start) {
         animation.start();
      } else {
         // stop spinning
         animation.stop();
         animation.reset();
      }
   }, [spinValue, start]);

   useEffect(() => {
      // function that shows sequence step color on its button and plays color's sound
      const showColorAndPlaySound = (
         color: ColorValue,
         second_color: ColorValue,
         sound: Sound,
         colorSeter: (c: ColorValue) => void,
      ) => {
         colorSeter(second_color);
         sound.play();
         const time_out = setTimeout(() => {
            colorSeter(color);
            clearTimeout(time_out);
         }, 500);
      };

      const simon_says = async () => {
         dispatch(actions.gameActions.setSimonTalking(true));
         // loop through all simon sequence and show player the color and play color's sound
         for (let i = 0; i < simon_seq.length; i++) {
            await sleep(1000);
            if (simon_seq[i] === 'red') {
               showColorAndPlaySound(
                  simon_seq[i],
                  DARK_RED,
                  sounds[0],
                  set_press_red_color,
               );
            } else if (simon_seq[i] === 'blue') {
               showColorAndPlaySound(
                  simon_seq[i],
                  DARK_BLUE,
                  sounds[1],
                  set_press_blue_color,
               );
            } else if (simon_seq[i] === 'green') {
               showColorAndPlaySound(
                  simon_seq[i],
                  DARK_GREEN,
                  sounds[2],
                  set_press_green_color,
               );
            } else if (simon_seq[i] === 'yellow') {
               showColorAndPlaySound(
                  simon_seq[i],
                  DARK_YELLOW,
                  sounds[3],
                  set_press_yellow_color,
               );
            }
         }

         const colors: SequenceType[] = ['red', 'blue', 'green', 'yellow'];

         // get a random color from the four colors and add it in simon's sequence
         const random_color = colors[Math.floor(Math.random() * colors.length)];
         dispatch(actions.gameActions.addToSimonSeq(random_color));

         await sleep(1000);

         if (random_color === 'red') {
            showColorAndPlaySound(
               random_color,
               DARK_RED,
               sounds[0],
               set_press_red_color,
            );
         } else if (random_color === 'blue') {
            showColorAndPlaySound(
               random_color,
               DARK_BLUE,
               sounds[1],
               set_press_blue_color,
            );
         } else if (random_color === 'green') {
            showColorAndPlaySound(
               random_color,
               DARK_GREEN,
               sounds[2],
               set_press_green_color,
            );
         } else if (random_color === 'yellow') {
            showColorAndPlaySound(
               random_color,
               DARK_YELLOW,
               sounds[3],
               set_press_yellow_color,
            );
         }

         await sleep(1000);
         dispatch(actions.gameActions.setSimonTalking(false));
      };

      if (start) {
         simon_says();
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [start, score]);

   const _handleStart = () => {
      dispatch(actions.gameActions.startGame());
   };

   const spin = spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
   });

   return (
      <View
         style={[
            styles.gameWrapper,
            {
               marginBottom: height / 8,
            },
         ]}>
         <Animated.View
            style={[
               styles.game,
               {
                  transform: [{rotate: spin}],
                  width: width - 100,
                  height: width - 100,
                  borderRadius: width - 100,
               },
            ]}>
            <View style={styles.colors_row}>
               <PlayingButton
                  real_color={'green'}
                  color={press_green_color}
                  disabled={!start || simon_talking} // player can't press button if game not started yet or while simon is saying
                  borderColor={DARK_GREEN}
                  setColor={set_press_green_color}
                  sound={sounds[2]}
                  navigation={navigation}
                  styles={{
                     ...styles.green_button,
                     borderTopLeftRadius: (width - 100) / 2,
                  }}
                  invertedRadius={{
                     ...styles.green_button_inverted,
                     height: width / 10,
                     width: width / 10,
                     borderTopLeftRadius: (width - 100) / 2,
                  }}
               />
               <PlayingButton
                  real_color={'red'}
                  color={press_red_color}
                  disabled={!start || simon_talking} // player can't press button if game not started yet or while simon is saying
                  borderColor={DARK_RED}
                  setColor={set_press_red_color}
                  sound={sounds[0]}
                  navigation={navigation}
                  styles={{
                     ...styles.red_button,
                     borderTopRightRadius: (width - 100) / 2,
                  }}
                  invertedRadius={{
                     ...styles.red_button_inverted,
                     height: width / 10,
                     width: width / 10,
                     borderTopRightRadius: (width - 100) / 2,
                  }}
               />
            </View>

            <View style={styles.colors_row}>
               <PlayingButton
                  real_color={'yellow'}
                  color={press_yellow_color}
                  disabled={!start || simon_talking} // player can't press button if game not started yet or while simon is saying
                  borderColor={DARK_YELLOW}
                  setColor={set_press_yellow_color}
                  sound={sounds[3]}
                  navigation={navigation}
                  styles={{
                     ...styles.yellow_button,
                     borderBottomLeftRadius: (width - 100) / 2,
                  }}
                  invertedRadius={{
                     ...styles.yellow_button_inverted,
                     height: width / 10,
                     width: width / 10,
                     borderBottomLeftRadius: (width - 100) / 2,
                  }}
               />

               <PlayingButton
                  real_color={'blue'}
                  color={press_blue_color}
                  disabled={!start || simon_talking} // player can't press button if game not started yet or while simon is saying
                  borderColor={DARK_BLUE}
                  setColor={set_press_blue_color}
                  sound={sounds[1]}
                  navigation={navigation}
                  styles={{
                     ...styles.blue_button,
                     borderBottomRightRadius: (width - 100) / 2,
                  }}
                  invertedRadius={{
                     ...styles.blue_button_inverted,
                     height: width / 10,
                     width: width / 10,
                     borderBottomRightRadius: (width - 100) / 2,
                  }}
               />
            </View>
         </Animated.View>
         <View
            style={[
               styles.play,
               {
                  width: width / 6,
                  height: width / 6,
                  borderRadius: width / 6 / 2,
               },
            ]}>
            {!start ? (
               <Icon
                  name="play"
                  size={width / 10}
                  color="white"
                  onPress={_handleStart}
                  style={styles.playIcon}
               />
            ) : (
               <Text style={styles.score}>{score}</Text>
            )}
         </View>
      </View>
   );
};

export default GameComponent;
