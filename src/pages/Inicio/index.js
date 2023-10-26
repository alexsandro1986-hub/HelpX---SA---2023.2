import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Animated, { Easing, useSharedValue, useAnimatedStyle, withRepeat, withSequence, withDelay, withDecay, withBouncing, withSpring } from 'react-native-reanimated'; // Remova a segunda importação de withSpring

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
  const translateY = useSharedValue(0);

  // Configuração da animação
  translateY.value = withRepeat(
    withSequence(
      withSpring(-100, { damping: 2, stiffness: 80 }), // Primeiro movimento para cima
      withSpring(0, { damping: 2, stiffness: 80 }), // Volta para a posição inicial
    ),
    -1, // Repete a animação infinitamente
    false // Não faz o retorno suave
  );

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });


  const entrar = () => {
    navigation.navigate('StackDeAcesso');
  };

  return (
    <LinearGradient colors={['#CDE4AD', '#97D8AE', '#78D1D2']} style={styles.container}>
      <View style={styles.inicio}>
        <Image source={require('../img/logoPreto.png')} style={{ width: 500, height: 400 }} resizeMode="contain" />
      </View>
      <View style={styles.inicio}>
        <TouchableOpacity style={styles.botao} onPress={entrar}>
          <Animated.View style={[animatedStyle]}>
            <Image source={require('../img/logo2.png')} style={{ width: 500, height: 500, marginTop: '40%' }} resizeMode="contain" />
          </Animated.View>
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
