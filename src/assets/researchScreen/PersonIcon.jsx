import React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const PersonIcon = () => {
  return (
    <View>
      <Svg width={12} height={12} viewBox="0 0 12 12" fill="none">
        <Path
          id="Vector"
          d="M6 6.75C7.86328 6.75 9.375 5.23828 9.375 3.375C9.375 1.51172 7.86328 0 6 0C4.13672 0 2.625 1.51172 2.625 3.375C2.625 5.23828 4.13672 6.75 6 6.75ZM9 7.5H7.70859C7.18828 7.73906 6.60938 7.875 6 7.875C5.39062 7.875 4.81406 7.73906 4.29141 7.5H3C1.34297 7.5 0 8.84297 0 10.5V10.875C0 11.4961 0.503906 12 1.125 12H10.875C11.4961 12 12 11.4961 12 10.875V10.5C12 8.84297 10.657 7.5 9 7.5Z"
          fill="#727682"
        />
      </Svg>
    </View>
  );
};

export default PersonIcon;
