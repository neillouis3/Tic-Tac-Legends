
import React from 'react';

import { useColorScheme } from '@/hooks/useColorScheme';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NormalGame from './normalGame';
import Normal5x5Game from './normal5x5Game';
import Normal7x7Game from './normal7x7Game';
import HomeScreen from './index';

const Stack = createNativeStackNavigator();
export default function EntryLayout() {
  const colorScheme = useColorScheme();

  return (
      <Stack.Navigator>
        <Stack.Screen name="index" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="normalGame" component={NormalGame} options={{ headerShown: false }} />
        <Stack.Screen name="normal5x5Game" component={Normal5x5Game} options={{ headerShown: false }} />
        <Stack.Screen name="normal7x7Game" component={Normal7x7Game} options={{ headerShown: false }} />
      </Stack.Navigator>
  );
}
