
import React from 'react';

import { useColorScheme } from '@/hooks/useColorScheme';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProfileScreen from './index';

const Stack = createNativeStackNavigator();
export default function ProfileLayout() {
  const colorScheme = useColorScheme();

  return (
      <Stack.Navigator>
        <Stack.Screen name="index" component={ProfileScreen} options={{ headerShown: false }} />

      </Stack.Navigator>
  );
}
