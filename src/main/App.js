import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import * as Player from '../modules/player';

export default function App() {
  return (
    <NavigationContainer>
      <Player.PlayerNavigator />
    </NavigationContainer>
  );
}
