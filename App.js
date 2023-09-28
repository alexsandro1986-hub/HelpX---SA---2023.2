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
import Cadastro from './src/pages/Cadastro';
import Inicio from './src/pages/Inicio';
import Tratamento from './src/pages/Tratamento';
import informacoes from './src/pages/informacoes';

const Stack = createStackNavigator();


function MyStack() {
  return(
    <Stack.Navigator>

      <Stack.Group>
      <Stack.Screen name='informacoes' component={informacoes} />
      <Stack.Screen name='Cadastro' component={Cadastro} options={{ headerShown: false }}/>
      <Stack.Screen name='Tratamento' component={Tratamento} options={{ headerShown: false }}/>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Login' component={Login} options={{ headerShown: false }}/>
      <Stack.Screen name='Inicio' component={Inicio} />
      
      </Stack.Group>

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

  







