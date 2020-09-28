import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ScrollView, StyleSheet, View, Button} from 'react-native';
import _ from 'lodash';
import StepIndicator from 'react-native-step-indicator';

const labels = [
  // 'Basic info',
  // 'Stats',
  // 'Skills',
  // 'Archetype',
  // 'Hit points',
  // 'Equipment',
];

const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#fe7013',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#fe7013',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelAlign: 'baseline',
  labelSize: 13,
  currentStepLabelColor: '#fe7013',
};

export default class PageIndicator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPosition: _.get(props, 'currentPosition', 0),
    };
  }

  render() {
    const {currentPosition} = this.state;

    return (
      <View
        style={{
          height: 50,
          width: '50%',
          alignSelf: 'center',
          justifyContent: 'center',
        }}>
        <StepIndicator
          customStyles={customStyles}
          currentPosition={currentPosition}
          labels={labels}
          stepCount={6}
        />
      </View>
    );
  }
}
