import React, { useContext } from 'react';
import { useState } from 'react';
import { View, Image, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Input, Text } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Feather from "@expo/vector-icons/Feather";
import { useNavigation, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Home'
import { StackTratamento } from '../Tratamento';
import Informacoes from '../Informacoes';
import StackAdmin from '../Admin'
import Chat from '../Chat';
import { ContextInfo, ContextInfoProvider } from '../ContextInfo/contextinfo';
import { IconButton } from 'react-native-paper';




const Stack = createStackNavigator();

export default function StackDeAcesso() {
  const {flagAdm, logout} = useContext(ContextInfo)
  const navigation = useNavigation()


  return (

    <Stack.Navigator>
        
        
      {
      flagAdm?
       ( <>
      
        <Stack.Screen name='StackAdmin' component={StackAdmin} options={{ headerShown: false }} />
        <Stack.Screen name='Chat' component={Chat} />
    
        </>)
        :
        (<>
   
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='Home' component={Home} options={{
                    title: 'Home',
                    headerStyle: {
                        backgroundColor: '#97D8AE',
                        borderColor: '#97D8AE',
                        borderWidth: 2,
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,

                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: '500',
                        fontSize: 30,
                    },
                    headerTitleAlign: "center",
                    headerRight: () => (
                        <IconButton
                          icon='door-open'
                          size={34}
                          color='white'
                          onPress={() => {
                            navigation.navigate('Inicio')
                            logout()}}
                        />
                      )
                }}/>
        <Stack.Screen name='Informacoes' component={Informacoes} options={{ headerShown: false }} />
        <Stack.Screen name='StackTratamento' component={StackTratamento} options={{ headerShown: false }} />
        <Stack.Screen name='Chat' component={Chat} />
    
        </>)
      }
    </Stack.Navigator>
    )

}




export function Login({ navigation }) {
  const [emailLogin, setEmailLogin] = useState('');
  const [senhaLogin, setSenhaLogin] = useState('');
  const {flagAdm, setFlagAdm, senhaAdm , loginAdm,
    inputSenha,
    inputEmail,
  
  } = useContext(ContextInfo)



  const entrar = () => {
    if (emailLogin == loginAdm && senhaLogin == senhaAdm){
      setFlagAdm(!flagAdm)
    } else if (emailLogin == inputEmail && senhaLogin == inputSenha) {
      navigation.navigate('Home')
    } else {
      navigation.navigate('Cadastro')
    }

    // navigation.navigate('Chat', { name: name })
  }

  return (

    <LinearGradient
      colors={['#CDE4AD', '#97D8AE', '#78D1D2']}
      //  background: linear-gradient(179.96deg, #CDE4AD 3.67%, #97D8AE 54.83%, #78D1D2 99.97%)
      style={styles.container}>

      <Feather
        name='user'
        size={120}
        style={styles.icon}
        color='grey'
      />

      <KeyboardAvoidingView style={styles.containerInputs}>

        <View style={styles.AlturaElementosInput}>

          <Text style={styles.inputLabel}>Email </Text>

          <Input
            style={styles.inpt}
            // placeholder='Email'
            keyboardType='email-address'
            // leftIcon={{ type: 'font-awesome', name: 'envelope' }}
            onChangeText={setEmailLogin}
          />
        </View>

        <View style={styles.AlturaElementosInput}>
          <Text style={styles.inputLabel}> Senha</Text>
          <Input
            style={styles.inpt}
            // placeholder='Senha'
            secureTextEntry={true}
            // leftIcon={{ type: 'font-awesome', name: 'lock' }}
            onChangeText={setSenhaLogin}
          />
        </View>

        <View style={styles.AlturaElementosInput}>
          <TouchableOpacity
            style={styles.botao}
            onPress={entrar}>
            <Text style={styles.textoBotao}> Confirmar </Text>

          </TouchableOpacity>
        </View>

      </KeyboardAvoidingView>



      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')} style={styles.VoltarCadastro}>
          <Text style={styles.textoVoltarCadastro}> Ainda não tem conta?</Text>
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
    paddingTop: '20%'

  },
  containerInputs: {
    width: '75%',
    height: '54%',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "white",
    backgroundColor: 'white',
    opacity: 0.71,

  },
  AlturaElementosInput: {

    height: '33.33%'
  },
  inpt: {
    width: '100%',
    height: 65,
  },
  inputLabel: {
    width: "100%",
    height: 40,
    fontWeight: 400,
    fontSize: 20,
    alignItems: 'flex-start',
    justifyContent: 'center',
    color: 'black',
    paddingLeft: 10,
    paddingTop: 18,

  },
  botao: {
    width: '80%',
    height: '50%',
    backgroundColor: '#78D1D2',
    borderWidth: 2,
    borderColor: '#589BAA',
    // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',

  },

  textoBotao: {
    // paddingTop: 5,
    textAlign: 'center',
    alignItems: 'center',
    color: '#FFFFFF',
    fontSize: 23,
    fontWeight: 500,
    fontStyle: 'normal',
    color: 'white'

  },
  icon: {
    opacity: 0.71,
    alignSelf: 'center'
  },
  VoltarCadastro: {
    paddingTop: '20%',
    width: '100%',
    height: '5%',
  },
  textoVoltarCadastro: {
    fontSize: 20,
    fontWeight: 700,
    color: '#2E7A4D',
    // textDecorationLine: 'underline'

  }
});
