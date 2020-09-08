import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import 'react-native-gesture-handler';

const HomeScreen: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <Text>Settings!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default HomeScreen;
