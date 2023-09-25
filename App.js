import React from 'react';
import { TouchableOpacity} from 'react-native';

import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Text } from 'react-native-elements';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/pages/Login';
import Home from './src/pages/Home'
import cadastro from './src/pages/Cadastro';
import Inicio from './src/pages/Inicio';


const Stack = createStackNavigator();


function MyStack() {
  return(
    <Stack.Navigator>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='inicio' component={Inicio} />
      <Stack.Screen name='home' component={Home} />
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

  







