import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export const CoinCurrency = ({currencyName, amount}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.bold}>{currencyName}</Text>
      <View style={styles.inputContainer}>
        <View style={styles.counterContainer}>
          <TouchableOpacity style={styles.counterButton}>
            <Text>-</Text>
          </TouchableOpacity>
          <TextInput style={styles.input}>{amount}</TextInput>
          <TouchableOpacity style={styles.counterButton}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

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
    display: 'flex',
  },
  bold: {
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  input: {
    width: 70,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 15,
    textAlign: 'center',
  },
  counterContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  counterButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
});

export default CoinCurrency;
