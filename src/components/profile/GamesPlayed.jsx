import {View, Text} from 'react-native';
import React from 'react';

const GamesPlayed = () => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          color: 'black',
          textAlign: 'center',
        }}>
        This is the games played screen.
      </Text>
    </View>
  );
};

export default GamesPlayed;
