import React, {Component} from 'react';
import {View, StyleSheet, Alert, Text, Button} from 'react-native';
import 'react-native-gesture-handler';
import {CharacterProfile, CharacterCreator} from '../components';

class ProfileScreen extends Component {
  render() {
    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        {/* <CharacterProfile /> */}
        {/* <CharacterCreator /> */}
        <Button
          title="Create character"
          onPress={() => navigation.navigate('CreatorBasicInfo')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, paddingTop: 200},
});

export default ProfileScreen;
