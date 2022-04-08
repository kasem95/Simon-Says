import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigtator} from './navigators';
import {Provider} from 'react-redux';
import {store, persistor} from './store';
import {PersistGate} from 'redux-persist/integration/react';
import {I18nManager, LogBox} from 'react-native';
import Orientation from 'react-native-orientation-locker';

I18nManager.allowRTL(false)

const App = () => {
   useEffect(() => {
      I18nManager.forceRTL(false)
      Orientation.lockToPortrait();
      LogBox.ignoreLogs([
         "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
      ]);
   }, []);
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
