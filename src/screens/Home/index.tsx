import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {routes} from '../../constants/routesNames';
import {useRemoteData} from '../../hooks';
import {endpoints} from '../../constants/endpoints';
import {ListFavs, ListItem} from '../../components';
import {storage} from '../../utils/storage';

const Home = () => {
  const navigation = useNavigation();
  const {response, error, isLoading} = useRemoteData({url: endpoints.MAIN});
  const [userFavs, setUserFavs] = useState<object[]>([]);

  const navigateDetails = ({id}: {id: string}) =>
    navigation.navigate(routes.DETAILS, {id});

  const addToFavs = (item: object) => {
    if (userFavs.findIndex(value => value?.id === item?.id) < 0) {
      const arrayFavs = [...userFavs, item];
      setUserFavs(() => arrayFavs);
      storage.set('userFavs', JSON.stringify(arrayFavs));
      return;
    }
    Alert.alert(
      'Already added',
      'This item has already been added to your favorites ',
    );
  };

  const renderItem = ({item}: any) => (
    <ListItem
      item={item}
      onPress={() => navigateDetails({id: item?.id})}
      pressActionButton={() => addToFavs(item)}
    />
  );

  useEffect(() => {
    const savedFavs = storage.getString('userFavs');
    if (savedFavs) {
      setUserFavs(() => JSON.parse(savedFavs));
    }
  }, []);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>An error was happened</Text>;
  }

  return (
    <View style={styles.root}>
      <FlatList
        numColumns={2}
        keyExtractor={item => item?.id}
        data={response?.data}
        renderItem={renderItem}
        ListHeaderComponent={() =>
          userFavs.length > 0 ? (
            <ListFavs userFavs={userFavs} setUserFavs={setUserFavs} />
          ) : null
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default Home;
