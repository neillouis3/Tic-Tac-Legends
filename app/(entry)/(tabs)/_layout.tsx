import React from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Tabs } from 'expo-router';
import GameIcon from '@/assets/icons/game-controller.svg';
import GameOutlineIcon from '@/assets/icons/game-controller-outline.svg';
import ProfileIcon from '@/assets/icons/person.svg';
import ProfileOutlineIcon from '@/assets/icons/person-outline.svg';
import SettingsIcon from '@/assets/icons/settings.svg';
import SettingsOutlineIcon from '@/assets/icons/settings-outline.svg';
import { SvgProps } from 'react-native-svg';


export default function EntryLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      initialRouteName="index"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size }) => {
          let IconComponent: React.FC<SvgProps>;

          if (route.name === 'index') {
            IconComponent = focused ? GameIcon : GameOutlineIcon;
          } else if (route.name === 'profileScreen') {
            IconComponent = focused ? ProfileIcon : ProfileOutlineIcon;
          } else if (route.name === 'settingScreen') {
            IconComponent = focused ? SettingsIcon : SettingsOutlineIcon;
          } else {
            return null;
          }

          return <IconComponent width={size} height={size} fill="white" />;
        },
        tabBarLabelStyle: {
          color: 'white',
        },
        tabBarStyle: {
          backgroundColor: '#4299FF',

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