import {View, Image, Text} from 'react-native';
import React from 'react';
import ResearchScreenStyle from '../styles/researchStyle';
import LinearGradient from 'react-native-linear-gradient';
import ClockIcon from '../assets/researchScreen/clockIcon';
import InfoIcon from '../assets/researchScreen/infoIcon';
import EllipseIcon from '../assets/researchScreen/ellipseIcon.svg';
import researchData from '../components/research/researchData';
import researchStyle from '../styles/researchStyle';

const ResearchScreen = () => {
  return (
    <View style={{backgroundColor: 'white'}}>
      <Text style={ResearchScreenStyle.Title}>Today's Games</Text>
      <View style={ResearchScreenStyle.cardContainer}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['rgba(98, 49, 173, 1)', 'rgba(254, 65, 144, 1)']}
          style={ResearchScreenStyle.headerCardContainer}>
          <View
            style={{
              bottom: 0,
              right: 0,
              width: 154,
              height: 119,
              position: 'absolute',
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
            }}>
            <EllipseIcon />
            <Image
              style={{
                zIndex: 10,
                position: 'absolute',
              }}
              source={require('../assets/researchScreen/bitcoinImg.png')}
            />
          </View>
          <Text style={researchStyle.cardTitle}>{researchData.cardTitle}</Text>
          <View style={researchStyle.InfoIcon}>
            <InfoIcon />
          </View>
          <Text style={researchStyle.cardStartingIn}>
            {researchData.startingIn}
          </Text>
          <Text style={researchStyle.cardStartingInText}>Starting in</Text>
          <View style={researchStyle.clockIcon}>
            <ClockIcon />
          </View>

          <Text style={researchStyle.bitcoinDescriptionContainer}>
            Bitcoin price will be under{'\n'}
            <Text style={researchStyle.amount}>{researchData.amount}</Text>
            <Text style={researchStyle.timing}>
              {researchData.bitcoinPriceUnderTime}
            </Text>
          </Text>
        </LinearGradient>
      </View>
    </View>
  );
};

export default ResearchScreen;
