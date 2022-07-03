import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import PhotoPage from './src/components/PhotoPage/PhotoPage';
import List from './src/components/List/List';
import {StyleSheet} from 'react-native';
import {COLORS} from './constants';

const Navigate = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={List} options={styles.Home} />
        <Stack.Screen
          name="PhotoPage"
          component={PhotoPage}
          options={styles.PhotoPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  Home: {
    alignItems: 'center',
    title: 'Gallery',
    headerStyle: {
      backgroundColor: COLORS.header,
    },
    headerTintColor: COLORS.textPrimary,
  },
  PhotoPage: {
    title: 'Back',
    headerStyle: {
      backgroundColor: COLORS.header,
    },
    headerTintColor: COLORS.textPrimary,
  },
});

export default Navigate;
