import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type ScoreType = {
   player_name: string;
   score: number;
};

const scoreSlice = createSlice({
   initialState: {
      player_name: 'player',
      scores: [] as ScoreType[],
   },
   name: 'scoreState',
   reducers: {
      change_player_name: (state, action: PayloadAction<string>) => {
         state.player_name = action.payload;
      },
   },
});

export const {change_player_name} = scoreSlice.actions;
export default scoreSlice.reducer;
