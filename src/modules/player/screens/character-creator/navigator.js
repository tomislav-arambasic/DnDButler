import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BasicInfoScreen from './BasicInfoScreen';
import InventoryScreen from '../InventoryScreen';

const CharacterCreatorStack = createStackNavigator();

export default function CharacterCreatorStackNavigator() {
  const headerProps = {
    headerShown: true,
    headerTitle: 'Basic info',
    headerTitleAlign: 'center',
  };

  return (
    <CharacterCreatorStack.Navigator>
      <CharacterCreatorStack.Screen
        name="Profile"
        component={BasicInfoScreen}
        options={{headerShown: false}}
      />
      <CharacterCreatorStack.Screen
        name="CreatorBasicInfo"
        component={BasicInfoScreen}
        options={headerProps}
      />
      <CharacterCreatorStack.Screen
        name="CreatorStats"
        component={InventoryScreen}
        options={{headerShown: true}}
      />
      <CharacterCreatorStack.Screen
        name="CreatorSkills"
        component={InventoryScreen}
        options={{headerShown: true}}
      />
      <CharacterCreatorStack.Screen
        name="CreatorArchetype"
        component={InventoryScreen}
        options={{headerShown: true}}
      />
      <CharacterCreatorStack.Screen
        name="CreatorHitPoints"
        component={InventoryScreen}
        options={{headerShown: true}}
      />
      <CharacterCreatorStack.Screen
        name="CreatorEquipment"
        component={InventoryScreen}
        options={{headerShown: true}}
      />
    </CharacterCreatorStack.Navigator>
  );
}
