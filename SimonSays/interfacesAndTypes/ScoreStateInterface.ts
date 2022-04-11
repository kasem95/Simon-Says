import {ScoreType} from './ScoreType';

interface IScoreState {
   player_name: string;
   scores: ScoreType[];
   loading: boolean;
}

export default IScoreState;
