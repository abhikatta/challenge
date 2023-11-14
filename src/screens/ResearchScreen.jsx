import {View, Image, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import ResearchScreenStyle from '../styles/researchStyle';
import LinearGradient from 'react-native-linear-gradient';
import ClockIcon from '../assets/researchScreen/clockIcon';
import InfoIcon from '../assets/researchScreen/infoIcon';
import EllipseIcon from '../assets/researchScreen/ellipseIcon.svg';
import researchData from '../components/research/researchData';
import researchStyle from '../styles/researchStyle';
import ArrowIcon from '../assets/researchScreen/ArrowIcon';
import PersonIcon from '../assets/researchScreen/PersonIcon';
import ChartIcon from '../assets/researchScreen/ChartIcon';

const ResearchScreen = () => {
  const [underWidth, setUnderWidth] = useState(null);
  const [overWidth, setOverWidth] = useState(null);
  useEffect(() => {
    const ratioUnder =
      researchData.noOfPlayersPredictedUnder / researchData.totalPlayers;
    const underLineWidth = ratioUnder * 100;
    const ratioOver =
      researchData.noOfPlayersPredictedAbove / researchData.totalPlayers;
    const overLineWidth = ratioOver * 100;

    console.log(`${underWidth + overWidth}%`);
    console.log(underLineWidth + overLineWidth);

    setUnderWidth(underLineWidth);

    setOverWidth(overLineWidth);
  }, [
    researchData.noOfPlayersPredictedAbove,
    researchData.noOfPlayersPredictedUnder,
  ]);
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
        <View style={researchStyle.prediction}>
          <View>
            <Text style={researchStyle.descriptionHeader}>PRIZE POOL</Text>
            <Text style={researchStyle.descriptionContent}>
              ${researchData.prizePool}
            </Text>
          </View>
          <View>
            <Text style={researchStyle.descriptionHeader}>UNDER</Text>
            <Text style={researchStyle.descriptionContent}>
              {researchData.under}x
            </Text>
          </View>
          <View>
            <Text style={researchStyle.descriptionHeader}>OVER</Text>
            <Text style={researchStyle.descriptionContent}>
              {researchData.over}x
            </Text>
          </View>
          <View>
            <Text style={researchStyle.descriptionHeader}>ENTRY FEES</Text>
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: 5,
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              <Text style={researchStyle.descriptionContent}>
                {researchData.entryFees}
              </Text>
              <View
                style={{
                  backgroundColor: '#FFD600',
                  borderRadius: 100,
                  width: 15,
                  height: 15,
                }}></View>
            </View>
          </View>
        </View>

        <Text style={researchStyle.predictionQuestion}>
          What's your prediction?
        </Text>
        <View style={researchStyle.predictionButtonContainer}>
          <TouchableOpacity
            style={[
              researchStyle.predictionButton,
              {
                backgroundColor: '#452C55',
                marginRight: 17.5 / 2,
              },
            ]}>
            <ArrowIcon rotation={0} />
            <Text style={researchStyle.predictionButtonText}>Under</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              researchStyle.predictionButton,
              {
                backgroundColor: '#6231AD',
                marginLeft: 17.5 / 2,
              },
            ]}>
            <ArrowIcon rotation={180} />
            <Text style={researchStyle.predictionButtonText}>Over</Text>
          </TouchableOpacity>
        </View>
        {/* bottom card */}
        <View style={researchStyle.bottomCardContainer}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View style={researchStyle.bottomCardTotalChart}>
              <PersonIcon />
              <Text style={{color: 'black', marginLeft: 8}}>
                {researchData.totalPlayers}
              </Text>
            </View>
            <View style={researchStyle.bottomCardTotalChart}>
              <ChartIcon />
              <Text style={{color: 'black', marginLeft: 8}}>View chart</Text>
            </View>
          </View>

          <View
            style={[researchStyle.bar, {width: `${underWidth + overWidth}%`}]}>
            <View
              style={{
                borderColor: 'red',
                height: 2,
                borderWidth: 2,
                width: underWidth,
              }}></View>
            <View
              style={{
                borderColor: 'blue',
                height: 2,
                borderWidth: 2,
                width: overWidth,
              }}></View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ResearchScreen;
