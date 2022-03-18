import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';

interface ListItemProps {
  item: object;
  onPress: () => any;
  pressActionButton: () => any;
}

const ListItem = ({item, onPress, pressActionButton}: ListItemProps) => {
  const {colors} = useTheme();

  const handlePress = () => onPress && onPress();

  const handlePressActionButton = () =>
    pressActionButton && pressActionButton();

  return (
    <>
      <TouchableOpacity onPress={handlePress} style={styles({colors}).root}>
        <View>
          <Image
            source={{uri: item?.logos?.light}}
            style={styles({colors}).roundedImage}
          />
        </View>
        <View style={styles({colors}).textContainer}>
          <Text numberOfLines={1} style={styles({colors}).textTitle}>
            {item?.name}
          </Text>
        </View>
        <TouchableOpacity
          style={styles({colors}).buttonContainer}
          onPress={handlePressActionButton}>
          <Text style={{color: colors.card}}>Delete</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </>
  );
};

export default ListItem;
