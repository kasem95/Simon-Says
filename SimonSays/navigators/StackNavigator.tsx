import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StackNavigtatorParams} from '../interfacesAndTypes';
import {GameScreen, ScoresScreen} from '../screens';

const Stack = createStackNavigator<StackNavigtatorParams>();

const StackNavigtator = () => {
   return (
      <Stack.Navigator initialRouteName="GameScreen">
         <Stack.Screen
            name="GameScreen"
            component={GameScreen}
            options={{headerShown: false}}
         />
         <Stack.Screen
            name="ScoresScreen"
            component={ScoresScreen}
            options={{
               headerTitle: 'Scores Screen',
               headerTitleStyle: {
                  fontSize: 24,
                  textAlign: 'left',
               },
               headerStyle: {
                  shadowColor: '#000',
                  shadowOffset: {
                     width: 0,
                     height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 4,
                  elevation: 5,
                  height: 80,
               },
            }}
         />
      </Stack.Navigator>
   );
};

export default StackNavigtator;
