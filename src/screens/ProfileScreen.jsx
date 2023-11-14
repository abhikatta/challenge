import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import profileStyle from '../styles/profileStyle';
import data from '../components/data';

import SpartanIcon from '../assets/profileScreen/spartanIcon.svg';
import CommentAltIcon from '../assets/profileScreen/commentAlt.svg';
import EditIcon from '../assets/profileScreen/editIcon.svg';
import YellowStarThingIcon from '../assets/profileScreen/yellowStarThingIcon.svg';
import UpArrowGreenIcon from '../assets/profileScreen/upArrowGreenIcon.svg';
import DownArrowRedIcon from '../assets/profileScreen/downArrowRedIcon.svg';
import SignOutIcon from '../assets/profileScreen/signOutIcon.svg';
const ProfileScreen = () => {
  return (
    <View style={profileStyle.container}>
      {/* header */}
      <View style={profileStyle.headerContainer}>
        <TouchableOpacity>
          {/* <Image source={require('../assets/profileScreen/spartanIcon.png')} /> */}
          <SpartanIcon />
        </TouchableOpacity>
        <Text style={profileStyle.headerTitle}>Profile</Text>
        <View style={profileStyle.messages}>
          <TouchableOpacity>
            <Text style={profileStyle.messageCount}>{data.newMessages}</Text>
            {/* <Image source={require('../assets/profileScreen/commentAlt.png')} /> */}
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
              {/* <Image source={require('../assets/profileScreen/edit.png')} /> */}
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
          {/* <Image source={require('../assets/profileScreen/signOut.png')} /> */}
          <SignOutIcon />
        </TouchableOpacity>
        <Text style={{color: '#727682', marginLeft: 10}}>Logout</Text>
      </TouchableOpacity>
      {/* stats */}
      <View style={profileStyle.yellowStarThing}>
        {/* <Image
          source={require('../assets/profileScreen/yellowStarThing.png')}
        /> */}
        <YellowStarThingIcon />
      </View>
      <View style={profileStyle.stats}>
        <View style={profileStyle.statistic}>
          <Text style={profileStyle.statsTitle}>{data.stats1Title}</Text>
          <View style={profileStyle.innerStatistic}>
            {/* <Image
              source={require('../assets/profileScreen/downArrowRed.png')}
            /> */}
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
            {/* <Image
              source={require('../assets/profileScreen/upArrowGreen.png')}
            /> */}
            <Text style={profileStyle.statsPercentage}>
              {data.stats2Percentage}%
            </Text>
          </View>
        </View>
        <Text>{data.stats1}</Text>
      </View>
    </View>
  );
};

export default ProfileScreen;
