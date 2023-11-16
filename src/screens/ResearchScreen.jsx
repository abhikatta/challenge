import {View, Text, ScrollView, Dimensions} from 'react-native';
import React, {useState} from 'react';
import ResearchScreenStyle from '../styles/researchStyle';
import researchData from '../components/research/researchData';
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
        }}>
        {/* this auto render components based on length of the length of the array in researchData */}
        {[...Array(researchData.length)].map((_, i) => {
          return (
            <View key={i}>
              <ResearchCardContainerComponent
                researchData={researchData[i]}
                handlePopUpComponent={handlePopUpComponent}
              />
            </View>
          );
        })}
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
