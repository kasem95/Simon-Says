import {
   FlatList,
   ListRenderItem,
   Text,
   useWindowDimensions,
   View,
} from 'react-native';
import React, {FC, useCallback, useState} from 'react';
import styles from './styles';
import {Score, ScoresModal} from '../../components';
import {IScoresScreen, ScoreType} from '../../interfacesAndTypes';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';

const ScoresScreen: FC<IScoresScreen> = () => {
   const [openModal, setOpenModal] = useState(true);
   const {scores} = useSelector((state: RootState) => state.scoreState);
   const {width} = useWindowDimensions();

   const renderScore: ListRenderItem<ScoreType> = useCallback(
      ({item, index}) => {
         return (
            <Score
               player_name={item.player_name}
               score={item.score}
               position={index}
            />
         );
      },
      [],
   );

   const _handleKeyExtractor = useCallback((item: ScoreType, index: number) => {
      return index.toString();
   }, []);

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
            keyExtractor={_handleKeyExtractor}
            style={[styles.list, {width: width - 100}]}
            ItemSeparatorComponent={() => <View style={styles.seperator} />}
            ListHeaderComponent={() => <View style={styles.seperator} />}
            ListFooterComponent={() => <View style={styles.seperator} />}
            ListEmptyComponent={() => (
               <Text style={styles.empty}>Scores is empty</Text>
            )}
         />
      </View>
   );
};

export default ScoresScreen;
