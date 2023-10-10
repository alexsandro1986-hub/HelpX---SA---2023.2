import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';




const Stack = createStackNavigator();


const Header = () => (
    
  <View style={styles.header}>
    <View style={styles.containerLogo} >
        <Image
          source={require('/img/logopronto.png')}
          style={{ width: 300, height: 300 }}
          resizeMode="contain"
        />
    </View>


    
  </View>
    
);


export default function Cadastro() {
  return (

    <><Header />
    
    <Stack.Navigator>

      <Stack.Group>

        <Stack.Screen name='Email' component={Email('Senha')} options={{ headerShown: false }} />
        <Stack.Screen name='Senha' component={Senha('Confirmar Senha')} options={{ headerShown: false }} />
        <Stack.Screen name='Confirmar Senha' component={ConfirmarSenha('')} options={{ headerShown: false }} />


      </Stack.Group>

    </Stack.Navigator></>
  )
}



function Email(a) {
  return function ({ navigation }) {

    return (
      <View  style={styles.body}>
        <View style={styles.teste}>
        <TextInput
          style={styles.input}
          placeholder="Email"
        // onChangeText={(text) => setNome(text)}
        // value={nome}
        />
        </View>
         <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate(a)}>
        
        <Text>OK</Text>
               
        
         </TouchableOpacity>
      </View>
    );
  }
}

function Senha(a) {
  return function ({ navigation }) {
    return (
            
      <View  style={styles.body}>         
        <View style={styles.teste}>
        <TextInput
              style={styles.input}
              placeholder="Senha"
              // onChangeText={(text) => setNome(text)}
              // value={nome}
        />
        </View>
        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate(a)}>
        
       <Text>OK</Text>
              
       
        </TouchableOpacity>
      </View>
    );
  }
}

function ConfirmarSenha(a) {
  return function ({ navigation }) {
    return (
      <View  style={styles.body}>
        <View style={styles.teste}>
        <TextInput
          style={styles.input}
          placeholder="ConfirmarSenha"
        // onChangeText={(text) => setNome(text)}
        // value={nome}
        />
        </View>
         <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate(a)}>
        
            <Text>OK</Text>
               
        
         </TouchableOpacity>
      </View>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: '#97d8ae',
  },

  teste:{
    justifyContent: 'center',
    alignContent: 'center',
    
  },
  container: {
    width: '90%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0f3e9',
    borderRadius: '40px',
  },
  input: {
    
    fontSize: 15,
    width: 250,
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 10,
    borderRadius: 20,
   

  },
 
  botao:{
    backgroundColor: 'blue',
    width: 150,
    height: 30,
    borderRadius: 10,
    justifyContent: 'center',
    alignContent: 'center',
   
  },
  header:{
    backgroundColor: 'black',
    height: '20%',
    
  },
  body:{
    width: '100%',
    paddingTop: 160,
    justifyContent: 'center',
    alignContent: 'center',
    
  },

  containerLogo:{
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',


  },
  

});



 
 
