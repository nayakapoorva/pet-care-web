import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: '#7B3F00',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tabs.Screen
        name="deworming"
        options={{
          title: 'Deworming',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="health-and-safety" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="vaccination"
        options={{
          title: 'Vaccination',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="vaccines" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
