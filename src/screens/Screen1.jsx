import {View, Text} from 'react-native';
import React from 'react';
import screen1Style from '../styles/Screen1';
import LinearGradient from 'react-native-linear-gradient';
import Svg, {G, Circle, Path} from 'react-native-svg';

const Screen1 = () => {
  return (
    <View style={{backgroundColor: 'white'}}>
      <Text style={screen1Style.cardTitle}>Today's Games</Text>
      <View style={screen1Style.cardContainer}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['rgba(98, 49, 173, 1)', 'rgba(254, 65, 144, 1)']}
          style={screen1Style.headerCardContainer}></LinearGradient>
        <Svg width={13} height={13} viewBox="0 0 13 13" fill="none">
          <G id="Group 12379">
            <Circle id="Ellipse 337" cx="6.5" cy="6.5" r="6" stroke="#D2BAF5" />
            <G id="Union">
              <Path
                d="M5.6875 5.71665C5.6875 5.55096 5.82181 5.41665 5.9875 5.41665H7.0125C7.17819 5.41665 7.3125 5.55096 7.3125 5.71665V9.44998C7.3125 9.61566 7.17819 9.74998 7.0125 9.74998H5.9875C5.82181 9.74998 5.6875 9.61566 5.6875 9.44998V5.71665Z"
                fill="#D2BAF5"
              />
              <Path
                d="M5.6875 3.52081C5.6875 3.07208 6.05127 2.70831 6.5 2.70831C6.94873 2.70831 7.3125 3.07208 7.3125 3.52081C7.3125 3.96954 6.94873 4.33331 6.5 4.33331C6.05127 4.33331 5.6875 3.96954 5.6875 3.52081Z"
                fill="#D2BAF5"
              />
            </G>
          </G>
        </Svg>
        <Text>Starting in</Text>
        <Svg width={14} height={14} viewBox="0 0 14 14" fill="none">
          <G id="Icon/Solid/Clock">
            <Path
              id="Vector"
              d="M7 0C3.13306 0 0 3.13306 0 7C0 10.8669 3.13306 14 7 14C10.8669 14 14 10.8669 14 7C14 3.13306 10.8669 0 7 0ZM8.61169 9.88186L6.12218 8.07258C6.03468 8.00766 5.98387 7.90605 5.98387 7.79879V3.04839C5.98387 2.8621 6.13629 2.70968 6.32258 2.70968H7.67742C7.86371 2.70968 8.01613 2.8621 8.01613 3.04839V6.93508L9.80847 8.23911C9.96089 8.34919 9.99194 8.56089 9.88186 8.71331L9.08589 9.80847C8.97581 9.95806 8.76411 9.99194 8.61169 9.88186Z"
              fill="#D2BAF5"
            />
          </G>
        </Svg>
      </View>
    </View>
  );
};

export default Screen1;
