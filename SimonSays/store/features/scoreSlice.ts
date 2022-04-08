import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { ScoreType } from '../../interfacesAndTypes';

const scoreSlice = createSlice({
   initialState: {
      player_name: 'player',
      scores: [] as ScoreType[],
      loading: false,
   },
   name: 'scoreState',
   reducers: {
      change_player_name: (state, action: PayloadAction<string>) => {
         state.player_name = action.payload;
      },
      addScore: (state, action: PayloadAction<ScoreType>) => {
         state.scores.push(action.payload);
      },
      setLoading: (state, action: PayloadAction<boolean>) => {
         state.loading = action.payload;
      },
   },
});

export const {change_player_name, addScore, setLoading} = scoreSlice.actions;
export default scoreSlice.reducer;
