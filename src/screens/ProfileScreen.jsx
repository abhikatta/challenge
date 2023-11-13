import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import profileStyle from '../styles/profileStyle';
import data from '../components/data';

const ProfileScreen = () => {
  return (
    <View style={profileStyle.container}>
      {/* header */}
      <View style={profileStyle.headerContainer}>
        <TouchableOpacity>
          <Image source={require('../assets/profileScreen/spartanIcon.png')} />
        </TouchableOpacity>
        <Text style={profileStyle.headerTitle}>Profile</Text>
        <View style={profileStyle.messages}>
          <Text style={profileStyle.messageCount}>{data.newMessages}</Text>
          <TouchableOpacity>
            <Image source={require('../assets/profileScreen/commentAlt.png')} />
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
              <Image source={require('../assets/profileScreen/edit.png')} />
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
          <Image source={require('../assets/profileScreen/signOut.png')} />
        </TouchableOpacity>
        <Text style={{color: '#727682', marginLeft: 10}}>Logout</Text>
      </TouchableOpacity>
      {/* stats */}
      <View></View>
    </View>
  );
};

export default ProfileScreen;
