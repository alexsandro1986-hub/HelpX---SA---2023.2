import React from 'react';
import { View, Image, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

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
     
        <View style={styles.page}>
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
 
  page: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    
  },
  containerLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -60, 
  },
  logo: {
    width: 300,
    height: 300,
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
    height: 30,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 20,
  },
  textoBotao: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
  },
  h1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  h1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black', 
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
    color: 'black',
  },
  descricao: {
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
  },
});
