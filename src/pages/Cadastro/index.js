
import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { ContextInfo, ContextInfoProvider } from '../ContextInfo/contextinfo';
import { useContext, useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { useNavigation, NavigationContainer } from "@react-navigation/native";
import api from '../Api_gerenciamento';



export default function Cadastro() {
  const { inputEmail, setInputEmail } = useContext(ContextInfo)
  const { inputSenha, setInputSenha } = useContext(ContextInfo)
  const { inputConfirmaSenha, setInputConfirmaSenha } = useContext(ContextInfo)
  const [texto, setTexto] = useState('')
  const navigation = useNavigation();
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

          <Text style={styles.inputLabel}>Email</Text>

          <TextInput
            style={[styles.input, { marginBottom: 20 }]}
            onChangeText={setInputEmail}
            value={inputEmail}
            returnKeyType="done"
          />
        </View>
        
        <View style={styles.viewInputs}>

          <Text style={styles.inputLabel}>Senha</Text>
          <TextInput
            style={[styles.input, { marginBottom: 20 }]}
            onChangeText={setInputSenha}
            value={inputSenha}
            returnKeyType="done"

          />
        </View>

        <View style={styles.viewInputs}>

          <Text style={styles.inputLabel}>Confirmar Senha</Text>
          <TextInput
            style={[styles.input, { marginBottom: 20 }]}
            secureTextEntry={true}
            onChangeText={setInputConfirmaSenha}
            value={inputConfirmaSenha}
          />
        </View>

        <Text style={styles.msgError}> {texto} </Text>

        <TouchableOpacity style={styles.botao}
          onPress={() => {
            const cadastro = async (email, senha) => {
              try {
                const response = await api.post("/cadastro", { email, senha })

                console.log('OK', response.data)
                Alert.alert('Tudo pronto!', 'Faça login para continuar.');
                navigation.navigate("Login")
              } catch (error) {
                console.log(error)
                console.log(error.message)
                console.log(error.response.data)
                let texto_resposta = error.response.data
                setTexto(Object.values(texto_resposta))

              }
            }

            cadastro(inputEmail, inputSenha)


          }}>

          <Text style={styles.textoBotao}>Cadastrar</Text>


        </TouchableOpacity>

        <View style={styles.viewCadastro}>
          <Text
            style={styles.textCad}
            onPress={() => navigation.navigate("Login")}
          >
            Já pussui uma conta ?
          </Text>
        </View>
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
    height: "40%",
    justifyContent: 'center',
    alignItems: 'center',

  },

  container: {
    width: "98%",
    height: "60%",
    borderWidth: 4,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderColor: "white",
    backgroundColor: "white",
    opacity: 0.8,
    alignItems: "center",
    justifyContent: 'flex-start',
    padding: 7,

  },
  input: {

    fontSize: 15,
    borderBottomWidth: 1,
    borderColor:'green',
    width: "80%",
    height: 30,

  },

  viewInputs: {
    width: '100%',
    height: '23%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  inputLabel: {
    height: 50,
    width: '80%',
    fontWeight: 400,
    fontSize: 20,
    color: "#5b5b5b",
    paddingLeft: 5,
    paddingTop: 18,

  },
  botao: {
    width: "60%",
    height: 50,
    backgroundColor: "#97D8AE",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 10,


  },
  textoBotao: {
    // paddingTop: 5,
    textAlign: "center",
    alignItems: "center",
    color: "#FFFFFF",
    fontSize: 23,
    fontWeight: 500,
    fontStyle: "normal",
    color: "white",
  },
  viewCadastro: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "15%",
  },
  textCad: {
    fontSize: 18,
    fontWeight: "500",
    color: "#4292ff",
  },

  msgError:{
    fontSize:16,
    fontWeight:'500',
    color:'red'
  }
});

