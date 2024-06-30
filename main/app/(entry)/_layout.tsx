import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import NormalGame from './NormalGame';

const Stack = createStackNavigator();

export default function EntryLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="NormalGame" component={NormalGame} />
    </Stack.Navigator>
  );
}
