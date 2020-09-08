import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet} from 'react-native';

export class MainStats extends Component {
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
              <Text>+5</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statTitle}>HP</Text>
              <Text>30</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statTitle}>Speed</Text>
              <Text>30</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainStatsContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingBottom: 30,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  stats: {
    height: 100,
    width: 250,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginTop: 50,
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
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default MainStats;
