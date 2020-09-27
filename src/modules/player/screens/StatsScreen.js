import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import {ScrollView} from 'react-native-gesture-handler';
import {CharacterHeader, HorizontalScroll, StaticStat} from '../components';

const StatsScreen: () => React$Node = () => {
  return (
    <View style={styles.mainContainer}>
      <CharacterHeader />
      <ScrollView style={styles.container}>
        <View style={styles.other}>
          <StaticStat
            statName={'Inspiration'}
            statValue={2}
            additionalStyle={{
              card: {width: 130},
              nameText: styles.otherText,
            }}
          />
          <StaticStat
            statName={'Profficiency bonus'}
            statValue={+5}
            additionalStyle={{
              card: {width: 130},
              nameText: styles.otherText,
            }}
          />
          <StaticStat
            statName={'Passive wisdom (perception)'}
            statValue={12}
            additionalStyle={{
              card: {width: 130},
              nameText: styles.otherText,
            }}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Stats</Text>
        </View>
        <HorizontalScroll>
          <StaticStat statName={'Strenght'} statValue={5} />
          <StaticStat statName={'Dexterity'} statValue={5} />
          <StaticStat statName={'Constitution'} statValue={5} />
          <StaticStat statName={'Intelligence'} statValue={5} />
          <StaticStat statName={'Wisdom'} statValue={5} />
          <StaticStat statName={'Charisma'} statValue={5} />
        </HorizontalScroll>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Saving throws</Text>
        </View>
        <HorizontalScroll>
          <StaticStat statName={'Strenght'} statValue={5} />
          <StaticStat statName={'Dexterity'} statValue={5} />
          <StaticStat statName={'Constitution'} statValue={5} />
          <StaticStat statName={'Intelligence'} statValue={5} />
          <StaticStat statName={'Wisdom'} statValue={5} />
          <StaticStat statName={'Charisma'} statValue={5} />
        </HorizontalScroll>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Skills</Text>
        </View>
        <HorizontalScroll>
          <StaticStat statName={'Acrobats'} statValue={5} />
          <StaticStat statName={'Animal handling'} statValue={5} />
          <StaticStat statName={'Arcana'} statValue={5} />
          <StaticStat statName={'Atheltics'} statValue={5} />
          <StaticStat statName={'Deception'} statValue={5} />
          <StaticStat statName={'History'} statValue={5} />
          <StaticStat statName={'Insight'} statValue={5} />
          <StaticStat statName={'Intimidation'} statValue={5} />
          <StaticStat statName={'Investigation'} statValue={5} />
          <StaticStat statName={'Medicine'} statValue={5} />
          <StaticStat statName={'Nature'} statValue={5} />
          <StaticStat statName={'Perception'} statValue={5} />
          <StaticStat statName={'Performance'} statValue={5} />
          <StaticStat statName={'Persuasion'} statValue={5} />
          <StaticStat statName={'Religion'} statValue={5} />
          <StaticStat statName={'Sleight of hand'} statValue={5} />
          <StaticStat statName={'Stealth'} statValue={5} />
          <StaticStat statName={'Survival'} statValue={5} />
        </HorizontalScroll>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {flex: 1},
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
});

export default StatsScreen;
