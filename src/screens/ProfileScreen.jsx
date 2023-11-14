import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import profileStyle from '../styles/profileStyle';
import data from '../components/profile/profiledata';

import SpartanIcon from '../assets/profileScreen/spartanIcon.svg';
import CommentAltIcon from '../assets/profileScreen/commentAlt.svg';
import EditIcon from '../assets/profileScreen/editIcon.svg';
import YellowStarThingIcon from '../assets/profileScreen/yellowStarThingIcon.svg';
import UpArrowGreenIcon from '../assets/profileScreen/upArrowGreenIcon.svg';
import DownArrowRedIcon from '../assets/profileScreen/downArrowRedIcon.svg';
import SignOutIcon from '../assets/profileScreen/signOutIcon.svg';
import Badges from '../components/profile/Badges';
import GamesPlayed from '../components/profile/GamesPlayed';
const ProfileScreen = () => {
  const [subScreen, setSubScreen] = useState(null);
  const handleGamesPlayedScreen = () => {
    setSubScreen('gamesplayed');
  };
  const handleBadgesScreen = () => {
    setSubScreen('badges');
  };
  return (
    <View style={profileStyle.container}>
      <ScrollView scrollToOverflowEnabled={true}>
        {/* header */}
        <View style={profileStyle.headerContainer}>
          <TouchableOpacity>
            <SpartanIcon />
          </TouchableOpacity>
          <Text style={profileStyle.headerTitle}>Profile</Text>
          <View style={profileStyle.messages}>
            <TouchableOpacity>
              <Text style={profileStyle.messageCount}>{data.newMessages}</Text>
              <CommentAltIcon />
            </TouchableOpacity>
          </View>
        </View>
        {/* profilesection */}
        <View style={profileStyle.section}>
          <Image
            style={profileStyle.profileImg}
            source={require('../assets/profileScreen/profileImg.png')}
          />

          <TouchableOpacity>
            <View style={profileStyle.editPFPButton}>
              <View style={profileStyle.editPFP}>
                <EditIcon />
              </View>
            </View>
          </TouchableOpacity>
          <Text style={{color: '#333'}}>{data.name}</Text>
          <Text style={{color: '#727682'}}>{data.points}</Text>
          <Text style={profileStyle.description}>{data.description}</Text>
        </View>
        {/* logoutbutton */}
        <TouchableOpacity
          onPress={() => {
            Alert.alert('', 'Yet to be implemented');
          }}
          style={profileStyle.logoutButton}>
          <TouchableOpacity>
            <SignOutIcon />
          </TouchableOpacity>
          <Text style={{color: '#727682', marginLeft: 10}}>Logout</Text>
        </TouchableOpacity>
        {/* stats */}
        <View style={profileStyle.yellowStarThing}>
          <YellowStarThingIcon />
        </View>
        <View style={profileStyle.stats}>
          <View style={profileStyle.statistic}>
            <Text style={profileStyle.statsTitle}>{data.stats1Title}</Text>
            <View style={profileStyle.innerStatistic}>
              <DownArrowRedIcon />
              <Text style={profileStyle.statsPercentage}>
                {data.stats1Percentage}%
              </Text>
            </View>
          </View>
          <View style={profileStyle.statistic}>
            <Text style={profileStyle.statsTitle}>{data.stats2Title}</Text>
            <View style={profileStyle.innerStatistic}>
              <UpArrowGreenIcon />
              <Text style={profileStyle.statsPercentage}>
                {data.stats2Percentage}%
              </Text>
            </View>
          </View>
          <Text>{data.stats1}</Text>
        </View>
        <View style={profileStyle.achievementsButtonContainer}>
          <TouchableOpacity
            onPress={handleGamesPlayedScreen}
            style={[
              profileStyle.achievementsButton,
              {
                borderBottomColor: subScreen === 'gamesplayed' ? '#6231AD' : '',
                borderBottomWidth: subScreen === 'gamesplayed' ? 1.5 : 0,
              },
            ]}>
            <Text
              style={[
                profileStyle.achievementsButtonText,
                {
                  color: subScreen === 'gamesplayed' ? '#6231AD' : '#727682',
                },
              ]}>
              Games Played
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleBadgesScreen}
            style={[
              profileStyle.achievementsButton,
              {
                borderBottomColor: subScreen === 'badges' ? '#6231AD' : '',
                borderBottomWidth: subScreen === 'badges' ? 1.5 : 0,
              },
            ]}>
            <Text
              style={[
                profileStyle.achievementsButtonText,
                {color: subScreen === 'badges' ? '#6231AD' : '#727682'},
              ]}>
              Badges
            </Text>
          </TouchableOpacity>
        </View>
        <View
        // style={{
        //   paddingBottom: 20,
        // }}
        >
          {subScreen === 'badges' ? (
            <Badges fromProfile={true} />
          ) : (
            <GamesPlayed />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
