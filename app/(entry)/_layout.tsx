
import React from 'react';

import { useColorScheme } from '@/hooks/useColorScheme';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NormalGame from './normalGame';
import HomeScreen from './index';

const Stack = createNativeStackNavigator();
export default function EntryLayout() {
  const colorScheme = useColorScheme();

  return (
      <Stack.Navigator>
        <Stack.Screen name="index" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="normalGame" component={NormalGame} options={{ headerShown: false }} />
      </Stack.Navigator>
  );
}
