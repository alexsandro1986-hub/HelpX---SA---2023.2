import React from 'react';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Text } from 'react-native-elements';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function cadastro({ navigation }) {


  const entrar = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'principal' }]
    })
  }


  return (

    <View style={styles.container}>

{/* Usuario */}
      <Input
        placeholder='Nome...'
        keyboardType='email-address'
        leftIcon={{ type: 'font-awesome', name: 'envelope' }}
        onChangeText={value => setEmail(value)}
      />

      <Input
        placeholder='Telefone...'
        keyboardType='email-address'
        leftIcon={{ type: 'font-awesome', name: 'envelope' }}
        onChangeText={value => setEmail(value)}
      />

      <Input
        placeholder='Idade...'
        keyboardType='email-address'
        leftIcon={{ type: 'font-awesome', name: 'envelope' }}
        onChangeText={value => setEmail(value)}
      />

      <Input
        placeholder='CPF...'
        keyboardType='email-address'
        leftIcon={{ type: 'font-awesome', name: 'envelope' }}
        onChangeText={value => setEmail(value)}
      />
      <Input
        placeholder='Peso...'
        keyboardType='email-address'
        leftIcon={{ type: 'font-awesome', name: 'envelope' }}
        onChangeText={value => setEmail(value)}
      />

      {/* Endereço */}
      <Input
        placeholder='Cep...'
        keyboardType='email-address'
        leftIcon={{ type: 'font-awesome', name: 'envelope' }}
        onChangeText={value => setEmail(value)}
      />

      <Input
        placeholder='Rua...'
        keyboardType='email-address'
        leftIcon={{ type: 'font-awesome', name: 'envelope' }}
        onChangeText={value => setEmail(value)}
      />

      <Input
        placeholder='numero...'
        keyboardType='email-address'
        leftIcon={{ type: 'font-awesome', name: 'envelope' }}
        onChangeText={value => setEmail(value)}
      />

      <Input
        placeholder='complemento...'
        keyboardType='email-address'
        leftIcon={{ type: 'font-awesome', name: 'envelope' }}
        onChangeText={value => setEmail(value)}
      />
      {/* /*contato de Emergencia*/}
      <Input
        placeholder='Contato de Emergercia...'
        keyboardType='email-address'
        leftIcon={{ type: 'font-awesome', name: 'envelope' }}
        onChangeText={value => setEmail(value)}
      />

      <Input
        placeholder='Telefone de Emergencia...'
        keyboardType='email-address'
        leftIcon={{ type: 'font-awesome', name: 'envelope' }}
        onChangeText={value => setEmail(value)}
      />

      <Input
        placeholder='Digite seu email...'
        keyboardType='email-address'
        leftIcon={{ type: 'font-awesome', name: 'envelope' }}
        onChangeText={value => setEmail(value)}
      />


      <Button
        icon={
          <Icon
            name="check"
            size={15}
            color="white"

          />
        }
        title="Entrar"
        onPress={entrar}


      />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    flexDirection: 'column'

  },
  botao: {
    width: '100%',
    marginTop: 10
  },
});
