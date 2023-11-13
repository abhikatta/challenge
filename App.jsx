import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import LeaguesScreen from './src/screens/LeaguesScreen';
import ResearchScreen from './src/screens/ResearchScreen';
import LeaderBoardScreen from './src/screens/LeaderBoardScreen';
import ProfileScreen from './src/screens/ProfileScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Image, View} from 'react-native';

const App = () => {
  const BottomTabNavigator = createBottomTabNavigator();
  return (
    <NavigationContainer independent={true}>
      <BottomTabNavigator.Navigator
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarIconStyle: {
            top: '10%',
            padding: '10%',
            marginBottom: '10%',
            marginTop: Platform.OS === 'ios' ? '5%' : '10%',
          },
          tabBarLabelStyle: {
            bottom: '10%',
            width: 100,
          },
          tabBarActiveTintColor: '#6231AD',
        }}>
        <BottomTabNavigator.Screen
          options={{
            // unmountOnBlur: true,
            tabBarIcon: ({focused}) => (
              <View>
                <Image
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#6231AD' : '#B5C0C8',
                  }}
                  source={require('./src/assets/bottomTabIcons/homeicon.png')}
                />
              </View>
            ),
          }}
          name="Home"
          component={HomeScreen}
        />
        <BottomTabNavigator.Screen
          options={{
            // unmountOnBlur: true,
            tabBarIcon: ({focused}) => (
              <View>
                <Image
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#6231AD' : '#B5C0C8',
                  }}
                  source={require('./src/assets/bottomTabIcons/leaguesicon.png')}
                />
              </View>
            ),
          }}
          name="Leagues"
          component={LeaguesScreen}
        />
        <BottomTabNavigator.Screen
          options={{
            // unmountOnBlur: true,
            tabBarIcon: ({focused}) => (
              <View>
                <Image
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#6231AD' : '#B5C0C8',
                  }}
                  source={require('./src/assets/bottomTabIcons/researchicon.png')}
                />
              </View>
            ),
          }}
          name="Research"
          component={ResearchScreen}
        />
        <BottomTabNavigator.Screen
          options={{
            // unmountOnBlur: true,
            tabBarIcon: ({focused}) => (
              <View>
                <Image
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#6231AD' : '#B5C0C8',
                  }}
                  source={require('./src/assets/bottomTabIcons/leaderboardicon.png')}
                />
              </View>
            ),
          }}
          name="Leaderboard"
          component={LeaderBoardScreen}
        />
        <BottomTabNavigator.Screen
          options={{
            // unmountOnBlur: true,
            tabBarIcon: ({focused}) => (
              <View>
                <Image
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#6231AD' : '#B5C0C8',
                  }}
                  source={require('./src/assets/bottomTabIcons/profileicon.png')}
                />
              </View>
            ),
          }}
          name="Profile"
          component={ProfileScreen}
        />
      </BottomTabNavigator.Navigator>
    </NavigationContainer>
  );
};

export default App;
