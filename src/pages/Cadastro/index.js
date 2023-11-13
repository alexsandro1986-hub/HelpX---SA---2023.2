
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
          source={require('../img/logoPreto.png')}

          style={{ width: 500, height: 400 }}
          resizeMode="contain"
        />

      </View>
      <View style={styles.container}>

        <TextInput
          style={[styles.input, { marginBottom: 20 }]}
          placeholder="Email"
          onChangeText={setInputEmail}
          value={inputEmail}
        />
        <TextInput
          style={[styles.input, { marginBottom: 20 }]}
          placeholder="Senha"
          onChangeText={setInputSenha}
          value={inputSenha}

        />
        <TextInput
          style={[styles.input, { marginBottom: 20 }]}
          placeholder="ConfirmarSenha"
          secureTextEntry={true}
          onChangeText={setInputConfirmaSenha}
          value={inputConfirmaSenha}
        />
        <TouchableOpacity style={styles.botao} onPress={() => {
          console.log('oi', inputEmail)
        }}>

          <Text style={styles.textoBotao}>OK</Text>


        </TouchableOpacity>
      </View>

    </View>

  );
}





function Email(a) {
  return function ({ navigation }) {

    return (

      <View style={styles.body}>
        <View style={styles.logo}>
          <Image
            source={require('../img/logoPreto.png')}

            style={{ width: 500, height: 400 }}
            resizeMode="contain"
          />

        </View>
        <View style={styles.container}>

          <TextInput
            style={[styles.input, { marginBottom: 20 }]}
            placeholder="Email"
            onChangeText={setInputEmail}
            value={inputEmail}
          />
          <TextInput
            style={[styles.input, { marginBottom: 20 }]}
            placeholder="Senha"
            //secureTextEntry={true}
            onChangeText={setInputSenha}
            value={inputSenha}

          />
          <TouchableOpacity style={styles.botao} onPress={() => {
            console.log('oi', inputEmail)
            navigation.navigate(a)
          }}>

            <Text style={styles.textoBotao}>OK</Text>


          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

function Senha(a) {

  return function ({ navigation }) {

    return (

      <KeyboardAvoidingView
        style={styles.body}
      >
        <View style={styles.logo}>
          <Image
            source={require('../img/logoPreto.png')}

            style={{ width: 500, height: 400 }}
            resizeMode="contain"
          />

        </View>
        <View style={styles.container}>
          <TextInput
            style={[styles.input, { marginBottom: 20 }]}
            placeholder="Senha"
            //secureTextEntry={true}
            onChangeText={setInputSenha}
            value={inputSenha}

          />
          <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate(a)}>

            <Text style={styles.textoBotao}>OK</Text>


          </TouchableOpacity>
        </View>

      </KeyboardAvoidingView>
    );
  }
}

function ConfirmarSenha(a) {
  return function ({ navigation }) {

    return (
      <View style={styles.body}>
        <View style={styles.logo}>
          <Image
            source={require('../img/logoPreto.png')}

            style={{ width: 500, height: 400 }}
            resizeMode="contain"
          />

        </View>
        <View style={styles.container}>
          <TextInput
            style={[styles.input, { marginBottom: 20 }]}
            placeholder="ConfirmarSenha"
            secureTextEntry={true}
            onChangeText={setInputConfirmaSenha}
            value={inputConfirmaSenha}
          />
          <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate(a)}>

            <Text style={styles.textoBotao}>Cadastrar</Text>


          </TouchableOpacity>
        </View>

      </View>
    );
  }
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
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0f3e9',
    borderRadius: 40,
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

