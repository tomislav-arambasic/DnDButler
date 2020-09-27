import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ScrollView, StyleSheet, View, Button, Alert} from 'react-native';
import _ from 'lodash';
import PageIndicator from '../../core/components/PageIndicator';

export class CharacterCreator extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1}} />
        <View style={{flex: 1}} />
        <View style={{height: '5%'}}>
          <PageIndicator currentPosition={6} />
        </View>
      </View>
    );
  }
}
