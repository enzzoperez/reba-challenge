import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Router from './navigation';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Router />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
