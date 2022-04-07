import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StackNavigtatorParams} from '../interfaces';
import {GameScreen, ScoresScreen} from '../screens';

const Stack = createStackNavigator<StackNavigtatorParams>();

const StackNavigtator = () => {
   return (
      <Stack.Navigator>
         <Stack.Screen
            name="GameScreen"
            component={GameScreen}
            //options={{headerShown: false}}
         />
         <Stack.Screen
            name="ScoresScreen"
            component={ScoresScreen}
            //options={{headerShown: false}}
         />
      </Stack.Navigator>
   );
};

export default StackNavigtator;
