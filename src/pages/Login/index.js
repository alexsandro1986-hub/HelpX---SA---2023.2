import React from 'react';
import { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Input, Text } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
import { LinearGradient } from 'expo-linear-gradient';
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";



export default function Login({ navigation }) {

  const [name, setName] = useState('');
  const [senha, setSenha] = useState('');
  const entrar = () => {
    navigation.navigate('Chat', { name: name })
  }

  return (

    <LinearGradient
      colors={['#CDE4AD', '#97D8AE', '#78D1D2']}
      //  background: linear-gradient(179.96deg, #CDE4AD 3.67%, #97D8AE 54.83%, #78D1D2 99.97%)
      style={styles.container}
    >


      <View style={styles.container}>
        <View>
          <TouchableOpacity
            onPress={() =>
              navigation.goBack()
            }>
            <Feather
              name="arrow-left"
              size={30}
              color="white"
            />
          </TouchableOpacity>

          <View style={styles.containerTitulo}>
            <Text style={styles.textoTitulo}>
              Login
            </Text>
          </View>
        </View>

        <View style={styles.containerInput}>
          <View>

            <Text style={styles.inputLabel}>Email </Text>
            <Input
              style={styles.inpt}
              // placeholder='Digite seu email...'
              keyboardType='email-address'
            
              // leftIcon={{ type: 'font-awesome', name: 'envelope' }}
              onChangeText={setName}
            />
          </View>
          <View>
            <Text style={styles.inputLabel}> Senha</Text>
            <Input
              style={styles.inpt}
              // placeholder='Digite sua senha...'
              secureTextEntry={true}
              // leftIcon={{ type: 'font-awesome', name: 'lock' }}
              onChangeText={value => setSenha(value)}
            />
          </View>
        </View>



        <TouchableOpacity
          style={styles.botao}
          onPress={entrar}
        >
          <Text style={styles.textoBotao}> Confirmar </Text>

        </TouchableOpacity>


      </View>
    </LinearGradient >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#C7FFCC",
    alignItems: "center",
    flexDirection: 'column',

    gap: 11,
  },
  containerInput: {
    width: 199,
    height: 188,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "white",
    backgroundColor: 'white',
    opacity: 0.71

  },
  inpt: {

  },
  inputLabel: {
    width: "100%",
    height: 16,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 13,
    lineHeight: 16,
    alignItems: 'flex-start',
    justifyContent: 'center',
    color: 'black',
    paddingLeft: 10,
    paddingTop: 18,
    opacity: 1
  },
  botao: {
    width: 134,
    height: 30,
    // left: 42px;
    // top: 299px;

    backgroundColor: '#78D1D2',
    borderWidth: 1,
    borderColor: '#589BAA',
    // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    borderRadius: 10

  },
  textoBotao: {
    paddingTop: 5,
    textAlign: 'center',
    alignItems: 'center',
    color: '#FFFFFF',
    fontSize: 13,
    lineHeight: 16,
    fontWeight: 700,
    fontStyle: 'normal',

  },
  botaoBack: {

  },
  img: {
    width: 200,
    height: 100,
    marginTop: 25,
  },
  containerTitulo: {
    width: 200,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'

  },
  textoTitulo: {

    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 24,
    lineHeight: 29,
    alignItems: 'center',
    textAlign: 'center',
    color: '#FFFFFF',
  }
});

