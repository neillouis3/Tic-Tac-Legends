
import React from 'react';

import { useColorScheme } from '@/hooks/useColorScheme';
import { Stack } from 'expo-router';



export default function GameLayout() {
  const colorScheme = useColorScheme();

  return (
      <Stack>
        <Stack.Screen 
          name="(tabs)"  
          options={{ 
            headerShown: true, 
            title: "Tic-Tac Legends",
            headerBackTitleVisible: false,
          }} 
        />
        <Stack.Screen 
          name="normalGame"  
          options={{ 
            headerShown: true, 
            title: "Tic-Tac Legends",
            headerBackTitleVisible: false,
          }} 
        />
        <Stack.Screen 
          name="normal5x5Game"  
          options={{ 
            headerShown: true, 
            title: "Tic-Tac Legends",
            headerBackTitleVisible: false,
          }} 
        />
        <Stack.Screen  
          name="normal7x7Game"  
          options={{ 
            headerShown: true, 
            title: "Tic-Tac Legends",
            headerBackTitleVisible: false,
          }} 
        />
        <Stack.Screen 
          name="custom7x7Game"  
          options={{ 
            headerShown: true, 
            title: "Tic-Tac Legends",
            headerBackTitleVisible: false,
          }} 
        />
      </Stack>
  );
}
