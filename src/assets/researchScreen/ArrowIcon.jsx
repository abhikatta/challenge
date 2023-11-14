import React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const ArrowIcon = ({rotation}) => {
  return (
    <View>
      <Svg
        width={11}
        height={12}
        rotation={rotation}
        viewBox="0 0 11 12"
        fill="none">
        <Path
          d="M5.80126 11.1568C5.64193 11.3386 5.35899 11.3386 5.19965 11.1568L0.581746 5.88865C0.355103 5.63009 0.538714 5.22498 0.882544 5.22498L3.26699 5.22498C3.4879 5.22498 3.66699 5.04589 3.66699 4.82498L3.66699 0.4C3.66699 0.179086 3.84607 0 4.06699 0L6.93396 0C7.15488 0 7.33396 0.179086 7.33396 0.4L7.33396 4.82498C7.33396 5.04589 7.51305 5.22498 7.73396 5.22498L10.1176 5.22498C10.4614 5.22498 10.645 5.63006 10.4184 5.88862L5.80126 11.1568Z"
          fill="white"
        />
      </Svg>
    </View>
  );
};

export default ArrowIcon;
