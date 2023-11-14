import {View, Text} from 'react-native';
import React from 'react';

const LeaderBoardScreen = () => {
  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'center',
        top: '50%',
        alignSelf: 'center',
      }}>
      <Text style={{color: 'black'}}>This is the LeaderBoard Screen</Text>
    </View>
  );
};

export default LeaderBoardScreen;
