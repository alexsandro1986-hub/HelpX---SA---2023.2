import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from './src/pages/Login';
import Home from './src/pages/Home'
import QrCodeUser from './src/pages/Home'
import Cadastro from './src/pages/Cadastro';
import Inicio from './src/pages/Inicio';
import { StackTratamento } from './src/pages/Tratamento';
import Informacoes from './src/pages/Informacoes';
import Chat from './src/pages/Chat';



import {ContextInfo, ContextInfoProvider } from './src/pages/ContextInfo/contextinfo';


const Stack = createStackNavigator();


function MyStack() {
  return (
    <ContextInfoProvider>
      <Stack.Navigator>
        <Stack.Group>
          
          <Stack.Screen name='Inicio' component={Inicio} />
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='StackTratamento' component={StackTratamento} options={{ headerShown: false }} />
          <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen name='Cadastro' component={Cadastro} options={{ headerShown: false }} />
          <Stack.Screen name='Informacoes' component={Informacoes} options={{ headerShown: false }} />

          


        </Stack.Group>
      </Stack.Navigator>

    </ContextInfoProvider>

  )
}

export default function App() {
  return (

    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}









