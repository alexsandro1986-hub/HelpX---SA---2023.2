import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from './src/pages/Login';
import Home from './src/pages/Home'
import  QrCodeUser  from './src/pages/Home'
import Cadastro from './src/pages/Cadastro';
import Inicio from './src/pages/Inicio';
import { StackTratamento } from './src/pages/Tratamento';
import Informacoes from './src/pages/Informacoes';

const Stack = createStackNavigator();


function MyStack() {
  return (

      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen name='Inicio' component={Inicio} options={{ headerShown: false }}  />
          <Stack.Screen name='Home' component={Home} 
           options={{
                        title: 'Home',
                        headerStyle: {
                            backgroundColor: '#97D8AE',
                            borderColor: '#97D8AE',
                            borderWidth: 2,
                            borderBottomLeftRadius: 20,
                            borderBottomRightRadius: 20,

                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: '500',
                            fontSize: 30,
                        },
                        headerTitleAlign: "center",
                    }} 
                    /> 
          <Stack.Screen name='StackTratamento' component={StackTratamento} options={{ headerShown: false }} />
          <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
          <Stack.Screen name='Cadastro' component={Cadastro} options={{ headerShown: false }} />
          <Stack.Screen name='Informacoes' component={Informacoes} options={{ headerShown: false }} />
          
        </Stack.Group>
      </Stack.Navigator>


  )
}

export default function App() {
  return (

    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}









