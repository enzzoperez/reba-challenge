import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

interface ButtonProps {
  label: string;
  onPress: () => {} | undefined;
}

const Button = ({label, onPress}: ButtonProps) => {
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={styles({backgroundColor: colors.primary}).rootButton}>
      <Text style={styles({textColor: colors.card}).textButton}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
