import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';


import {ContextInfo, ContextInfoProvider } from './src/pages/ContextInfo/contextinfo';
import StackHomePage from './src/pages/Inicio';

const Stack = createStackNavigator();



function MyStack() {
  return (
    <ContextInfoProvider>
    
  
        <StackHomePage/>
    
        

    </ContextInfoProvider>

  )
    S
}

export default function App() {
  return (

    <NavigationContainer>
      <MyStack />
     
    </NavigationContainer>
  )
}









