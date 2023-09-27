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


const Stack = createStackNavigator();


function MyStack() {
  return(
    <Stack.Navigator>
      <Stack.Group>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Tratamento' component={Tratamento} 
         options={{
          title: 'Tratamento',
          headerStyle: {
            backgroundColor: '#97D8AE',
            borderColor: '#97D8AE',
            borderWidth: 2,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold',
          },
          headerTitleAlign: "center",
        }}/>
      <Stack.Screen name='Login' component={Login} options={{ headerShown: false }}/>
      <Stack.Screen name='Inicio' component={Inicio} />
      <Stack.Screen name='Cadastro' component={Cadastro} options={{ headerShown: false }}/>
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

  







