import React from 'react';
import { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Input, Text } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Cadastro from '../Cadastro';

import StackDeAcesso from '../Login';

const Stack = createStackNavigator();

export default function StackHomePage() {

  return (

    <Stack.Navigator>
      <Stack.Group>

      <Stack.Screen name='Inicio' component={Inicio}  options={{ headerShown: false }}/>
      <Stack.Screen name='StackDeAcesso' component={StackDeAcesso} options={{ headerShown: false }} />
      <Stack.Screen name='Cadastro' component={Cadastro} options={{ headerShown: false }} />

      </Stack.Group>
    </Stack.Navigator>
    )

}
export function Inicio({ navigation }) {

  const entrar = () => {
    navigation.navigate('StackDeAcesso')
    }
  

  const Cadastrar = () => {
    navigation.navigate('Cadastro')
  }

  return (

    <LinearGradient
      colors={['#CDE4AD', '#97D8AE', '#78D1D2']}
      //  background: linear-gradient(179.96deg, #CDE4AD 3.67%, #97D8AE 54.83%, #78D1D2 99.97%)
      style={styles.container}
    >
      <View style={styles.container}>
      {/* <Image style={styles.img}
            source={require('/img/Texto do seu parágrafo.jpg')}
           
          /> */}

        <View>
          <View style={styles.tituloLogo}>
           <Text style={styles.textoTitulo}>
              HELPX
            </Text>
          </View>
        </View>

        <View style={styles.containerBotao}>

          <TouchableOpacity
            style={styles.botao}
            onPress={entrar}
          >
            <Text style={styles.textoBotao}> Entrar </Text>

          </TouchableOpacity>
          <TouchableOpacity
            style={styles.botao}
            onPress={Cadastrar}
          >
            <Text style={styles.textoBotao}> Cadastrar </Text>

          </TouchableOpacity>
        </View>



      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#C7FFCC",
    alignItems: "center",
    flexDirection: 'column',
    gap: 11,
  },
  tituloLogo:{
    width:'100%',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '10%'

  },
  containerBotao: {
    width: '100%',
    height: '60%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingBottom: '10%'

  },
  botao: {
    width: 180,
    height: 80,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'

  },
  textoBotao: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
  

  },
  img: {
    width: 440,
    height: 140,
    marginTop: 25,
  },

  textoTitulo: {
    fontSize: 75,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center'

  },

});

