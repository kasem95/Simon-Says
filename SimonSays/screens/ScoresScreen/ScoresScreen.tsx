import {
   FlatList,
   ListRenderItem,
   useWindowDimensions,
   View,
} from 'react-native';
import React, {FC, useState} from 'react';
import styles from './styles';
import {Score, ScoresModal} from '../../components';
import {IScoresScreen, ScoreType} from '../../interfacesAndTypes';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';

const ScoresScreen: FC<IScoresScreen> = () => {
   const [openModal, setOpenModal] = useState(true);
   const {scores} = useSelector((state: RootState) => state.scoreState);
   const {width} = useWindowDimensions();

   const renderScore: ListRenderItem<ScoreType> = ({item}) => {
      return <Score player_name={item.player_name} score={item.score} />;
   };

   const sortScores = () => {
      let _scores = [...scores];
      return _scores.sort((a, b) => b.score - a.score);
   };

   return (
      <View style={styles.container}>
         <ScoresModal open={openModal} setOpen={setOpenModal} />
         <FlatList
            data={sortScores()}
            renderItem={renderScore}
            style={[styles.list, {width: width}]}
         />
      </View>
   );
};

export default ScoresScreen;
