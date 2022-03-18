import {StyleSheet} from 'react-native';

type Colors = {
  card: string;
  text: string;
  notification: string;
};

interface StylesProps {
  colors: Colors;
}

export const styles = ({colors}: StylesProps) =>
  StyleSheet.create({
    root: {
      padding: 8,
      flexDirection: 'column',
      borderRadius: 10,
      flex: 2,
      height: 130,
      width: 100,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    roundedImage: {
      borderRadius: 50,
      height: 64,
      width: 64,
      backgroundColor: colors.card,
    },
    textContainer: {
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    textTitle: {
      textAlign: 'center',
      color: colors.text,
    },
    buttonContainer: {
      width: 64,
      alignItems: 'center',
      backgroundColor: colors.notification,
      borderRadius: 10,
    }
  });
