import {configureStore} from '@reduxjs/toolkit';
import gameReducer, {gameActions} from './features/gameSlice';
import scoreReducer, {change_player_name} from './features/scoreSlice';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfigure = {
   key: 'scores',
   storage: AsyncStorage,
   whitelist: ['scores'],
};

const persistedScoreReducer = persistReducer(persistConfigure, scoreReducer);

export const store = configureStore({
   reducer: {
      game: gameReducer,
      scoreState: persistedScoreReducer,
   },
   middleware: getDefaulMiddleware =>
      getDefaulMiddleware({
         serializableCheck: false,
      }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export const actions = {
   change_player_name: change_player_name,
   gameActions: gameActions,
};
