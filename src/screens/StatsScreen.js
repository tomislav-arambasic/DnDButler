import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import {ScrollView} from 'react-native-gesture-handler';
import {ProgressBar, Colors} from 'react-native-paper';

const StatsScreen: () => React$Node = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.characterInfo}>
        <Text style={styles.characterInfoLevel}>Level 10</Text>
        <Text style={styles.characterInfoName}>Cleric Name</Text>
        <Text style={styles.characterInfoExp}>1650/2000</Text>
      </View>
      <ProgressBar progress={1650 / 2000} color={Colors.green500} />
      <ScrollView style={styles.container}>
        <View style={styles.other}>
          <View style={[styles.card, {width: 130}]}>
            <Text style={[styles.bold, styles.otherText]}>Inspiration</Text>
            <Text>16</Text>
          </View>
          <View style={[styles.card, {width: 130}]}>
            <Text style={[styles.bold, styles.otherText]}>
              Profficiency bonus
            </Text>
            <Text>16</Text>
          </View>
          <View style={[styles.card, {width: 130}]}>
            <Text style={[styles.bold, styles.otherText]}>
              Passive wisdom (perception)
            </Text>
            <Text>16</Text>
          </View>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Stats</Text>
        </View>
        <ScrollView
          // pagingEnabled
          showsHorizontalScrollIndicator={false}
          decelerationRate="fast"
          scrollEventThrottle={200}
          horizontal={true}
          contentContainerStyle={styles.scrollContainer}>
          <View style={styles.card}>
            <Text style={styles.bold}>Strenght</Text>
            <Text>5</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.bold}>Dexterity</Text>
            <Text>12</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.bold}>Constitution</Text>
            <Text>3</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.bold}>Intelligence</Text>
            <Text>8</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.bold}>Wisdom</Text>
            <Text>16</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.bold}>Charisma</Text>
            <Text>11</Text>
          </View>
        </ScrollView>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Saving throws</Text>
        </View>

        <ScrollView
          // pagingEnabled
          showsHorizontalScrollIndicator={false}
          decelerationRate="fast"
          scrollEventThrottle={200}
          horizontal={true}
          contentContainerStyle={styles.scrollContainer}>
          <View style={styles.card}>
            <Text style={styles.bold}>Strenght</Text>
            <Text>5</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.bold}>Dexterity</Text>
            <Text>12</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.bold}>Constitution</Text>
            <Text>3</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.bold}>Intelligence</Text>
            <Text>8</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.bold}>Wisdom</Text>
            <Text>16</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.bold}>Charisma</Text>
            <Text>11</Text>
          </View>
        </ScrollView>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Skills</Text>
        </View>
        <ScrollView
          // pagingEnabled
          showsHorizontalScrollIndicator={false}
          decelerationRate="fast"
          scrollEventThrottle={200}
          horizontal={true}
          contentContainerStyle={styles.scrollContainer}>
          <View style={styles.card}>
            <Text style={styles.bold}>Acrobats</Text>
            <Text>5</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.bold}>Animal handling</Text>
            <Text>12</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.bold}>Arcana</Text>
            <Text>3</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.bold}>Atheltics</Text>
            <Text>8</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.bold}>Deception</Text>
            <Text>16</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.bold}>History</Text>
            <Text>11</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.bold}>Insight</Text>
            <Text>11</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.bold}>History</Text>
            <Text>11</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.bold}>Intimidation</Text>
            <Text>11</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.bold}>Investigation</Text>
            <Text>11</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.bold}>Medicine</Text>
            <Text>11</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.bold}>Nature</Text>
            <Text>11</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.bold}>Perception</Text>
            <Text>11</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.bold}>Performance</Text>
            <Text>11</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.bold}>Persuasion</Text>
            <Text>11</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.bold}>Religion</Text>
            <Text>11</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.bold}>Sleight of hand</Text>
            <Text>11</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.bold}>Stealth</Text>
            <Text>11</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.bold}>Survival</Text>
            <Text>11</Text>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {flex: 1},
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
  container: {
    height: 100,
    paddingTop: 10,
    backgroundColor: '#fff',
  },
  other: {
    height: 100,
    marginBottom: 30,
    flexDirection: 'row',
  },
  otherText: {
    textAlign: 'center',
  },
  titleContainer: {flex: 1, backgroundColor: '#eee', padding: 10},
  title: {fontWeight: 'bold', fontSize: 15},
  scrollContainer: {height: 100, marginBottom: 30},
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

export default StatsScreen;
