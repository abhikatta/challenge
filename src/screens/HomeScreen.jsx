import React from 'react';
import Badges from './homeTabs/Badges';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import GamesPlayed from './homeTabs/GamesPlayed';
import {NavigationContainer} from '@react-navigation/native';
import {View} from 'react-native';

const HomeScreen = () => {
  const BottomTabNavigator = createBottomTabNavigator();
  return (
    <NavigationContainer independent={true}>
      <BottomTabNavigator.Navigator
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: '#6231AD',
          tabBarIconStyle: {
            position: 'absolute',
            bottom: 0,
            // marginBottom: 10,
            marginTop: Platform.OS === 'ios' ? 5 : 10,
          },
          tabBarLabelStyle: {
            height: 'auto',
            top: 0,
            paddingVertical: 20,
            flexDirection: 'column',
            width: 100,
          },
          tabBarStyle: {
            position: 'absolute',
            top: 0,
            width: '100%',
            height: 60,
            backgroundColor: 'white', // Set the background color
          },
        }}>
        <BottomTabNavigator.Screen
          options={{
            unmountOnBlur: true,
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  borderWidth: focused ? 1 : 0,
                  width: 187.5,

                  borderColor: focused ? '#6231AD' : '',
                  height: 2,
                }}></View>
            ),
          }}
          name="Games Played"
          component={GamesPlayed}
        />
        <BottomTabNavigator.Screen
          options={{
            // unmountOnBlur: true,
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  borderWidth: focused ? 1 : 0,
                  borderColor: focused ? '#6231AD' : '',
                  width: 187.5,
                }}></View>
            ),
          }}
          name="Badges"
          component={Badges}
        />
      </BottomTabNavigator.Navigator>
    </NavigationContainer>
  );
};

export default HomeScreen;
