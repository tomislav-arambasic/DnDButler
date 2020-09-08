import React, {Component} from 'react';
import {View, ImageBackground, StyleSheet, Text, Alert} from 'react-native';
import 'react-native-gesture-handler';
import {images} from '../assets';
import {PlayerStats} from '../components';
import {ScrollView} from 'react-native-gesture-handler';
import Accordion from 'react-native-collapsible/Accordion';
import * as Animatable from 'react-native-animatable';
import {ProgressBar, Colors} from 'react-native-paper';

const SECTIONS = [
  {
    title: 'Profficiencies',
    content:
      'Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...Lorem ipsum...',
  },
  {
    title: 'Traits & abilities',
    content: 'Lorem ipsum...',
  },
  {
    title: 'Languages',
    content: 'Lorem ipsum...',
  },
  {
    title: 'Background',
    content: `Parents: You know of your parents.
    Mother: Faral Goliamnel, Lawful Neutral Elf Rogue that works as a Merchant. Your relationship was friendly. She is alive and well.
    Father: Hadarai Goliamnel, Neutral Evil Elf Warlock that works as a Criminal. Your relationship was friendly. He is alive, but doing poorly due to injury / finances / relationship.
    Siblings: 1
    Older sibling. Tharivol Goliamnel, Lawful Good Elf Rogue that works as a Sailor. Your relationship was friendly. He is alive, but doing poorly due to injury / finances / relationship.
    
    Family: You were raised by a guardian. Your father abandoned you and your mother disappeared to unknown fate.
    Primary guardian: Criella Light, Neutral Good Tiefling Barbarian that works as a Laborer. Your relationship was friendly. She is alive, but doing poorly due to injury / finances / relationship.
    
    Lifestyle: Comfortable. Grew up in a large house
    Childhood: You had several friends, and your childhood was generally a happy one.
    Life
    Background: Noble
    Motivation: Your family recently came by its title, and that elevation thrust them into a new and strange world.
    Class: Barbarian
    Origin: You went on a spiritual journey to find yourself and instead found a spirit animal to guide, protect, and inspire you.
    Events: 6
    You suffered a tragedy. You lost all your possessions in a disaster, and you had to rebuild your life.
    
    You made an enemy of an adventurer, you were at fault.
    
    Paelias Teinithra, Neutral Elf Paladin that works as an Adventurer. Your relationship was friendly. He is alive and well.
    You spent time working as a Noble.
    
    You suffered a tragedy. A friendship ended bitterly, and the other person is now hostile to you. The cause might have been a misunderstanding or something you or the former friend did.
    
    You suffered a tragedy. A family member or a close friend died.
    
    You encountered something magical. You turned invisible for a time.`,
  },
  {
    title: 'Personality traits',
    content: 'Lorem ipsum..',
  },
  {
    title: 'Ideals',
    content: 'Lorem ipsum..',
  },
  {
    title: 'Bonds',
    content: 'Lorem ipsum..',
  },
  {
    title: 'Flaws',
    content: 'Lorem ipsum..',
  },
];

class ProfileScreen extends Component {
  state = {
    activeSections: [],
  };

  _renderSectionTitle = (section) => {
    return (
      <View style={styles.content}>{/* <Text>{section.title}</Text> */}</View>
    );
  };

  _renderHeader = (section, index, isActive, sections) => {
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

  _renderContent = (section, i, isActive, sections) => {
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
          animation={isActive ? 'zoomIn' : false}>
          {section.content}
        </Animatable.Text>
      </Animatable.View>
    );
  };

  _updateSections = (activeSections) => {
    this.setState({activeSections});
  };

  render() {
    return (
      <View style={styles.container}>
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
            sections={SECTIONS}
            activeSections={this.state.activeSections}
            renderSectionTitle={this._renderSectionTitle}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
            onChange={this._updateSections}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1},
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

export default ProfileScreen;
