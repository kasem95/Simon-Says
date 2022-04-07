import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type SequenceType = 'red' | 'blue' | 'green' | 'yellow';

const gameSlice = createSlice({
   initialState: {
      score: 0,
      simon_seq: [] as SequenceType[],
      player_seq: [] as SequenceType[],
      start: false,
      failed: false,
   },
   name: 'game',
   reducers: {
      startGame: state => {
         state.start = true;
      },
      stopGame: state => {
         state.start = false;
      },
      gameFailed: state => {
         state.failed = false;
         state.simon_seq = [];
         state.player_seq = [];
      },
      addToSimonSeq: state => {
         const colors: SequenceType[] = ['red', 'blue', 'green', 'yellow'];

         // get a random color from the four colors
         const random_color = colors[Math.floor(Math.random() * colors.length)];

         state.simon_seq.push(random_color);
      },
      addToPlayerSeq: (state, action: PayloadAction<SequenceType>) => {
         state.player_seq.push(action.payload);
      },
      scoreIncrement: state => {
         state.score++;
      },
   },
});

export const gameActions = gameSlice.actions;
export default gameSlice.reducer;
