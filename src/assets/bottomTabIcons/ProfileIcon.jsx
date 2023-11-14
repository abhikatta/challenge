import React from 'react';
import {Svg, Path} from 'react-native-svg';

const ProfileScreenIcon = ({fillColor}) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 12C14.7617 12 17 9.76172 17 7C17 4.23828 14.7617 2 12 2C9.23828 2 7 4.23828 7 7C7 9.76172 9.23828 12 12 12ZM15.5 13.25H14.8477C13.9805 13.6484 13.0156 13.875 12 13.875C10.9844 13.875 10.0234 13.6484 9.15234 13.25H8.5C5.60156 13.25 3.25 15.6016 3.25 18.5V20.125C3.25 21.1602 4.08984 22 5.125 22H18.875C19.9102 22 20.75 21.1602 20.75 20.125V18.5C20.75 15.6016 18.3984 13.25 15.5 13.25Z"
        fill={fillColor}
      />
    </Svg>
  );
};

export default ProfileScreenIcon;
