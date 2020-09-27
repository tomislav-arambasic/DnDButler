import React, {Component} from 'react';
import {View, ImageBackground, StyleSheet, Text} from 'react-native';
import 'react-native-gesture-handler';
import {images} from '../assets';
import {ScrollView} from 'react-native-gesture-handler';

export class MainStats extends Component {
  static propTypes = {};

  render() {
    return (
      <View style={styles.mainStatsContainer}>
        <ScrollView>
          <View style={styles.cardRow}>
            <View style={styles.statContainer}>
              <View style={styles.statDetail}>
                <Text style={styles.bold}>Strenght</Text>
              </View>
              <View style={styles.statDetail}>
                <Text>Score</Text>
                <Text>1</Text>
              </View>
              <View style={styles.statDetail}>
                <Text>Modifier</Text>
                <Text>-5</Text>
              </View>
              <View style={styles.statDetail}>
                <Text>Save</Text>
                <Text>-5</Text>
              </View>
            </View>
          </View>
          <View style={styles.cardRow}>
            <View style={styles.statContainer}>
              <View style={styles.statDetail}>
                <Text style={styles.bold}>Inteligence</Text>
              </View>
              <View style={styles.statDetail}>
                <Text>Score</Text>
                <Text>1</Text>
              </View>
              <View style={styles.statDetail}>
                <Text>Modifier</Text>
                <Text>-5</Text>
              </View>
              <View style={styles.statDetail}>
                <Text>Save</Text>
                <Text>-5</Text>
              </View>
            </View>
          </View>
          <View style={styles.cardRow}>
            <View style={styles.statContainer}>
              <View style={styles.statDetail}>
                <Text style={styles.bold}>Dexterity</Text>
              </View>
              <View style={styles.statDetail}>
                <Text>Score</Text>
                <Text>1</Text>
              </View>
              <View style={styles.statDetail}>
                <Text>Modifier</Text>
                <Text>-5</Text>
              </View>
              <View style={styles.statDetail}>
                <Text>Save</Text>
                <Text>-5</Text>
              </View>
            </View>
          </View>
          <View style={styles.cardRow}>
            <View style={styles.statContainer}>
              <View style={styles.statDetail}>
                <Text style={styles.bold}>Wisdom</Text>
              </View>
              <View style={styles.statDetail}>
                <Text>Score</Text>
                <Text>1</Text>
              </View>
              <View style={styles.statDetail}>
                <Text>Modifier</Text>
                <Text>-5</Text>
              </View>
              <View style={styles.statDetail}>
                <Text>Save</Text>
                <Text>-5</Text>
              </View>
            </View>
          </View>
          <View style={styles.cardRow}>
            <View style={styles.statContainer}>
              <View style={styles.statDetail}>
                <Text style={styles.bold}>Constitution</Text>
              </View>
              <View style={styles.statDetail}>
                <Text>Score</Text>
                <Text>1</Text>
              </View>
              <View style={styles.statDetail}>
                <Text>Modifier</Text>
                <Text>-5</Text>
              </View>
              <View style={styles.statDetail}>
                <Text>Save</Text>
                <Text>-5</Text>
              </View>
            </View>
          </View>
          <View style={styles.cardRow}>
            <View style={styles.statContainer}>
              <View style={styles.statDetail}>
                <Text style={styles.bold}>Charisma</Text>
              </View>
              <View style={styles.statDetail}>
                <Text>Score</Text>
                <Text>1</Text>
              </View>
              <View style={styles.statDetail}>
                <Text>Modifier</Text>
                <Text>-5</Text>
              </View>
              <View style={styles.statDetail}>
                <Text>Save</Text>
                <Text>-5</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    justifyContent: 'space-between',
    marginTop: 80,
    paddingBottom: 80,
  },
  cardRow: {
    height: 100,
    display: 'flex',
    borderBottomColor: '#ddd',
    borderBottomWidth: 0.5,
  },
  statContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
  },
  statDetail: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default MainStats;
