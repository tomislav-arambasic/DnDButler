import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Button, TextInput } from 'react-native';
import _ from 'lodash';
import PageIndicator from '../../../core/components/PageIndicator';

export default class BasicInfoScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
          }}
        >
          <TextInput
            onChangeText={(text) => null}
            value={'1'}
            style={{ width: 150, borderColor: '#000', borderWidth: 1 }}
          />
        </View>
        <PageIndicator currentPosition={0} />
      </View>
    );
  }
}
