import {ColorValue, StyleProp, ViewStyle} from 'react-native';

interface IPlayingButton {
   color: ColorValue;
   press_color: ColorValue;
   styles?: StyleProp<ViewStyle>;
   disabled: boolean;
}

export default IPlayingButton;
