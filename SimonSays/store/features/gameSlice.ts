import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IGameState, SequenceType} from '../../interfacesAndTypes';

const initialState: IGameState = {
   score: 0,
   simon_seq: [],
   player_seq: [],
   start: false,
   simon_talking: false,
   step: 0,
};

const gameSlice = createSlice({
   initialState: initialState,
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
         state.simon_seq = [];
         state.player_seq = [];
         state.step = 0;
         state.start = false;
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
      incrementStep: state => {
         state.step++;
      },
      resetScore: state => {
         state.score = 0;
      },
      setSimonTalking: (state, action: PayloadAction<boolean>) => {
         state.simon_talking = action.payload;
      },
   },
});

export const gameActions = gameSlice.actions;
export default gameSlice.reducer;
