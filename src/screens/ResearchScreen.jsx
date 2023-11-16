import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
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
import ResearchCardContainerComponent from '../components/research/ResearchCardContainerComponent';

const ResearchScreen = () => {
  const [popUpClicked, setPopUpClicked] = useState(false);
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const handlePopUpComponent = () => {
    setPopUpClicked(prev => !prev);
    setScrollEnabled(prev => !prev);
  };

  return (
    <View style={{width: Dimensions.get('screen').width}}>
      <Text style={ResearchScreenStyle.Title}>Today's Games</Text>
      <ScrollView
        scrollEnabled={scrollEnabled}
        style={{
          marginVertical: 51 / 2,
          // marginTop: 51,
        }}>
        <ResearchCardContainerComponent
          researchData={researchData[0]}
          handlePopUpComponent={handlePopUpComponent}
        />

        <ResearchCardContainerComponent
          researchData={researchData[1]}
          handlePopUpComponent={handlePopUpComponent}
        />

        <ResearchCardContainerComponent
          researchData={researchData[2]}
          handlePopUpComponent={handlePopUpComponent}
        />
      </ScrollView>
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
