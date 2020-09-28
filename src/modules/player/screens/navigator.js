import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as CharacterCreator from './character-creator';
import StatsScreen from './StatsScreen';
import InventoryScreen from './InventoryScreen';

const Tab = createBottomTabNavigator();

export default function PlayerNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Character') {
            iconName = 'person-circle-outline';
          } else if (route.name === 'Stats') {
            iconName = 'ios-list';
          } else if (route.name === 'Inventory') {
            iconName = 'cube-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'gold',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Character"
        component={CharacterCreator.CharacterCreatorStackNavigator}
      />
      <Tab.Screen name="Inventory" component={InventoryScreen} />
      <Tab.Screen name="Stats" component={StatsScreen} />
    </Tab.Navigator>
  );
}
