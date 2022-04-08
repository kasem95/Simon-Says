import {StackNavigationProp} from '@react-navigation/stack';
import {ColorValue, ViewStyle} from 'react-native';
import Sound from 'react-native-sound';
import StackNavigtatorParams from './StackNavigatorParams';

interface IPlayingButton {
   color: ColorValue;
   borderColor: ColorValue;
   styles: ViewStyle;
   disabled: boolean;
   setColor: (v: ColorValue) => void;
   real_color: ColorValue;
   sound: Sound;
   navigation: StackNavigationProp<StackNavigtatorParams>;
   invertedRadius: ViewStyle;
}

export default IPlayingButton;
