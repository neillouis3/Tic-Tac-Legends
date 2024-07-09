
import React from 'react';

import { useColorScheme } from '@/hooks/useColorScheme';
import {Tabs} from 'expo-router';


export default function EntryLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs>
      <Tabs.Screen name="(setting)"  options={{ headerShown: false }} />
      <Tabs.Screen name="(game)"  options={{ headerShown: false }} />
      <Tabs.Screen name="(profile)"  options={{ headerShown: false }} />

    </Tabs>
  );
}
