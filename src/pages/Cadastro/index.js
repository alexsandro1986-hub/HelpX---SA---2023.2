
import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, KeyboardAvoidingViewBase } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { ContextInfo, ContextInfoProvider } from '../ContextInfo/contextinfo';
import { useContext } from 'react';
import { KeyboardAvoidingView } from 'react-native';




export default function Cadastro() {
  const { inputEmail, setInputEmail } = useContext(ContextInfo)
  const { inputSenha, setInputSenha } = useContext(ContextInfo)
  const { inputConfirmaSenha, setInputConfirmaSenha } = useContext(ContextInfo)
  return (

    <View style={styles.body}>
      <View style={styles.logo}>
        <Image
          source={require('../img/logoHelpX.png')}

          style={{ width: 600 }}
          resizeMode="contain"
        />

      </View>
      <View style={styles.container}>
        <View style={styles.viewInputs}>

          <Text style={styles.inputLabel}>E-mail</Text>
          <TextInput
            style={[styles.input, { marginBottom: 20 }]}
            placeholder="Email"
            onChangeText={setInputEmail}
            value={inputEmail}
          />
        </View>

        <View style={styles.viewInputs}>

          <Text style={styles.inputLabel}> Senha</Text>
          <TextInput
            style={[styles.input, { marginBottom: 20 }]}
            placeholder="Senha"
            onChangeText={setInputSenha}
            value={inputSenha}

          />
        </View>
        <View style={styles.viewInputs}>

          <Text style={styles.inputLabel}>Confirmar Senha</Text>
          <TextInput
            style={[styles.input, { marginBottom: 20 }]}
            placeholder="ConfirmarSenha"
            secureTextEntry={true}
            onChangeText={setInputConfirmaSenha}
            value={inputConfirmaSenha}
          />
        </View>

        <TouchableOpacity style={styles.botao} onPress={() => {
          console.log('oi', inputEmail)
        }}>

          <Text style={styles.textoBotao}>OK</Text>


        </TouchableOpacity>
      </View>

    </View>

  );
}

const styles = StyleSheet.create({

  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97d8ae',

  },
  logo: {
    height: 100,
    marginBottom: 90,
    justifyContent: 'center',
    alignItems: 'center',

  },

  container: {
    width: '90%',
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    opacity: 0.8,
    borderRadius: 20,
  },
  input: {

    fontSize: 15,
    width: '80%',

    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 10,
    borderRadius: 20,

    backgroundColor: 'white',

  },

  viewInputs:{
    width:'100%',
    height:'25%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  inpt: {
    borderBottomWidth: 1,
    width: '80%',
    height: 35
  },

  inputLabel: {

    height: 50,
    fontWeight: 400,
    fontSize: 20,
    alignItems: 'flex-end',
    justifyContent: 'center',
    color: 'black',
    paddingLeft: 10,
    paddingTop: 18,

  },
  botao: {
    backgroundColor: '#78D1D2',
    width: 180,
    height: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',


  },
  textoBotao: {
    color: 'white',
    // fontFamily: 'Helvetica',
    fontWeight: 'bold',
  },
});

