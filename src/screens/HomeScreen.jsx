import React from 'react';
import Badges from '../components/profile/Badges';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import GamesPlayed from '../components/profile/GamesPlayed';
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
          },
          tabBarLabelStyle: {
            position: 'absolute',
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
            tabBarLabelStyle: {
              fontFamily: 'Montserrat',
              flexDirection: 'column',
              paddingBottom: 20,
              fontSize: 14,
              fontWeight: '600',
            },
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
            tabBarLabelStyle: {
              fontFamily: 'Montserrat',
              paddingBottom: 20,
              fontSize: 14,
              fontWeight: '600',
            },
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
