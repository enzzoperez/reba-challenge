import React from 'react';
import {useRoute} from '@react-navigation/native';
import {ActivityIndicator, Image, StyleSheet, Text, View} from 'react-native';
import {endpoints} from '../../constants/endpoints';
import {useRemoteData} from '../../hooks';

const DetailsItem = () => {
  const {params} = useRoute();
  const {response, error, isLoading} = useRemoteData({
    url: endpoints.DETAILS(params?.id),
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>An error was happened</Text>;
  }

  return (
    <View style={styles.root}>
      <Image
        source={{uri: response?.data?.logos?.light}}
        style={styles.imageStyles}
      />
      <Text>{response?.data?.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyles: {
    height: 150,
    width: 150,
  },
});

export default DetailsItem;
