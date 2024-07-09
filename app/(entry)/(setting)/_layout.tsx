
import React from 'react';

import { useColorScheme } from '@/hooks/useColorScheme';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import SettingScreen from './index';

const Stack = createNativeStackNavigator();
export default function EntryLayout() {
  const colorScheme = useColorScheme();

  return (
      <Stack.Navigator>
        <Stack.Screen name="index" component={SettingScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
  );
}
