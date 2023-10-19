import React, { useState, useEffect, useRef } from 'react';
import { View, Image, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';

export default function Inicio({ navigation }) {
  const entrar = () => {
    navigation.navigate('Login');
  };

  const Cadastrar = () => {
    navigation.navigate('Cadastro');
  };

  

  return (
    <LinearGradient
      colors={['#CDE4AD', '#97D8AE', '#78D1D2']}
      style={styles.container}
    >
     
      <View style={styles.inicio}>
        <Text style={styles.inicioText}>
          HelpX
        </Text>
      </View>

        
  <ScrollView style={styles.scrollView} horizontal={true}>

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

    </ScrollView>

   
        
    
     

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
  },
  botao: {
    width: 130,
    height: 40,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 20,
  },
  textoBotao: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
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
  
  inicio:{
    height: 100,
    marginTop: 140,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inicioText:{
    fontSize: 90,
    fontWeight: 'bold',
    color: 'Black',
    textAlign: 'center',
    bottom: 50,
  }, 
  scrollView: {
    
    marginHorizontal: 20,
    width: '90%',
  },
  divScroll:{
    flexDirection: 'row',
  },
  
});
