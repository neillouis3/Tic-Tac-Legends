
import React from 'react';

import { useColorScheme } from '@/hooks/useColorScheme';

import {Tabs} from 'expo-router';


export default function EntryLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      initialRouteName="(game)"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size}) => {
          let iconName;
          if (route.name === 'Foo') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Bar') {
            iconName = focused ? 'basketball' : 'basketball-outline';
          }
          return <Icon name={iconName} size={size} color={'pink'} />;
        },
        tabBarLabelStyle: {
          color: 'pink',
        },
        tabBarStyle: {
          backgroundColor: 'black',
        },
      })}
    >
      <Tabs.Screen 
        name="(setting)"  
        options={{title:"Settings"}} 
      />
      <Tabs.Screen 
        name="(game)"   
        options={{title:"Game"}}
      />
      <Tabs.Screen 
        name="(profile)"   
        options={{title:"Profile"}}
      />

    </Tabs>
  );
}
