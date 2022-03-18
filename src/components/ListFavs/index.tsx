import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {FavItem} from '../';
import {routes} from '../../constants/routesNames';
import {storage} from '../../utils/storage';
import {styles} from './styles';

interface ListFavsProps {
  userFavs: object[];
  setUserFavs: Function;
}

const ListFavs = ({userFavs, setUserFavs}: ListFavsProps) => {
  const navigation = useNavigation();

  const navigateDetails = ({id}: {id: string}) =>
    navigation.navigate(routes.DETAILS, {id});

  const deleteFavs = (id: string) => {
    const filteredFavs = userFavs.filter((item: object) => item?.id !== id);
    setUserFavs(filteredFavs);
    storage.set('userFavs', JSON.stringify(filteredFavs));
  };

  const renderFavsItems = ({item}: any) => (
    <FavItem
      item={item}
      onPress={() => navigateDetails({id: item.id})}
      pressActionButton={() => deleteFavs(item?.id)}
    />
  );

  return (
    <View style={styles.root}>
      <Text style={styles.textHeader}>Your favs</Text>
      <FlatList
        horizontal
        keyExtractor={item => item?.id}
        data={userFavs}
        renderItem={renderFavsItems}
      />
    </View>
  );
};

export default ListFavs;
