import React from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Tabs } from 'expo-router';
import GameIcon from '../../assets/icons/game-controller.svg';
import GameOutlineIcon from '../../assets/icons/game-controller-outline.svg';
import ProfileIcon from '../../assets/icons/person.svg';
import ProfileOutlineIcon from '../../assets/icons/person-outline.svg';
import SettingsIcon from '../../assets/icons/settings.svg';
import SettingsOutlineIcon from '../../assets/icons/settings-outline.svg';
import { SvgProps } from 'react-native-svg';

export default function EntryLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      initialRouteName="(game)"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size }) => {
          let IconComponent: React.FC<SvgProps>;

          if (route.name === '(game)') {
            IconComponent = focused ? GameIcon : GameOutlineIcon;
          } else if (route.name === '(profile)') {
            IconComponent = focused ? ProfileIcon : ProfileOutlineIcon;
          } else if (route.name === '(setting)') {
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
        name="(setting)"  
        options={{ title: "Settings" }} 
      />
      <Tabs.Screen 
        name="(game)"   
        options={{ title: "Game" }}
      />
      <Tabs.Screen 
        name="(profile)"   
        options={{ title: "Profile" }}
      />
    </Tabs>
  );
}
