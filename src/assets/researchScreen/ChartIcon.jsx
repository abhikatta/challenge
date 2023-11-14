import React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const ChartIcon = () => {
  return (
    <View>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={17}
        height={13}
        viewBox="0 0 17 13"
        fill="none">
        <Path
          d="M16.276 10.4167C16.4909 10.4167 16.6667 10.5924 16.6667 10.8073V12.1094C16.6667 12.3242 16.4909 12.5 16.276 12.5H0.390625C0.175781 12.5 0 12.3242 0 12.1094V0.390625C0 0.175781 0.175781 0 0.390625 0H1.69271C1.90755 0 2.08333 0.175781 2.08333 0.390625V10.4167H16.276ZM12.1322 3.10872L9.375 4.94792L6.59831 1.24674C6.43229 1.02539 6.09375 1.04167 5.95052 1.2793L3.125 5.98958V9.375H15.625L12.6986 3.26172C12.5944 3.05013 12.3275 2.97852 12.1322 3.10872Z"
          fill="#727682"
        />
      </Svg>
    </View>
  );
};

export default ChartIcon;
