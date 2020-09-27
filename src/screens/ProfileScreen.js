import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import {CharacterProfile, CharacterCreator} from '../components';

class ProfileScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <CharacterProfile /> */}
        <CharacterCreator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default ProfileScreen;
