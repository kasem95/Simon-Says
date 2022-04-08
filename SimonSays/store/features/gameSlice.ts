import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {SequenceType} from '../../interfacesAndTypes';

const gameSlice = createSlice({
   initialState: {
      score: 0,
      simon_seq: [] as SequenceType[],
      player_seq: [] as SequenceType[],
      start: false,
      failed: false,
      simon_is_talking: false,
      step: 0,
   },
   name: 'game',
   reducers: {
      startGame: state => {
         state.start = true;
      },
      stopGame: state => {
         state.start = false;
         state.player_seq = [];
         state.simon_seq = [];
         state.step = 0;
      },
      gameFailed: state => {
         state.failed = false;
         state.simon_seq = [];
         state.player_seq = [];
         state.step = 0;
      },
      addToSimonSeq: (state, action: PayloadAction<SequenceType>) => {
         state.simon_seq.push(action.payload);
      },
      addToPlayerSeq: (state, action: PayloadAction<SequenceType>) => {
         state.player_seq.push(action.payload);
      },
      scoreIncrement: state => {
         state.score++;
         state.step = 0;
         state.player_seq = [];
      },
      simonStart: state => {
         state.simon_is_talking = true;
      },
      simonStop: state => {
         state.simon_is_talking = false;
      },
      incrementStep: state => {
         state.step++;
      },
      resetScore: state => {
         state.score = 0;
      },
   },
});

export const gameActions = gameSlice.actions;
export default gameSlice.reducer;
