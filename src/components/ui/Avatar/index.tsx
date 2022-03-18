import React from 'react';
import {Image} from 'react-native';
import {styles} from './styles';

const Avatar: React.FC<{src: string}> = ({src}) => {
  return (
    <Image
      style={styles.roundedAvatar}
      source={{uri: src}}
      resizeMode="contain"
    />
  );
};

export default Avatar;
