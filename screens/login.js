import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Input, Text } from 'react-native-elements';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function login({ navigation }) {

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

    <View style={styles.container}>
      <View>
        <View>

          <Image style={styles.img}
            source={require('../img/infinito.png')}
          />
        </View>
        <View style={styles.viemtexto}>
          <Text style={styles.texto}>
            HELPX
          </Text>
        </View>
      </View>


      <Input
        placeholder='Digite seu email...'
        keyboardType='email-address'
        leftIcon={{ type: 'font-awesome', name: 'envelope' }}
        onChangeText={value => setEmail(value)}
      />

      <Input
        placeholder='Digite sua senha...'
        secureTextEntry={true}
        leftIcon={{ type: 'font-awesome', name: 'lock' }}
        onChangeText={value => setSenha(value)}
      />

      <Button
        icon={
          <Icon
            name="check"
            size={15}
            color="white"
            buttonStyle={styles.botao}
          />
        }
        title="Entrar"
        onPress={entrar}


      />

      <Button
        icon={
          <Icon
            name="user"
            size={15}
            color="white"
            buttonStyle={styles.botao}
          />
        }
        title="Cadastrar"
        onPress={Cadastrar}


      />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C7FFCC",
    alignItems: "center",
    flexDirection: 'column',

    gap: 11,
  },
  botao: {
    width: '100%',
    marginTop: 10
  },
  img: {
    width: 200,
    height: 100,
    marginTop:25,
  },
  viemtexto: {
    width: 200,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'

  },
  texto: {
    fontSize:50
  }
});
