import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import LeaguesScreen from './src/screens/LeaguesScreen';
import ResearchScreen from './src/screens/ResearchScreen';
import LeaderBoardScreen from './src/screens/LeaderBoardScreen';
import ProfileScreen from './src/screens/ProfileScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Image, View} from 'react-native';
import Screen1 from './src/screens/Screen1';

// svg icons:
// import HomeScreenIcon from './src/assets/bottomTabIcons/homeIcon.svg';
import HomeScreenIcon from './src/assets/bottomTabIcons/HomeIcon';
import LeaguesScreenIcon from './src/assets/bottomTabIcons/LeaguesIcon';
import ResearchScreenIcon from './src/assets/bottomTabIcons/ResearchIcon';
import LeaderBoardScreenIcon from './src/assets/bottomTabIcons/LeaderBoardIcon';
import ProfileScreenIcon from './src/assets/bottomTabIcons/ProfileIcon';

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
            color: '#6231AD',

            marginTop: Platform.OS === 'ios' ? '5%' : '10%',
          },
          tabBarLabelStyle: {
            bottom: '10%',
            width: 100,
          },
          tabBarActiveTintColor: '#6231AD',
          tabBarInactiveTintColor: '#B5C0C8',
        }}>
        <BottomTabNavigator.Screen
          options={{
            tabBarIcon: ({focused}) => (
              <View>
                <HomeScreenIcon fillColor={focused ? '#6231AD' : '#B5C0C8'} />
              </View>
            ),
          }}
          name="Home"
          component={HomeScreen}
        />
        <BottomTabNavigator.Screen
          options={{
            tabBarIcon: ({focused}) => (
              <View>
                <LeaguesScreenIcon
                  fillColor={focused ? '#6231AD' : '#B5C0C8'}
                />
              </View>
            ),
          }}
          name="Leagues"
          component={LeaguesScreen}
        />
        <BottomTabNavigator.Screen
          options={{
            tabBarIcon: ({focused}) => (
              <View>
                <ResearchScreenIcon
                  fillColor={focused ? '#6231AD' : '#B5C0C8'}
                />
              </View>
            ),
          }}
          name="Research"
          component={ResearchScreen}
        />
        <BottomTabNavigator.Screen
          options={{
            tabBarIcon: ({focused}) => (
              <View>
                <LeaderBoardScreenIcon
                  fillColor={focused ? '#6231AD' : '#B5C0C8'}
                />
              </View>
            ),
          }}
          name="Leaderboard"
          component={LeaderBoardScreen}
        />
        <BottomTabNavigator.Screen
          options={{
            tabBarIcon: ({focused}) => (
              <View>
                <ProfileScreenIcon
                  fillColor={focused ? '#6231AD' : '#B5C0C8'}
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
