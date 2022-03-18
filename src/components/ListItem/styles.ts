import {StyleSheet} from 'react-native';

type Colors = {
  card: string;
  text: string;
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
      backgroundColor: colors.card,
      height: 250,
      margin: 4,
    },
    avatarContainer: {
      height: '70%',
    },
    footerContainer: {
      alignItems: 'center',
      height: '30%',
      justifyContent: 'space-between',
    },
    buttontext: {
      textAlign: 'center',
      color: colors.text,
    },
  });
