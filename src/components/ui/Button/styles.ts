import {StyleSheet} from 'react-native';

interface StylesProps {
  textColor?: string;
  backgroundColor?: string;
}

export const styles = ({backgroundColor, textColor}: StylesProps) =>
  StyleSheet.create({
    rootButton: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 32,
      width: 128,
      backgroundColor,
      borderRadius: 10,
    },
    textButton: {
      color: textColor,
    },
  });
