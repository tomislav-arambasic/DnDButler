import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet} from 'react-native';

export class PlayerStats extends Component {
  static propTypes = {};

  render() {
    return (
      <View style={styles.mainStatsContainer}>
        <View style={styles.stats}>
          <View style={styles.row}>
            <Text style={styles.title}>Cleric Name</Text>
          </View>
          <View style={styles.row}>
            <View style={styles.stat}>
              <Text style={styles.statTitle}>Initiative</Text>
              <Text style={styles.statValue}>+5</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statTitle}>HP</Text>
              <Text style={styles.statValue}>30</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statTitle}>Speed</Text>
              <Text style={styles.statValue}>30</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.stat}>
              <Text style={styles.statTitle}>Hit dice</Text>
              <Text style={styles.statValue}>1d8</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statTitle}>Armor class</Text>
              <Text style={styles.statValue}>7</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statTitle}>Profficiency</Text>
              <Text style={styles.statValue}>+2</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainStatsContainer: {
    position: 'absolute',
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingBottom: 30,
    top: 200,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  stats: {
    height: 150,
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    alignSelf: 'center',
  },

  stat: {
    flex: 1,
    height: 40,
    width: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statTitle: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  statValue: {
    fontSize: 12,
  },
});

export default PlayerStats;
