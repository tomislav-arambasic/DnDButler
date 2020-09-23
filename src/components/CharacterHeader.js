import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import {ScrollView} from 'react-native-gesture-handler';
import {ProgressBar, Colors} from 'react-native-paper';

export const CharacterHeader = ({currencyName, amount}) => {
  return (
    <View>
      <View style={styles.characterInfo}>
        <Text style={styles.characterInfoLevel}>Level 10</Text>
        <Text style={styles.characterInfoName}>Cleric Name</Text>
        <Text style={styles.characterInfoExp}>1650/2000</Text>
      </View>
      <ProgressBar progress={1650 / 2000} color={Colors.green500} />
    </View>
  );
};

const styles = StyleSheet.create({
  characterInfo: {
    height: 90,
    padding: 10,
    justifyContent: 'flex-end',
    backgroundColor: 'lightyellow',
  },
  characterInfoName: {
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center',
  },
  characterInfoExp: {
    fontWeight: 'bold',
    fontSize: 10,
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  characterInfoLevel: {
    fontWeight: 'bold',
    fontSize: 10,
    bottom: -20,
  },
});

export default CharacterHeader;
