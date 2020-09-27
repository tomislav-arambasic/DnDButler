import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {ProgressBar, Colors} from 'react-native-paper';
import {
  CoinCurrency,
  InventoryItem,
  CharacterHeader,
  HorizontalScroll,
} from '../components';

export class InventoryScreen extends Component {
  static propTypes = {};

  render() {
    return (
      <View style={styles.mainContainer}>
        <CharacterHeader />
        <ScrollView style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Coins</Text>
          </View>
          <HorizontalScroll>
            <CoinCurrency currencyName={'CP'} amount={12} />
            <CoinCurrency currencyName={'SP'} amount={12} />
            <CoinCurrency currencyName={'EP'} amount={12} />
            <CoinCurrency currencyName={'GP'} amount={12} />
            <CoinCurrency currencyName={'PP'} amount={12} />
          </HorizontalScroll>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Inventory</Text>
          </View>
          <HorizontalScroll>
            <InventoryItem />
          </HorizontalScroll>
        </ScrollView>
      </View>
    );
  }
}

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
  titleContainer: {flex: 1, backgroundColor: '#eee', padding: 10},
  title: {fontWeight: 'bold', fontSize: 15},
  scrollContainer: {height: 100, marginBottom: 30},
});

export default InventoryScreen;
