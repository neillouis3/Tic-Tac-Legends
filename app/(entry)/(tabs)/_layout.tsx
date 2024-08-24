import React from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Tabs } from 'expo-router';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function EntryLayout() {
  const colorScheme = useColorScheme();
  return (
        <Tabs
      initialRouteName="index"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size }) => {
          let iconName: string;

          if (route.name === 'index') {
            iconName = focused ? 'gamepad-variant' : 'gamepad-variant-outline';
          } else if (route.name === 'profileScreen') {
            iconName = focused ? 'account' : 'account-outline';
          } else if (route.name === 'settingScreen') {
            iconName = focused ? 'cog' : 'cog-outline';
          } else {
            return null;
          }

          return <Icon name={iconName} size={size} color={focused ? '#4299FF' : '#D9D9D9'} />;
        },

        tabBarStyle: {
          backgroundColor: '#ffffff',
        },
      })}
    >
      <Tabs.Screen 
        name="settingScreen"  
        options={{ 
          title: "Settings", 
          headerShown: false,
        }} 
      />
      <Tabs.Screen 
        name="index"   
        options={{ 
          title: "Game",
          headerShown: false, 

        }}
      />
      <Tabs.Screen 
        name="profileScreen"   
        options={{ 
          title: "Profile", 
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
