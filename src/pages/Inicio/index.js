import React, { useState} from 'react';
import { View, Image, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
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

        <Stack.Screen name='Inicio' component={Inicio} options={{ headerShown: false }} />
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
    navigation.navigate('Cadastro');
  };



  return (
    <LinearGradient
      colors={['#CDE4AD', '#97D8AE', '#78D1D2']}
      style={styles.container}
    >

      <View style={styles.inicio}>
        <Image
          source={require('../img/logoPreto.png')}

          style={{ width: 500, height: 400 }}
          resizeMode="contain"
        />




      </View>
      <View style={styles.inicio}>
        <Image
          source={require('../img/h1.png')}

          style={{ width: 500, height: 400, marginTop: '40%', }}
          resizeMode="contain"
        />




      </View>



      {/* <ScrollView
        style={styles.scrollView}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>

        <View style={styles.divScroll}>

          <View style={styles.h1}>
            <Text style={styles.textoUm}>Seu Passaporte de Informações Médicas</Text>
          </View>

          <View style={styles.h2}>
            <Text style={styles.textoDois}>Cadastre suas informações pessoais e médicas essenciais e crie seu QR Code de emergência.</Text>
          </View>

          <View style={styles.h3}>
            <Text style={styles.textoTres}>Esteja preparado para qualquer situação!</Text>
          </View>




        </View>

      </ScrollView> */}






      <View style={styles.containerBotao}>
        <TouchableOpacity style={styles.botao} onPress={entrar}>
          <Text style={styles.textoBotao}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={Cadastrar}>
          <Text style={styles.textoBotao}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },

  containerBotao: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: '60%',
  },
  botao: {
    width: 130,
    height: 60,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 25,
  },
  textoBotao: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
    padding: 13,
  },

  h1: {

    height: 400,
    width: 390,
    justifyContent: 'center',
    alignItems: 'center',
  },
  h2: {
    marginTop: 50,
    height: 400,
    width: 390,
    justifyContent: 'center',
    alignItems: 'center',

  },
  h3: {
    marginTop: 140,
    height: 400,
    width: 390,
    justifyContent: 'center',
    alignItems: 'center',


  },

  textoUm: {
    marginTop: 170,
    width: '100%',
    fontSize: 34,
    color: 'white',
    textAlign: 'center',
    bottom: 50,
  },
  textoDois: {

    width: '95%',
    height: '100%',
    fontSize: 40,
    textAlign: 'center',

    color: 'white',
  },
  textoTres: {
    width: '95%',
    height: '100%',
    fontSize: 40,
    textAlign: 'center',
    color: 'white',
  },

  inicio: {
    height: 100,
    marginTop: 140,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inicioText: {
    fontSize: 90,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    bottom: 50,
  },

  scrollView: {

    marginHorizontal: 20,
    width: '90%',
  },
  divScroll: {
    flexDirection: 'row',
  },

});
