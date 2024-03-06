import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Modal,
  Alert,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import QRCode from 'react-native-qrcode-svg';
import { ContextInfo } from '../ContextInfo/contextinfo';
import { useState, useRef, useContext, useEffect, Suspense } from 'react';
import Feather from '@expo/vector-icons/Feather';
import ViewShot from 'react-native-view-shot';
import * as MediaLibrary from 'expo-media-library';
import { Picker } from '@react-native-picker/picker';
import { RadioButton } from 'react-native-paper';
import api from '../Api_gerenciamento';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function Home() {
  const navigation = useNavigation();
  const { setId, id, userDados, idGuardado } = useContext(ContextInfo);

  return (
    <Tab.Navigator
      initialRouteName="StackFeed"
      screenOptions={{
        tabBarActiveTintColor: '#9cf0b9',
      }}>
      <Tab.Screen
        name="StackFeed"
        component={StackFeed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={50} />
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={50} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  geral: {
    width: '50%',
    height: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },
});

function StackFeed() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        component={Feed}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditUser"
        component={EditUser}
        options={{
          title: 'Editar Dados',
          headerTitleAlign: 'center',
          headerBackTitle: 'Voltar',
          headerStyle: {
            backgroundColor: '#97D8AE',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 24,
          },
        }}
      />

      <Stack.Screen
        name="QrCodeUser"
        component={QrCodeUser}
        options={{
          title: 'Meu QRCode',
          headerTitleAlign: 'center',
          headerBackTitle: 'Voltar',
          headerStyle: {
            backgroundColor: '#97D8AE',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 24,
          },
        }}
      />
    </Stack.Navigator>
  );
}

function Feed() {
  const navigation = useNavigation();
  const { inputNome, setInputNome } = useContext(ContextInfo);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#FFF',
      }}>
      <View style={feed.cima}>
        <TouchableOpacity
          onPress={() => navigation.navigate('StackTratamento')}
          style={{
            width: '40%',
            height: '40%',
            backgroundColor: '#97D8AE',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 15,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 4.65,
            elevation: 8,
          }}>
          <MaterialCommunityIcons name="pill" color={'white'} size={50} />

          <Text style={{ fontSize: 18, fontWeight: '800', color: '#3C8F5A' }}>
            Tratamento
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Chat', { name: { inputNome } })}
          style={{
            width: '40%',
            height: '40%',
            backgroundColor: '#97D8AE',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 15,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 4.65,
            elevation: 8,
          }}>
          <MaterialCommunityIcons
            name="comment-account"
            color={'white'}
            size={50}
          />

          <Text style={{ fontSize: 18, fontWeight: '800', color: '#3C8F5A' }}>
            Suporte
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('QrCodeUser')}
          style={{
            width: '40%',
            height: '40%',
            backgroundColor: '#97D8AE',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 15,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 4.65,
            elevation: 8,
          }}>
          <MaterialCommunityIcons name="qrcode" color={'white'} size={50} />

          <Text style={{ fontSize: 18, fontWeight: '800', color: '#3C8F5A' }}>
            QR Code
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('EditUser')}
          style={{
            width: '40%',
            height: '40%',
            backgroundColor: '#97D8AE',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 15,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 4.65,
            elevation: 8,
          }}>
          <MaterialCommunityIcons
            name="account-edit"
            color={'white'}
            size={50}
          />

          <Text style={{ fontSize: 18, fontWeight: '800', color: '#3C8F5A' }}>
            Editar Perfil
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const feed = StyleSheet.create({
  cima: {
    height: '50%',
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
    gap: 20,
    backgroundColor: 'transparent',
    borderBottomWidth: 2,
    borderColor: '#97D8AE',
    marginTop: '5%',
  },

  options: {
    width: '40%',
    height: '40%',
    backgroundColor: '#cdcdcd',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function Profile() {
  const navigation = useNavigation();
  const { flagAdm, setFlagAdm, setInputEmail, setInputSenha, idGuardado } =
    useContext(ContextInfo);
  const [modalVisible, setModalVisible] = useState(false); // MUDA VISIBILIDADE DO MODAL
  const userDadosRef = useRef(userDados);
  const [userDados, setUserDados] = useState(null);

  useEffect(() => {
    const pegandoId = async () => {
      const idzinho = await AsyncStorage.getItem('id');
      console.log('Entrei aqui na home para pegar o id', idzinho);
      idGuardado.push(idzinho);
      try {
        const response = await api.get(`/users/logged/${idzinho}`);
        userDadosRef.current = response.data; // Utilizando o useRef
        setUserDados(response.data);
        console.log('Dados do usuario na home', response.data);
      } catch (error) {
        console.log(error.message);
        // console.log(error.response.data)
      }
    };
    pegandoId();
  }, []);

  // Função para sair e voltar para a tela inicial
  const limparStorage = async () => {
    await AsyncStorage.setItem('id', '');
  };
  const sair = () => {
    if (flagAdm) {
      setFlagAdm(!flagAdm);
    }
    limparStorage();
    setInputEmail('');
    setInputSenha('');
    navigation.popToTop();
  };

  const excluir_conta = async () => {
    try {
      const idz = await AsyncStorage.getItem('id');
      const response = await api.delete(`users/delete/${idz}`);

      console.log('Conta excluída com sucesso', response.data);
      sair();
    } catch (error) {
      console.log(error);
      console.log('Erro ao tentar excluir conta ');
    }
  };

  const renderizarInfoUsuario = () => {
    const usuario = userDadosRef.current;
    console.log('uuu', usuario);
    return (
      <View style={profile.containerInfos}>
        <View style={profile.viewNameUser}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'green', }}>
            {usuario[0].nome}
          </Text>
        </View>
        <View style={profile.infoView}>
          <View style={profile.infoUser}>
            <Text style={profile.textInfo}>Idade</Text>
            <Text style={profile.textInfoUser}>{usuario[0].idade}</Text>
          </View>

          <View style={profile.infoUser}>
            <Text style={profile.textInfo}>Alergia</Text>
            <Text style={profile.textInfoUser}>
              {usuario[0].possuialergias[0].alergias.alergias}
            </Text>
          </View>

          <View style={profile.infoUser}>
            <Text style={profile.textInfo}>Cont. Emergência</Text>
            <Text style={profile.textInfoUser}>
              {usuario[0].contatoemergencia[0].nomecontatoemergencia}
            </Text>

            <Text style={profile.textInfoUser}>
              {usuario[0].contatoemergencia[0].telefoneemergencia}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <>
      {userDados && (
        <View style={profile.container}>
          
          <View style={profile.cima}>
            <View style={{ width: '100%', height: '2%' }}></View>

            <Text style={{ fontSize: 25, color: 'green', fontWeight: 'bold' }}>
              Meu Perfil
            </Text>
            <View
              style={{
                borderColor: 'black',
                borderWidth: 2,
                borderRadius: 10,
                width: 80,
                height: 80,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <MaterialCommunityIcons
                name="account"
                color={'black'}
                size={80}
              />
            </View>
          </View>

          <View>
            <TouchableOpacity
              style={{ width: 90, backgroundColor: 'gray', height: 35, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}
              onPress={() => {
                setModalVisible(true);
              }}>
              <Text style={{fontSize:13, color: 'white', fontWeight: 'bold' }}>Excluir conta</Text>
            </TouchableOpacity>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}>
              <View style={profile.modalPosicao}>
                <View style={profile.modalzinho}>
                  <MaterialCommunityIcons
                    name="alert"
                    color={'orange'}
                    size={80}
                  />
                  <Text style={profile.textoModal}>
                    {' '}
                    Deseja excluir sua conta?
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                      gap: 60
                    }}>
                    <TouchableOpacity
                      style={{
                        height: 40,
                        width: 120,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#d22d2d',
                        borderRadius: 8
                      }}
                      onPress={excluir_conta}>
                      <Text
                        style={
                          ([profile.textoModal], { color: 'white', fontSize: 22, fontWeight: 'bold' })
                        }>
                        Excluir
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        height: 40,
                        width: 120,
                        borderWidth: 2,
                        borderColor: '#97D8AE',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 8
                      }}
                      onPress={() => setModalVisible(!modalVisible)}>
                      <Text
                        style={
                          ([profile.textoModal],
                            { color: 'green', fontSize: 25 })
                        }>
                        Cancelar
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
          <View style={styles.sair}>
            <TouchableOpacity style={styles.button} onPress={sair}>
              <Text style={{fontSize:22, fontWeight:'700', color:'gray'}}>sair</Text>
            </TouchableOpacity>
          </View>

          <View>{renderizarInfoUsuario()}</View>
        </View>
      )}
    </>
  );
}

const profile = StyleSheet.create({
  modalPosicao: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  textoModal: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  modalzinho: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#fff',
    height: '40%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 7,
    elevation: 3,
  },

  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 15,
    backgroundColor: '#fff'
  },
  containerInfos: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 5,

  },

  cima: {
    width: '100%',
    height: '25%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 30,
  },

  viewNameUser: {
    width: '100%',
    height: '7%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,

  },

  infoView: {
    width: 250,
    height: '45%',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#97D8AE',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 7,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },

  infoUser: {
    height: '30%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,
  },

  textInfo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
  },

  textInfoUser: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'grey',
  },

  button: {
    height: 40,
    width: 120,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',

  },

});

export function QrCodeUser() {
  const viewShotRef = React.useRef(null);
  const { idGuardado } = useContext(ContextInfo);
  const handleSaveAndDownload = async () => {
    try {
      if (viewShotRef.current) {
        const result = await viewShotRef.current.capture();
        if (result) {
          await MediaLibrary.saveToLibraryAsync(result);
          Alert.alert('Vá para sua galeria', 'e imprima o seu qrcode');
          Alert.alert('Concluido', 'Imagem salva com sucesso!');
        } else {
          Alert.alert('Erro ao salvar a imagem: captura falhou');
        }
      }
    } catch (error) {
      console.error('Erro ao salvar a imagem:', error);
    }
  };

  return (
    <View style={qrcode.container}>
      <ViewShot ref={viewShotRef}>
        <View style={qrcode.viewQrcode}>
          <QRCode
            value={`${baseURL}/views/users/${idGuardado}`}
            color="black"
            size={250}
          />
        </View>
      </ViewShot>

      <TouchableOpacity
        onPress={handleSaveAndDownload}
        style={qrcode.saveButton}>
        <Text style={qrcode.buttonText}>Baixe o seu QR Code</Text>
      </TouchableOpacity>
    </View>
  );
}

const qrcode = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  viewQrcode: {
    height: 400,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  saveButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 8,
  },

  buttonText: {
    fontSize: 16,
    color: 'white',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  saveButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 8,
  },

  buttonText: {
    fontSize: 16,
    color: 'white',
  },
});

export function EditUser() {
  const navigation = useNavigation();
  const {
    inputNome,
    setInputNome,
    inputEmail,
    setInputEmail,
    inputIdade,
    setInputIdade,
    inputAlergias,
    setInputAlergias,
    inputTelefone,
    setInputTelefone,
    inputContatoEmergencia,
    setInputContatoEmergencia,
    inputNtelefoneEmergencia,
    setNtelefoneEmergencia,
    inputNCep,
    setInputNcep,
    inputLogradouro,
    setInputLogradouro,
    inputNumeroCasa,
    setNumeroCasa,
    inputDoador,
    setInputDoador,
  } = useContext(ContextInfo);

  const [expandirNome, setExpandirNome] = useState(false);
  const [expandirAlergia, setExpandirAlergia] = useState(false);
  const [expandirContato, setExpandirContato] = useState(false);
  const [expandirEndereco, setExpandirEndereco] = useState(false);
  const [expandirSangue, setExpandirSangue] = useState(false);

  const alergias = [
    'Nenhuma',
    'Nenhuma',
    'Rinite alérgica',
    'Asma alérgica',
    'Alimentos',
    'Picadas de insetos',
    'Atópica',
    'Medicamentos',
    'Produtos químicos',
    'Urticária',
    'Poeira doméstica',
    'Animais de estimação',
    'Látex',
    'Veneno de abelhas e vespas',
    'Metais',
    'Plantas',
    'Fungos',
    'Produtos de beleza',
    'Insetos de jardim',
    'Látex de frutas',
    'Produtos de limpeza',
    'Outras',
  ];
  const { alergiaSelecionado, setAlergiaSelecionada } = useContext(ContextInfo);

  const [sangue] = useState([
    '',
    'Tipo sanguineo',
    'A+',
    'A-',
    'B+',
    'B-',
    'AB+',
    'AB-',
    'O+',
    'O-',
  ]);
  const { inputTiposanguineo, setInputTiposanguineo } = useContext(ContextInfo);

  const [inputSangue, setInputSangue] = useState('option1');
  const [inputOrgao, setInputOrgao] = useState('option3');
  let EditarInformacoes = {
    //<<<<< Olá, faltar colocar o resto do inputs"
    nome: inputNome,
    email: inputEmail,
    sangue: 'B+',
    idade: Number(inputIdade),
    cpf: '89-000-222-11',
    telefoneusuario: inputTelefone,
    alergia: 'Rinite alérgica',
    alergia_especificacao: 'Nenhuma',
    comorbidade: 'Hipertensão arterial',
    comorbidade_especificacao: 'Nenhuma',
    logradouro: inputLogradouro,
    numerocasa: Number(inputNumeroCasa),
    ncep: Number(inputNCep),
    contatoemergencia: inputContatoEmergencia,
    emailemergencia: 'albert@gmail.com',
    telefoneemergencia: inputNtelefoneEmergencia,
    doadorsangue: inputSangue,
    doadororgao: inputOrgao,
    medicamento: 'Nenhum',
  };

  return (
    <View style={editU.container}>
      <ScrollView style={{ width: '100%', height: '100%' }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 15,
          }}>
          {/* inputs de nome/idade/alergia */}

          <TouchableOpacity
            onPress={() => {
              setExpandirNome(!expandirNome);
            }}
            style={editU.btnExpandir}>
            <View style={editU.btnDescription}>
              <Text>Nome / Idade </Text>
              <Feather
                name={expandirNome ? 'chevron-up' : 'chevron-down'}
                size={25}
                color="#bbb"
              />
            </View>
          </TouchableOpacity>
          {/* ////////////////////////////////// */}

          {expandirNome && (
            <View style={{ width: '100%', padding: 10 }}>
              <View style={editU.viewInput}>
                <Text>Nome</Text>
                <TextInput
                  style={editU.input}
                  value={inputNome}
                  onChangeText={setInputNome}
                />
              </View>
              <View style={editU.viewInput}>
                <Text>Idade</Text>
                <TextInput
                  style={editU.input}
                  value={inputIdade}
                  onChangeText={setInputIdade}
                />
              </View>
            </View>
          )}

          <TouchableOpacity
            onPress={() => {
              setExpandirAlergia(!expandirAlergia);
            }}
            style={editU.btnExpandir}>
            <View style={editU.btnDescription}>
              <Text>Alergias </Text>
              <Feather
                name={expandirNome ? 'chevron-up' : 'chevron-down'}
                size={25}
                color="#bbb"
              />
            </View>
          </TouchableOpacity>

          {expandirAlergia && (
            <View style={{ width: '100%', padding: 10 }}>
              <View style={styles.inputAlergias}>
                <Picker
                  mode="dropdown"
                  selectedValue={alergiaSelecionado}
                  onValueChange={(itemValue) =>
                    setAlergiaSelecionada(itemValue)
                  }>
                  {alergias
                    .filter((value, index) =>
                      alergiaSelecionado === 0
                        ? value
                        : index === 0
                          ? false
                          : value
                    )
                    .map((value, index) => (
                      <Picker.Item label={value} value={value} key={index} />
                    ))}
                  {/* alergias.map(al => {
                                        return <Picker.Item label={al} value={al} />
                                    }) */}
                </Picker>
              </View>
            </View>
          )}

          {/* inputs de telefone/ contato emergencia / telefone emergencia */}
          <TouchableOpacity
            onPress={() => {
              setExpandirContato(!expandirContato);
            }}
            style={[editU.btnExpandir]}>
            <View style={editU.btnDescription}>
              <Text>Contatos</Text>
              <Feather
                name={expandirContato ? 'chevron-up' : 'chevron-down'}
                size={25}
                color="#bbb"
              />
            </View>
          </TouchableOpacity>
          {/* ////////////////////////////////// */}

          {expandirContato && (
            <View style={{ width: '100%', padding: 10 }}>
              <View style={editU.viewInput}>
                <Text>Telefone</Text>
                <TextInput
                  style={editU.input}
                  value={inputTelefone}
                  onChangeText={setInputTelefone}
                />
              </View>

              <View style={editU.viewInput}>
                <Text>Contato de Emergencia</Text>
                <TextInput
                  style={editU.input}
                  value={inputContatoEmergencia}
                  onChangeText={setInputContatoEmergencia}
                />
              </View>

              <View style={editU.viewInput}>
                <Text>telefone de Emergencia</Text>
                <TextInput
                  style={editU.input}
                  value={inputNtelefoneEmergencia}
                  onChangeText={setNtelefoneEmergencia}
                />
              </View>
            </View>
          )}

          {/* inputs de endereço */}
          <TouchableOpacity
            onPress={() => {
              setExpandirEndereco(!expandirEndereco);
            }}
            style={[editU.btnExpandir]}>
            <View style={editU.btnDescription}>
              <Text>Endereço</Text>
              <Feather
                name={expandirEndereco ? 'chevron-up' : 'chevron-down'}
                size={25}
                color="#bbb"
              />
            </View>
          </TouchableOpacity>
          {/* ////////////////////////////////// */}

          {expandirEndereco && (
            <View style={{ width: '100%', padding: 10 }}>
              <View style={editU.viewInput}>
                <Text>CEP</Text>
                <TextInput
                  style={editU.input}
                  value={inputNCep}
                  onChangeText={setInputNcep}
                />
              </View>

              <View style={editU.viewInput}>
                <Text>Logradouro</Text>
                <TextInput
                  style={editU.input}
                  value={inputLogradouro}
                  onChangeText={setInputLogradouro}
                />
              </View>

              <View style={editU.viewInput}>
                <Text>N.° Casa</Text>
                <TextInput
                  style={editU.input}
                  value={inputNumeroCasa}
                  onChangeText={setNumeroCasa}
                />
              </View>
            </View>
          )}

          {/* inputs de sangue/ dorador sangue/ doador orgao */}
          <TouchableOpacity
            onPress={() => {
              setExpandirSangue(!expandirSangue);
            }}
            style={[editU.btnExpandir]}>
            <View style={editU.btnDescription}>
              <Text>Tipo Sanguíneo / Doador</Text>
              <Feather
                name={expandirSangue ? 'chevron-up' : 'chevron-down'}
                size={25}
                color="#bbb"
              />
            </View>
          </TouchableOpacity>
          {/* ////////////////////////////////// */}

          {expandirSangue && (
            <View style={{ width: '100%', padding: 10, gap: 10 }}>
              <View style={editU.inputDoador}>
                <Picker
                  mode="dropdown"
                  selectedValue={inputTiposanguineo}
                  onValueChange={(itemValue) =>
                    setInputTiposanguineo(itemValue)
                  }>
                  {sangue
                    .filter((value, index) =>
                      inputTiposanguineo === 0
                        ? value
                        : index === 0
                          ? false
                          : value
                    )
                    .map((value, index) => (
                      <Picker.Item label={value} value={value} key={index} />
                    ))}
                </Picker>
              </View>
              <View style={editU.radioButton}>
                <Text>Vôce é doador de sangue</Text>
                <RadioButton.Android
                  value="option1"
                  status={inputSangue === 'option1' ? 'checked' : 'unchecked'}
                  onPress={() => setInputSangue('option1')}
                  color="#007BFF"
                />
                <Text style={editU.radioLabel}>Sim</Text>
              </View>
              <View style={editU.radioButton}>
                <RadioButton.Android
                  value="option2"
                  status={inputSangue === 'option2' ? 'checked' : 'unchecked'}
                  onPress={() => setInputSangue('option2')}
                  color="#007BFF"
                />
                <Text style={editU.radioLabel}>Não</Text>
              </View>
              {/* radioButton  doador orgãos*/}
              <View style={editU.tiposSangue}>
                <View style={editU.radioGroup}>
                  <View style={editU.radioButton}>
                    <Text>Vôce é doador de orgãos</Text>
                    <RadioButton.Android
                      value="option3"
                      status={
                        inputOrgao === 'option3' ? 'checked' : 'unchecked'
                      }
                      onPress={() => setInputOrgao('option3')}
                      color="#007BFF"
                    />
                    <Text style={editU.radioLabel}>Sim</Text>
                  </View>
                  <View style={editU.radioButton}>
                    <RadioButton.Android
                      value="option4"
                      status={
                        inputOrgao === 'option4' ? 'checked' : 'unchecked'
                      }
                      onPress={() => setInputOrgao('option4')}
                      color="#007BFF"
                    />
                    <Text style={editU.radioLabel}>Não</Text>
                  </View>
                </View>
              </View>
            </View>
          )}

          <TouchableOpacity
            style={editU.btnSalvar}
            onPress={() => {
              const editandoUsuario = async (dados) => {
                console.log('Dados enviados ao backend', dados);
                const idz = await AsyncStorage.getItem('id');
                try {
                  const response = api.put(`/users/edit/${idz}`, dados);
                  console.log(response.data);
                  // Alert.alert('Dados editados');
                  navigation.navigate("Feed")
                } catch (error) {
                  console.log(error.response.data);
                }
              };
              editandoUsuario(EditarInformacoes);
            }}>
            <Text style={editU.btnText}>SALVAR</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const editU = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  btnExpandir: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#97D8AE',
  },

  btnDescription: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 15,
    paddingLeft: 15,
  },

  viewInput: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: 20,
  },

  input: {
    width: '90%',
    height: 40,
    borderBottomColor: '#97D8AE',
    borderBottomWidth: 1,
    paddingLeft: 10,
    paddingTop: 10,
  },

  btnSalvar: {
    width: 130,
    height: 45,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    borderWidth: 2,
    borderColor: '#97D8AE',
  },

  btnText: {
    fontSize: 17,
    fontWeight: '700',
    color: 'green',
  },
  logoutButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#FF6347',
    borderRadius: 5,
    padding: 10,
  },

  button: {
    alignItems: 'center',
  },
  radioButton: {
    alignItems: 'center',
  },
  radioLabel: {
    marginLeft: 8,
    fontSize: 16,
    color: '#333',
  },
  tiposSangue: {
    marginBottom: 10,
    marginTop: 10,
  },

  inputDoador: {
    borderColor: 'transparent',
    borderWidth: 1,
    gap: 2,
  },
  sair: {
    backgroundColor: 'black',
  },
});
