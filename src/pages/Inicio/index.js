import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Cadastro from '../Cadastro';
import StackDeAcesso from '../Login';
import { useState } from 'react';

const slides =[
  {
    key:1,
    title:'Helpx',
    text:'Seu Passaporte de Informações Médicas',
    img: require('../../../assets/id_card.png')
  },
  {
    key:2,
    title:'Cadastro',
    text:'Cadastre suas informações pessoais e médicas essenciais e crie seu QR Code de emergência.',
    img : require('../../../assets/Register.png')
  },
  {
    key:3,
    title:'Pronto',
    text:'Esteja preparado para qualquer situação!',
    img : require('../../../assets/Happy.png')
  }
]

function renderSlides({ item }){
  return(
    <View style={{flex:1,justifyContent: 'flex-start', alignItems: 'center',}}>

      <Image 
      source={item.img}
      style={{width: '90%', height: '73%', resizeMode:'cover' }}
      />

      <Text
      style={{
        paddingTop:25,
        paddingBottom:10,
        fontSize:25,
        fontWeight:'bold',
        color:'#77D792'

      }}
      >{item.title}</Text>

      <Text
        style={{
          color:'#b5b5b5',
          paddingHorizontal:25,
          fontSize: 15
        }}
      >{item.text}</Text>

    </View>
    
  )
}


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
  
  const [showHome, setShowHome] = useState(false)


  if(showHome){
    navigation.navigate('StackDeAcesso');
  }else{

    return (
      <AppIntroSlider
        renderItem={renderSlides}
        data={slides}
        activeDotStyle={{
          backgroundColor:'green',
          width:30
        }}
        renderNextButton={()=>{}}
        renderDoneButton={()=><Text style={{fontSize:20, fontWeight:'bold', color:'#77D792'}}>Acessar!</Text>}
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