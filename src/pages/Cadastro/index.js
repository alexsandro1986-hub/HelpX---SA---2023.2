import React from 'react';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Text } from 'react-native-elements';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-web';


export default function Cadastro({ navigation }) {


  const entrar = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'principal' }]
    })
  }


  return (

    <View style={styles.container}>
      <Text style={styles.texto_primeira_cx}>CADASTRO</Text>
      <View style={styles.primeira_Caixa}>
        <ScrollView>
          <View style={styles.usuario}>
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
          </View>
          {/* Endereço */}
          <View>
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
          </View>
          {/* /*contato de Emergencia*/}

          <View>
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
              placeholder='Nome Medico...'
              keyboardType='email-address'
              leftIcon={{ type: 'font-awesome', name: 'envelope' }}
              onChangeText={value => setEmail(value)}
            />
            <Input
              placeholder='Tel-Medico...'
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

          </View>
        </ScrollView>
      </View>

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
    backgroundColor: "#C7FFCC",
    alignItems: "center",
    flexDirection: 'column',
    gap: 31,
  },
  primeira_Caixa: {
    width: '85%',
    backgroundColor:'#FFF',
    borderRadius: 15,
    alignItems: 'center'
  },
  texto_primeira_cx: {
    fontSize: 50,
    marginTop: 150,
  },
  botao: {
    width: '100%',
    marginTop: 10
  },
  usuario: {
    width: '90%',

  }
});
