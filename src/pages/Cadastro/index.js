
import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, KeyboardAvoidingViewBase } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { ContextInfo, ContextInfoProvider } from '../ContextInfo/contextinfo';
import { useContext } from 'react';
import { KeyboardAvoidingView } from 'react-native';


const Stack = createStackNavigator();

export default function Cadastro() {
  return (
    
      
      <Stack.Navigator>
        <Stack.Group>

          <Stack.Screen name='Email' component={Email('Senha')} options={{ headerShown: false }}/>
          <Stack.Screen name='Senha' component={Senha('Confirmar Senha')} options={{ headerShown: false }} />
          <Stack.Screen name='Confirmar Senha' component={ConfirmarSenha('StackDeAcesso')} options={{ headerShown: false }} />


        </Stack.Group>
      </Stack.Navigator>
    
  );
}


const Header = () => (

  <View style={styles.header}>
    <View style={styles.containerLogo}>
      <Image
        source={require('../img/logo.png')}

        style={{ width: 300, height: 200 }}
        resizeMode="contain"
      />
    </View>
  </View>
);

function Email(a) {
  return function ({ navigation }) {
    const { inputEmail, setInputEmail } = useContext(ContextInfo)
    return (
      <View style={styles.body}>
        <View style={styles.container}>
          <TextInput
            style={[styles.input, { marginBottom: 20 }]}
            placeholder="Email"
            onChangeText={setInputEmail}
            value={inputEmail}
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
    const { inputSenha, setInputSenha } = useContext(ContextInfo)
    return (

      <KeyboardAvoidingView
       style={styles.body}
      >
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
    const { inputConfirmaSenha, setInputConfirmaSenha } = useContext(ContextInfo)
    return (
      <View style={styles.body}>
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
  header: {
    backgroundColor: 'black',
    height: 200,

  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97d8ae',

  },
  containerLogo: {
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

