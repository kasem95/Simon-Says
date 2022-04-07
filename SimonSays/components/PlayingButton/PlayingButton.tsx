import {Pressable, useWindowDimensions} from 'react-native';
import React, {FC, useState} from 'react';
import _styles from './styles';
import {IPlayingButton} from '../../interfaces';

const PlayingButton: FC<IPlayingButton> = ({
   color,
   press_color,
   styles,
   disabled,
}) => {
   const [_color, setColor] = useState(color);
   const {width} = useWindowDimensions();

   return (
      <Pressable
        ref={}
         style={[
            styles || _styles.button,
            {
               backgroundColor: _color,
               borderColor: press_color,
            },
         ]}
         onTouchStart={() => setColor(press_color)}
         onTouchEnd={() => setColor(color)}
         disabled={disabled}
      />
   );
};

export default PlayingButton;
