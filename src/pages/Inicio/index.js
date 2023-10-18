import React from 'react';
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
     
        <View style={styles.logoMarca}>
          <View style={styles.containerLogo}>
            
            <Image
              source={require('../img/logoHelpX.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
        </View>

        
        <View style={styles.h1}>
          
            <Text style={styles.titulo}>HelpX: Seu Passaporte de Informações Médicas</Text>
                 
            <Text style={styles.subtitulo}>
              Cadastre suas informações pessoais e médicas essenciais e crie seu QR Code de emergência.
            </Text>
          
            <Text style={styles.descricao}>Esteja preparado para qualquer situação!</Text>
            <Text style={styles.descricao}>
              Basta escanear o seu QR Code para compartilhar rapidamente informações críticas com profissionais de saúde em caso de necessidade.
            </Text>
        </View>
        
     

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
 
  logoMarca: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    
  },
  containerLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -60, 
  },
  logo: {
    width: 400,
    height: 200,
    // backgroundColor: 'black',
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
    justifyContent: 'center',
    alignItems: 'center',
    
    
    
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    bottom: 50,
  },
  subtitulo: {
    fontSize: 22,
    textAlign: 'center',
    Bottom: 10,
    fontWeight: 'bold',
    color: 'white',
  },
  descricao: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    top: 30,
  },
});
