import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationContainer} from '@react-navigation/native';
import UserList from '../components/UserList';
import LoginForm from '../components/LoginForm';

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'black',
          tabBarActiveBackgroundColor: 'lightblue',
          tabBarInactiveBackgroundColor: 'white',
          tabBarLabelStyle: {fontSize: 16},
        }}>
        <Tab.Screen
          name="Users"
          component={UserList}
          options={{
            tabBarLabel: 'Users',
            tabBarIcon: ({color, size}) => (
              <Icon name="people" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Login"
          component={LoginForm}
          options={{
            tabBarLabel: 'Login',
            tabBarIcon: ({color, size}) => (
              <Icon name="lock-closed" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
