import React, { useContext, useState, useEffect } from "react";
import { View, Image, StyleSheet, KeyboardAvoidingView } from "react-native";
import { Input, Text } from "react-native-elements";
import { TouchableOpacity } from "react-native";
import { useNavigation, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";
import { StackTratamento } from "../Tratamento";
import StackAdmin from "../Admin";
import Chat from "../Chat";
import { ContextInfo, ContextInfoProvider } from "../ContextInfo/contextinfo";
import Cadastro from "../Cadastro";
import StackInfo from "../Informacoes";
import api from "../Api_gerenciamento";
import AsyncStorage from "@react-native-async-storage/async-storage";


const Stack = createStackNavigator();

export default function StackDeAcesso() {
  const { flagAdm} = useContext(ContextInfo);

  return (
    <Stack.Navigator>
      {flagAdm ? (
        <>
          <Stack.Screen
            name="StackAdmin"
            component={StackAdmin}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Chat" component={Chat} />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Informacoes"
            component={StackInfo}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Cadastro"
            component={Cadastro}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="StackTratamento"
            component={StackTratamento}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Chat" component={Chat} />
        </>
      )}
    </Stack.Navigator>
  );
}

export function Login() {
  const [emailLogin, setEmailLogin] = useState("");
  const [senhaLogin, setSenhaLogin] = useState("");
  const {
    flagAdm,
    setFlagAdm,
    senhaAdm,
    loginAdm,
    inputSenha,
    inputEmail,
    vetorUser,
    id,
    setId,
    userInfo,
    setUserInfo,
  } = useContext(ContextInfo);
  const [texto, setTexto] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    listarTodosUsuarios();
  }, []);

  const listarTodosUsuarios = async () => {
    try {
      const response = await api.get("/users");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const entrar = (flagAdm) => {
    console.log(flagAdm);
    switch (true) {
      case flagAdm == true:
        setFlagAdm(!flagAdm);
        break;
      case flagAdm == false:
        navigation.navigate("Home");
        break;
      //Novo usuário - Colher informações
      case flagAdm == "newUser":
        navigation.navigate("Informacoes");
        break;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          // source={require("../img/logoHelpX.png")}
          style={{ width: "150%" }}
          resizeMode="contain"
        />
      </View>

      <View style={styles.containerInputs}>
        <View style={styles.AlturaElementosInput}>
          <Text style={styles.inputLabel}>Email </Text>

          <Input
            // placeholder='Email'
            keyboardType="email-address"
            // leftIcon={{ type: 'font-awesome', name: 'envelope' }}
            onChangeText={setEmailLogin}
            inputContainerStyle={styles.inpt} // Isso remove a borda inferior
          />
        </View>
        <Text> {texto} </Text>
        <View style={styles.AlturaElementosInput}>
          <Text style={styles.inputLabel}> Senha</Text>
          <Input
            // placeholder='Senha'
            secureTextEntry={true}
            onChangeText={setSenhaLogin}
            inputContainerStyle={styles.inpt} // Isso remove a borda inferior
          />
        </View>

        {/* <TouchableOpacity style={styles.botao} onPress={Cadastrar}>
          <Text style={styles.textoBotao}>Cadastrar</Text>
        </TouchableOpacity> */}

        <TouchableOpacity
          style={styles.botao}
          onPress={() => {
            const login = async (email, senha) => {
              try {
                const response = await api.post("/login", {
                  email,
                  senha,
                });
                console.log("Resposta axios id", response.data.id);

                const guardandoId = async (idUser) => {
                  console.log("Entrei aqui para guardar o id", idUser);
                  try {
                    await AsyncStorage.setItem("id", idUser);
                  } catch (error) {
                    // Error saving data
                    console.log("Erro ao salvar ");
                  }
                };
                guardandoId(response.data.id);

                entrar(response.data.flagAdm);
              } catch (error) {
                console.log(error.message);
                console.log(error.response.data);
                let texto_resposta = error.response.data;
                setTexto(Object.values(texto_resposta));
              }
            };
            login(emailLogin, senhaLogin);
          }}
        >
          <Text style={styles.textoBotao}> Confirmar </Text>
        </TouchableOpacity>

        <View style={styles.viewCadastro}>
          <Text
            style={styles.textCad}
            onPress={() => navigation.navigate("Cadastro")}
          >
            Nâo possui uma conta?
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#C7FFCC",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: "20%",
    backgroundColor: "#97D8AE",
  },
  containerInputs: {
    width: "98%",
    height: "60%",
    borderWidth: 4,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderColor: "white",
    backgroundColor: "white",
    opacity: 0.8,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 10,
  },

  inpt: {
    borderBottomWidth: 1,
    width: "80%",
    height: 35,
  },

  inputLabel: {
    height: 50,
    fontWeight: 400,
    fontSize: 20,
    alignItems: "flex-end",
    justifyContent: "center",
    color: "black",
    paddingLeft: 10,
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
    fontWeight: "700",
    color: "#4292ff",
  },
  logo: {
    height: "40%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});