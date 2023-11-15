import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import BottomSheet from 'react-native-simple-bottom-sheet';
import popUpComponentStyle from '../../styles/popUpComponentStyle';

const PopUpComponent = ({isOpen, handlePopUpComponent}) => {
  const arrLen = 50;
  return (
    <View style={popUpComponentStyle.container}>
      <BottomSheet isOpen={isOpen}>
        <>
          <Text style={[popUpComponentStyle.title]}>
            Your Prediction is Under
          </Text>
          <Text style={[popUpComponentStyle.entryTickets]}>ENTRY TICKETS</Text>
          <ScrollView>
            <View style={{height: 60}}></View>

            <View style={popUpComponentStyle.ticketContainer}>
              {[...Array(arrLen)].map((_, index) => (
                <View key={index} style={popUpComponentStyle.ticket}>
                  <Text style={{color: 'black'}}>{index + 1}</Text>
                </View>
              ))}
            </View>
            <View style={{height: 86}}></View>
          </ScrollView>
          <View style={popUpComponentStyle.middleTicketContainer}></View>
          <View style={popUpComponentStyle.bottomContainer}>
            <View>
              <Text
                style={{
                  color: '#B5C0C8',
                  fontFamily: 'Montserrat',
                  fontSize: 12,
                  fontStyle: 'normal',
                  fontWeight: '500',
                  left: 16,
                }}>
                You can win
              </Text>
              <Text
                style={{
                  color: '#03A67F',
                  left: 16,
                }}>
                $2000
              </Text>
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  color: '#727682',
                  fontFamily: 'Montserrat',
                  fontSize: 12,
                  fontStyle: 'normal',
                  right: 54,
                  fontWeight: '500',
                }}>
                Total
              </Text>
              <View
                style={{
                  backgroundColor: '#FFD600',
                  borderRadius: 100,
                  width: 15,
                  height: 15,
                  right: 33,
                }}></View>
              <Text
                style={{
                  color: '#727682',
                  fontFamily: 'Montserrat',
                  fontSize: 12,
                  fontStyle: 'normal',
                  right: 16,
                  fontWeight: '500',
                }}>
                5
              </Text>
            </View>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity
              onPress={handlePopUpComponent}
              style={popUpComponentStyle.submitButton}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 14,
                  fontFamily: 'Montserrat',
                  textAlign: 'center',
                }}>
                Submit my prediction
              </Text>
            </TouchableOpacity>
          </View>
        </>
      </BottomSheet>
    </View>
  );
};
export default PopUpComponent;
