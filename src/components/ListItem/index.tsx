import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Avatar from '../ui/Avatar';
import {styles} from './styles';
import Button from '../ui/Button';

interface ListItemProps {
  item: object;
  onPress: () => any;
  pressActionButton?: () => any;
}

const ListItem = ({item, onPress, pressActionButton}: ListItemProps) => {
  const {colors} = useTheme();

  const handlePress = () => onPress && onPress();

  const handlePressActionButton = () =>
    pressActionButton && pressActionButton();

  return (
    <TouchableOpacity onPress={handlePress} style={styles({colors}).root}>
      <View style={styles({colors}).avatarContainer}>
        <Avatar src={item?.logos?.light} />
      </View>
      <View style={styles({colors}).footerContainer}>
        <Text numberOfLines={2} style={styles({colors}).buttontext}>
          {item?.name}
        </Text>
        {pressActionButton && (
          <Button label="Add to favs" onPress={handlePressActionButton} />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
