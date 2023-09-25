import React from 'react';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Text } from 'react-native-elements';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/pages/Login';
import Home from './src/pages/Home';
import Cadastro from './src/pages/Cadastro';
import principal from './src/pages/Home';



const Stack = createStackNavigator();


// function MyStack() {
//   return(
//     <Stack.Navigator>
//       <Stack.Screen name='login' component={login} />
//       <Stack.Screen name='principal' component={principal} />
//       <Stack.Screen name='cadastro' component={cadastro} />
//     </Stack.Navigator>
//   )
// }

export default function App() {
 return(
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Home' component={principal} /> 
      <Stack.Screen name='Cadastro' component={Cadastro} />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Welcome Screen' options={{headerShown: false}} component={WelcomeScreen}/>.
    </Stack.Navigator>
    </NavigationContainer>
 )
  }








