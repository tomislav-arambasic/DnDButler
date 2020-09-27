import React from 'react';
import PropTypes from 'prop-types';
import {ScrollView, StyleSheet} from 'react-native';

export const HorizontalScroll = ({children}) => {
  return (
    <ScrollView
      // pagingEnabled
      showsHorizontalScrollIndicator={false}
      decelerationRate="fast"
      scrollEventThrottle={200}
      horizontal={true}
      contentContainerStyle={styles.scrollContainer}>
      {children}
    </ScrollView>
  );
};

HorizontalScroll.propTypes = {};

const styles = StyleSheet.create({
  scrollContainer: {height: 100, marginBottom: 30},
});
