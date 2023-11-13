import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import data from '../components/data';
import homeStyle from '../styles/homeStyle';

const HomeScreen = () => {
  const acheivementsTitles = [...data.acheivements.title];
  const acheivementsContent = [...data.acheivements.content];

  return (
    <View style={homeStyle.container}>
      <ScrollView scrollToOverflowEnabled={true}>
        {acheivementsTitles.map((v, i) => {
          return (
            <View style={homeStyle.cardContainer} key={i}>
              <Image
                source={require('../assets/homeScreen/achievementImg.png')}
              />
              <View style={homeStyle.cardTextContainer}>
                <Text style={homeStyle.acheivementsTitle}>{v}</Text>
                <Text style={homeStyle.acheivementsContent}>
                  {acheivementsContent[i]}
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
