import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../screens/ProfileScreen';
import InventoryScreen from '../screens/InventoryScreen';

const ProfileStack = createStackNavigator();

export default function ProfileStackNavigation() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <ProfileStack.Screen
        name="CreatorBasicInfo"
        component={InventoryScreen}
        options={{headerShown: true}}
      />
      <ProfileStack.Screen
        name="CreatorStats"
        component={InventoryScreen}
        options={{headerShown: true}}
      />
      <ProfileStack.Screen
        name="CreatorSkills"
        component={InventoryScreen}
        options={{headerShown: true}}
      />
      <ProfileStack.Screen
        name="CreatorArchetype"
        component={InventoryScreen}
        options={{headerShown: true}}
      />
      <ProfileStack.Screen
        name="CreatorHitPoints"
        component={InventoryScreen}
        options={{headerShown: true}}
      />
      <ProfileStack.Screen
        name="CreatorEquipment"
        component={InventoryScreen}
        options={{headerShown: true}}
      />
    </ProfileStack.Navigator>
  );
}
