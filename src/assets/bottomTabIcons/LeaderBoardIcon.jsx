import React from 'react';
import {Svg, Rect} from 'react-native-svg';

const LeaderBoardScreenIcon = ({fillColor}) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Rect x="1" y="7" width="5" height="13" rx="1" fill={fillColor} />
      <Rect x="9" y="3" width="5" height="17" rx="1" fill={fillColor} />
      <Rect x="17" y="11" width="5" height="9" rx="1" fill={fillColor} />
    </Svg>
  );
};

export default LeaderBoardScreenIcon;
