import {SequenceType} from './SequenceType';

interface IGameState {
   score: number;
   simon_seq: SequenceType[];
   player_seq: SequenceType[];
   start: boolean;
   simon_talking: boolean;
   step: number;
}

export default IGameState;
