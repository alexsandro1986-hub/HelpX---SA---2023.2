import React from 'react';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Text } from 'react-native-elements';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from './src/pages/Login';
import Home from './src/pages/Home';
import Cadastro from './src/pages/Cadastro';





const Stack = createStackNavigator();




export default function App() {
 return(
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} /> 
      <Stack.Screen name='Cadastro' component={Cadastro} />
      <Stack.Screen name='Login' component={Login} />
     
    </Stack.Navigator>
    </NavigationContainer>
 )
  }








