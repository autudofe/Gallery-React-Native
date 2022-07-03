import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const PhotoPage = ({route}) => {
  return (
    <View>
      <Image source={{uri: route.params.regular}} style={styles.img} />
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: '100%',
  },
});

export default PhotoPage;
