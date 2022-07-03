import React, {useEffect} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {fetchPhotos} from '../../API/photos';
import ListItem from './ListItem/ListItem';
import {COLORS, SIZES} from '../../../constants';

const List = ({navigation}) => {
  const dataPhoto = useSelector(state => state.photos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhotos());
  }, []);

  return (
    <View style={styles.list}>
      {dataPhoto.length > 0 ? (
        <FlatList
          numColumns={2}
          data={dataPhoto}
          renderItem={({item}) => (
            <ListItem key={item.id} item={item} navigation={navigation} />
          )}
        />
      ) : (
        <Text style={styles.text}>No photos...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    alignItems: 'center',
  },

  text: {
    marginTop: 20,
    color: COLORS.textSecondary,
    fontSize: SIZES.h2,
  },
});

export default List;
