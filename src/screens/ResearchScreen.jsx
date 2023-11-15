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
import PopUpComponent from '../components/research/PopUpComponent';

const ResearchScreen = () => {
  const [underWidth, setUnderWidth] = useState(0);
  const [overWidth, setOverWidth] = useState(0);
  const [popUpClicked, setPopUpClicked] = useState(false);

  const handlePopUpComponent = () => {
    setPopUpClicked(prev => !prev);
  };

  useEffect(() => {
    // calcs the correct width for the bar in proportions
    const totalWidth = 100;

    const ratioUnder =
      researchData.noOfPlayersPredictedUnder / researchData.totalPlayers;
    const underLineWidth = ratioUnder * totalWidth;

    const ratioOver =
      researchData.noOfPlayersPredictedAbove / researchData.totalPlayers;
    const overLineWidth = ratioOver * totalWidth;

    setUnderWidth(underLineWidth);
    setOverWidth(overLineWidth);
  }, [
    researchData.noOfPlayersPredictedAbove,
    researchData.noOfPlayersPredictedUnder,
  ]);

  return (
    <View>
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
            onPress={handlePopUpComponent}
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
            onPress={handlePopUpComponent}
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
              width: 233,
              justifyContent: 'space-around',
            }}>
            <View
              style={[
                researchStyle.bottomCardTotalChart,
                {marginRight: 47.5, left: -15},
              ]}>
              <PersonIcon />
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'Montserrat',
                  marginLeft: 8,
                }}>
                {researchData.totalPlayers} Players
              </Text>
            </View>
            <View
              style={[
                researchStyle.bottomCardTotalChart,
                {marginLeft: 47.5, right: -15},
              ]}>
              <ChartIcon />
              <Text
                style={{
                  color: 'black',
                  marginLeft: 8,
                  fontFamily: 'Montserrat',
                }}>
                View chart
              </Text>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              flex: 1,
            }}>
            <View style={{flexDirection: 'row', width: 311}}>
              <View
                style={{
                  borderColor: '#FE4190',
                  height: 10,
                  borderWidth: 1,
                  backgroundColor: '#FE4190',
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                  width: `${underWidth}%`,
                }}
              />
              <View
                style={{
                  borderColor: '#2DABAD',
                  height: 10,
                  borderWidth: 1,
                  backgroundColor: '#2DABAD',
                  borderTopRightRadius: 10,
                  borderBottomRightRadius: 10,
                  width: `${overWidth}%`,
                }}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              bottom: 20,
            }}>
            <Text
              style={[
                researchStyle.predictionStat,
                {marginRight: 39, marginLeft: 15},
              ]}>
              {researchData.noOfPlayersPredictedUnder} predicted under
            </Text>
            <Text
              style={[
                researchStyle.predictionStat,
                {marginLeft: 39, marginRight: 15},
              ]}>
              {researchData.noOfPlayersPredictedAbove} predicted over
            </Text>
          </View>
        </View>
      </View>

      {popUpClicked && (
        <PopUpComponent
          isOpen={popUpClicked}
          handlePopUpComponent={handlePopUpComponent}
        />
      )}
    </View>
  );
};

export default ResearchScreen;
