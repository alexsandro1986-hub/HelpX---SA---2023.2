import React from 'react';
import { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Input, Text } from 'react-native-elements';
import { Button } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
import { LinearGradient } from 'expo-linear-gradient';

export default function Home({ navigation }) {

  const entrar = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'principal' }]
    })
  }

  const Cadastrar = () => {
    navigation.navigate('cadastro')
  }

  return (

    <LinearGradient
      colors={['#CDE4AD', '#97D8AE', '#78D1D2']}
      //  background: linear-gradient(179.96deg, #CDE4AD 3.67%, #97D8AE 54.83%, #78D1D2 99.97%)
      style={styles.container}
    >
      <View style={styles.container}>


        <View>
          <View style={styles.tituloLogo}>

            <Image style={styles.img}
              source={require('../img/infinito.png')}
            />
          </View>
          <View style={styles.viemtexto}>
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
    width: '100%',
    height:'45%'
  },
  containerBotao: {
    width: '100%',
    height: '55%',
    justifyContent: 'space-evenly',
    alignItems: 'center'

  },
  botao: {
    width: '100%',
    width: 130,
    height: 30,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 20,

  },
  textoBotao: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center'

  },
  img: {
    width: 200,
    height: 100,
    marginTop: 25,
  },
  viemtexto: {
    width: 200,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'

  },
  textoTitulo: {
    fontSize: 50,
    color: 'white'

  },

});

