import React from 'react';
import PropTypes from 'prop-types';
import {ScrollView, StyleSheet, View, Text} from 'react-native';

export const StaticStat = ({statName, statValue, additionalStyle}) => {
  return (
    <View style={[styles.card, additionalStyle && additionalStyle.card]}>
      <Text style={[styles.bold, additionalStyle && additionalStyle.nameText]}>
        {statName}
      </Text>
      <Text>{statValue}</Text>
    </View>
  );
};

StaticStat.propTypes = {};

const styles = StyleSheet.create({
  card: {
    marginTop: 5,
    width: 150,
    borderWidth: 0.5,
    borderColor: '#bbb',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 8,
    marginHorizontal: 4,
  },
  bold: {
    fontWeight: 'bold',
  },
});
