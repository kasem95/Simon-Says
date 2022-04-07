import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigtator} from './navigators';
import {Provider} from 'react-redux';
import {store, persistor} from './store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
   return (
      <Provider store={store}>
         <PersistGate persistor={persistor}>
            <SafeAreaProvider>
               <NavigationContainer>
                  <StackNavigtator />
               </NavigationContainer>
            </SafeAreaProvider>
         </PersistGate>
      </Provider>
   );
};

export default App;
