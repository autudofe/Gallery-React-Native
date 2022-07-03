import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, SIZES} from '../../../../constants';

const ListItem = ({item: {urls, user}, navigation}) => {

  return (
    <TouchableOpacity
      style={[styles.card, styles.shadowProp]}
      onPress={() => navigation.navigate('PhotoPage', urls)}>
      <Image source={{uri: urls.small}} style={styles.img} />
      <Text style={styles.text}>{user.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    flexDirection: 'column',
    alignItems: 'center',
    margin: '1%',
    width: '48%',
    backgroundColor: COLORS.primary,
    borderRadius: 10,
  },
  img: {
    width: '100%',
    height: 260,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },

  text: {
    marginTop: 10,
    marginBottom: 10,
    color: COLORS.textPrimary,
    fontWeight: 'bold',
    fontSize: SIZES.h3,
  },
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
});

export default ListItem;
