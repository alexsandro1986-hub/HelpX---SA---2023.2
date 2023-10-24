import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import {ContextInfo, ContextInfoProvider } from './src/pages/ContextInfo/contextinfo';
import Informacoes from './src/pages/informacoes';

const Stack = createStackNavigator();


function MyStack() {
  return (
    <ContextInfoProvider>
    
     <Informacoes/>
        {/* <StackHomePage/> */}
        

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









