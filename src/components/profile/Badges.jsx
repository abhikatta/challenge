import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import homeStyle from '../../styles/homeStyle';
import data from './profiledata';
import AchievementIcon from '../../assets/profileScreen/achievementImg.svg';
const Badges = ({fromProfile}) => {
  const acheivementsTitles = [...data.acheivements.title];
  const acheivementsContent = [...data.acheivements.content];
  const acheivementTimesAchieved = [...data.acheivements.achieved];
  return (
    // workaround for vertical rendering bug in homescreen
    <View style={[homeStyle.container, {paddingTop: fromProfile ? '' : 60}]}>
      <ScrollView scrollToOverflowEnabled={true}>
        {acheivementsTitles.map((v, i) => {
          return (
            <View style={homeStyle.cardContainer} key={i}>
              <AchievementIcon />
              <View style={homeStyle.cardTextContainer}>
                <Text style={homeStyle.acheivementsTitle}>
                  {v}
                  <Text style={homeStyle.acheivementTimesAchieved}>
                    {/* only render if acheivementTimesAchieved 
                  is greater than 1 */}
                    {acheivementTimesAchieved[i] > 1 && ' x'}
                    {acheivementTimesAchieved[i] > 1 &&
                      acheivementTimesAchieved[i]}
                  </Text>
                </Text>

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

export default Badges;
