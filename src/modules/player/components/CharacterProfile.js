import React, {Component} from 'react';
import {View, ImageBackground, StyleSheet, Text} from 'react-native';
import 'react-native-gesture-handler';
import {images} from '../assets';
import {ScrollView} from 'react-native-gesture-handler';
import Accordion from 'react-native-collapsible/Accordion';
import * as Animatable from 'react-native-animatable';
import {ProgressBar, Colors} from 'react-native-paper';
import MOCKUP from '../mockup';

export class CharacterProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSections: [],
    };
  }

  renderSectionTitle = (section) => {
    return (
      <View style={styles.content}>{/* <Text>{section.title}</Text> */}</View>
    );
  };

  renderHeader = (section, index, isActive, sections) => {
    return (
      <View style={[styles.accordionContainer, styles.accordionHeight]}>
        <View style={styles.accordionItem}>
          <Text style={styles.headerText}>{section.title}</Text>
        </View>
        {!isActive && (
          <View style={[styles.accordionItem, styles.alignItemsEnd]}>
            <Text style={styles.headerText}>Read more...</Text>
          </View>
        )}
      </View>
    );
  };

  renderContent = (section, i, isActive, sections) => {
    return (
      <Animatable.View
        duration={300}
        transition="backgroundColor"
        style={{
          padding: 20,
          backgroundColor: isActive
            ? 'rgba(255,255,255,1)'
            : 'rgba(245,252,255,1)',
        }}>
        <Animatable.Text
          duration={300}
          easing="ease-out"
          animation={isActive ? 'zoomIn' : ''}>
          {section.content}
        </Animatable.Text>
      </Animatable.View>
    );
  };

  updateSections = (activeSections) => {
    this.setState({activeSections});
  };

  render() {
    return (
      <>
        <Animatable.View
          duration={500}
          transition="height"
          style={{
            ...styles.profileContainer,
            ...{height: this.state.activeSections.length > 0 ? 200 : 400},
          }}>
          <ImageBackground source={images.clericJpg} style={styles.image}>
            <View style={styles.experience}>
              <Text style={styles.experienceText}>Level 10</Text>
              <Text style={styles.experienceText}>Exp. 1650/2000</Text>
            </View>
          </ImageBackground>
          <ProgressBar progress={1650 / 2000} color={Colors.green500} />
        </Animatable.View>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Accordion
            sections={MOCKUP.SECTIONS}
            activeSections={this.state.activeSections}
            renderSectionTitle={this.renderSectionTitle}
            renderHeader={this.renderHeader}
            renderContent={this.renderContent}
            onChange={this.updateSections}
          />
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  profileContainer: {
    resizeMode: 'cover',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  info: {
    height: 100,
    flex: 1,
    backgroundColor: 'rgba(255,255,255, 0.6)',

    alignSelf: 'flex-end',
  },
  scrollContainer: {},
  accordionContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  accordionItem: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: '#bbb',
  },
  accordionHeight: {
    height: 80,
  },
  alignItemsEnd: {
    alignItems: 'flex-end',
  },
  padding: {
    padding: 20,
  },
  experience: {
    height: 30,
    width: '100%',
    alignSelf: 'flex-end',
    backgroundColor: 'gray',
    opacity: 0.7,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  experienceText: {
    fontSize: 15,
    color: '#fff',
  },
});

export default CharacterProfile;
