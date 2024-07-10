
import React from 'react';

import { useColorScheme } from '@/hooks/useColorScheme';
import { Stack } from 'expo-router';



export default function EntryLayout() {
  const colorScheme = useColorScheme();

  return (
      <Stack>
        <Stack.Screen name="index"  options={{ headerShown: false }} />
        <Stack.Screen name="normalGame"  options={{ headerShown: false }} />
        <Stack.Screen name="normal5x5Game"  options={{ headerShown: false }} />
        <Stack.Screen name="normal7x7Game"  options={{ headerShown: false }} />
        <Stack.Screen name="custom7x7Game"  options={{ headerShown: false }} />
      </Stack>
  );
}
