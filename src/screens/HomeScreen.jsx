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
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  borderWidth: focused ? 1.5 : 0,
                  width: 187.5,
                  bottom: 0.75,
                  borderColor: focused ? '#6231AD' : '',
                }}></View>
            ),
          }}
          name="Games Played"
          component={GamesPlayed}
        />
        <BottomTabNavigator.Screen
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  borderWidth: focused ? 1.5 : 0,
                  width: 187.5,
                  bottom: 0.75,
                  borderColor: focused ? '#6231AD' : '',
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
