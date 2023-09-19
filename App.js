import React from 'react';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Text } from 'react-native-elements';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import login from './screens/login';
import principal from './screens/principal';
import cadastro from './screens/cadastro';


const Stack = createStackNavigator();


function MyStack() {
  return(
    <Stack.Navigator>
      <Stack.Screen name='login' component={login} />
      <Stack.Screen name='principal' component={principal} />
      <Stack.Screen name='cadastro' component={cadastro} />
    </Stack.Navigator>
  )
}

export default function App() {
 return(
  <NavigationContainer>
    <MyStack/>
  </NavigationContainer>
 )
  }








