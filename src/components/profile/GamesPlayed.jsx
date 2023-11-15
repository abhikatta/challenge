import {View, Text} from 'react-native';
import React from 'react';

const GamesPlayed = () => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        // justifyContent: 'center',
        paddingVertical: 70,
        alignItems: 'center',
      }}>
      <Text
        style={{
          color: 'black',
          fontFamily: 'Montserrat',
          textAlign: 'center',
        }}>
        This is the games played screen.
      </Text>
    </View>
  );
};

export default GamesPlayed;
