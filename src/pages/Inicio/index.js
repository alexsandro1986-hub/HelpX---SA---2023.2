import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Animated, { Easing, useSharedValue, useAnimatedStyle, withRepeat, withSequence, withDelay, withDecay, withBouncing, withSpring } from 'react-native-reanimated'; // Remova a segunda importação de withSpring
import AppIntroSlider from 'react-native-app-intro-slider';
import Cadastro from '../Cadastro';
import StackDeAcesso from '../Login';
import { useState } from 'react';

const slides =[
  {
    key:1,
    title:'Helpx',
    text:'Seu Passaporte de Informações Médicas'
  },
  {
    key:2,
    title:'Cadastro',
    text:'Cadastre suas informações pessoais e médicas essenciais e crie seu QR Code de emergência.'
  },
  {
    key:3,
    title:'Pronto',
    text:'Esteja preparado para qualquer situação!'
  }
]



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


  const [showHome, setShowHome] = useState(false)

  function renderSlides({ item }){
    return(
      <View style={{flex:1}}>

        <Text>{item.title}</Text>

        <Text>{item.text}</Text>

      </View>
    )
  }

  if(showHome){
    navigation.navigate('StackDeAcesso');
  }else{

    return (
      <AppIntroSlider
        renderItem={renderSlides}
        data={slides}
        activeDotStyle={{
          backgroundColor:'#009cff',
          width:30
        }}
        onDone={()=>(navigation.navigate('StackDeAcesso'))}
       />
    );
  }
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
