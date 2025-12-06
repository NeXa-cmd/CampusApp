import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import CoursScreen from '../screens/CoursScreen';
import ProfilScreen from '../screens/ProfilScreen';
import CourseDetailScreen from '../screens/CourseDetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Stack navigator for Cours tab to handle course details
function CoursStackNavigator({ route }) {
  const userName = route?.params?.userName;
  
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="CoursList" 
        component={CoursScreen}
        options={{ 
          title: 'Cours',
          headerStyle: {
            backgroundColor: '#2196F3',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen 
        name="CourseDetail" 
        component={CourseDetailScreen}
        options={({ route }) => ({ 
          title: route.params?.course?.name || 'Détail du cours',
          headerStyle: {
            backgroundColor: '#2196F3',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      />
    </Stack.Navigator>
  );
}

export default function TabNavigator({ route }) {
  const userName = route?.params?.userName;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Cours') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === 'Profil') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#2196F3',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopWidth: 1,
          borderTopColor: '#E0E0E0',
        },
        headerShown: false,
      })}
    >
      <Tab.Screen 
        name="Cours" 
        component={CoursStackNavigator}
        initialParams={{ userName }}
      />
      <Tab.Screen 
        name="Profil" 
        component={ProfilScreen}
        initialParams={{ userName }}
      />
    </Tab.Navigator>
  );
}