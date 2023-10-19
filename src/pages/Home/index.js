
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import * as React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';


import Feather from "@expo/vector-icons/Feather";

import { useContext, useState } from 'react';
import { ContextInfo } from '../ContextInfo/contextinfo';




const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function Home() {
  
  return (

    <Tab.Navigator
      initialRouteName="StackFeed"
      screenOptions={{
        tabBarActiveTintColor: '#9cf0b9',
      }}
    >
      <Tab.Screen
        name="StackFeed"
        component={StackFeed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
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
            <MaterialCommunityIcons name="account" color={color} size={30} />
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
      <Stack.Screen name='EditUser' component={EditUser} options={{ title: 'Editar Dados',  }} />

      <Stack.Screen name='Home' component={Feed} options={{ title: '' }} />
      <Stack.Screen name='QrCodeUser' component={QrCodeUser} options={{ title: '' }} />
    </Stack.Navigator>
  );
}

function Feed() {
  const navigation = useNavigation()
  const { inputNome, setInputNome } = useContext(ContextInfo)

  return (


    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#FFF' }}>

      <View style={feed.cima}>

        <TouchableOpacity
          onPress={() => navigation.navigate('StackTratamento')}
          style={{ width: '40%', height: '40%', backgroundColor: '#97D8AE', borderRadius: 10, justifyContent: 'center', alignItems: 'center', gap: 15, shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.30, shadowRadius: 4.65, elevation: 8, }}>

          <MaterialCommunityIcons name="pill" color={'white'} size={50} />

          <Text style={{ fontSize: 18, fontWeight: '800', color: '#3C8F5A' }}>
            Tratamento
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Chat', { name: { inputNome } })}
          style={{ width: '40%', height: '40%', backgroundColor: '#97D8AE', borderRadius: 10, justifyContent: 'center', alignItems: 'center', gap: 15, shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.30, shadowRadius: 4.65, elevation: 8, }}>

          <MaterialCommunityIcons name="comment-account" color={'white'} size={50} />

          <Text style={feed.textoBotao}>
            Suporte
          </Text>

        </TouchableOpacity>

        <View style={feed.options}>

        </View>

        <View style={feed.options}>

        </View>

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
  },

  options: {
    width: '40%',
    height: '40%',
    backgroundColor: '#cdcdcd',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',

  }
})



function Profile() {

  const navigation = useNavigation()


   
  return (
    <LinearGradient
      colors={['#CDE4AD', '#97D8AE', '#ffffff', '#ffffff']}
      style={profile.container} >

      <View style={profile.cima}>
        <View style={{ width: '100%', height: '2%' }}>
        </View>

        <Text style={{ fontSize: 25, color: 'white', fontWeight: 'bold' }}>Meu Perfil</Text>

        <View style={{ borderWidth: 2, borderColor: 'black', borderRadius: 10, width: 80, height: 80, justifyContent: 'center', alignItems: 'center' }}>

          <MaterialCommunityIcons name="account" color={'black'} size={80} />

        </View>

      </View>

      <View style={profile.viewNameUser}>

        <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white' }}>
          Nome Usuario
        </Text>

      </View>

      <View style={profile.infoView}>

        <View style={profile.infoUser}>

          <Text style={profile.textInfo}>Idade</Text>
          <Text style={profile.textInfoUser}>21</Text>

        </View>

        <View style={profile.infoUser}>

          <Text style={profile.textInfo}>alergia </Text>
          <Text style={profile.textInfoUser}> Dipirona, fermento</Text>

        </View>

        <View style={profile.infoUser}>

          <Text style={profile.textInfo}>Cont. emergencia</Text>
          <Text style={profile.textInfoUser}>48 996760904</Text>

        </View>

      </View>

      <View style={profile.viewOptions}>

        <TouchableOpacity style={profile.btns} onPress={() => navigation.navigate('EditUser')} >
          <MaterialCommunityIcons name="account-edit" color={'green'} size={40} />
        </TouchableOpacity>

        <TouchableOpacity style={profile.btns} onPress={() => navigation.navigate('QrCodeUser')} >
          <MaterialCommunityIcons name="qrcode" color={'green'} size={40} />
        </TouchableOpacity>

      </View>







    </LinearGradient>
  );
}

const profile = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 15,
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
    height: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  infoView: {
    width: '60%',
    height: '45%',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.30,
    shadowRadius: 10,
    elevation: 3
  },

  infoUser: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,

  },

  textInfo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'grey'
  },

  textInfoUser: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'grey'
  },

  viewOptions: {
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    gap: 20
  },

  btns: {
    width: 55,
    height: 55,
    backgroundColor: '#97D8AE',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },





})

export function QrCodeUser() {

  const navigation = useNavigation()

  return (
    <View style={qrcode.container}>

      <View style={qrcode.viewTxt}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'grey' }}>Meu QRCode</Text>
      </View>

      <View style={qrcode.viewQrcode}>

        <QRCode
          value="google.com"
          color='black'
          size={250}
        />

        {/* <MaterialCommunityIcons name="qrcode" color={'black'} size={400} /> */}
      </View>




    </View>
  )
}

const qrcode = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  viewTxt: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },

  viewQrcode: {
    height: 400,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'

  },
})




export function EditUser() {

  
  const navigation = useNavigation()
  const {
    inputNome, setInputNome,
    inputIdade, setInputIdade,
    inputAlergias, setInputAlergias,
    inputTelefone, setInputTelefone,
    inputContatoEmergencia, setInputContatoEmergencia,
    inputNtelefoneEmergencia, setNtelefoneEmergencia,
    inputNCep, setInputNcep,
    inputLogradouro, setInputLogradouro,
    inputNumeroCasa, setNumeroCasa,
    inputDoador, setInputDoador,
    inputSangue, setInputSangue,
    inputOrgao, setInputOrgao,
  } = useContext(ContextInfo)

  
  
  const [expandirNome, setExpandirNome] = useState(false)
  const [expandirContato, setExpandirContato] = useState(false)
  const [expandirEndereco, setExpandirEndereco] = useState(false)
  const [expandirSangue, setExpandirSangue] = useState(false)


  const [Border, setBorder] = useState(false);

  let borderColor = { borderColor: Border ? 'transparent' : '#ddd', }




  return (
    <View style={editU.container}>

      <ScrollView style={{ width: '100%', height: '100%', }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 15 }} >



          {/* inputs de nome/idade/alergia */}

          <TouchableOpacity onPress={() => {
            setExpandirNome(!expandirNome)
            setBorder(!Border);
          }} style={[editU.btnExpandir, borderColor]}>

            <View style={editU.btnDescription}>
              <Text>Nome / Idade / Alergias</Text>
              <Feather name={expandirNome ? 'chevron-up' : 'chevron-down'}
                size={25} color="#bbb" />
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
              <View style={editU.viewInput}>
                <Text>Alergias</Text>
                <TextInput
                  style={editU.input}
                  value={inputAlergias}
                  onChangeText={setInputAlergias}
                />
              </View>
            </View>
          )}


          {/* inputs de telefone/ contato emergencia / telefone emergencia */}
          <TouchableOpacity onPress={() => {
            setExpandirContato(!expandirContato)
            setBorder(!Border);
          }} style={[editU.btnExpandir, borderColor]}>

            <View style={editU.btnDescription}>
              <Text>Contatos</Text>
              <Feather name={expandirContato ? 'chevron-up' : 'chevron-down'}
                size={25} color="#bbb" />
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
          <TouchableOpacity onPress={() => {
            setExpandirEndereco(!expandirEndereco)
            setBorder(!Border);
          }} style={[editU.btnExpandir, borderColor]}>

            <View style={editU.btnDescription}>
              <Text>Endereço</Text>
              <Feather name={expandirEndereco ? 'chevron-up' : 'chevron-down'}
                size={25} color="#bbb" />
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
          <TouchableOpacity onPress={() => {
            setExpandirSangue(!expandirSangue)
            setBorder(!Border);
          }} style={[editU.btnExpandir, borderColor]}>

            <View style={editU.btnDescription}>
              <Text>Tipo Sanguíneo / Doador</Text>
              <Feather name={expandirSangue ? 'chevron-up' : 'chevron-down'}
                size={25} color="#bbb" />
            </View>

          </TouchableOpacity>
          {/* ////////////////////////////////// */}

          {expandirSangue && (
            <View style={{ width: '100%', padding: 10 }}>

              <View style={editU.viewInput}>
                <Text> Tipo Sanguíneo </Text>
                <TextInput
                  style={editU.input}
                  value={inputDoador}
                  onChangeText={setInputDoador}
                />
              </View>

              <View style={editU.viewInput}>
                <Text>É Doador de Sangue?</Text>
                <TextInput
                  style={editU.input}
                  value={inputSangue}
                  onChangeText={setInputSangue}
                />
              </View>


              <View style={editU.viewInput}>
                <Text>é Doador de Orgão?</Text>
                <TextInput
                  style={editU.input}
                  value={inputOrgao}
                  onChangeText={setInputOrgao}
                />
              </View>
            </View>
          )}

        </View>
      </ScrollView>
      
      
    </View>
  )
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
    margin: 20
  },


  input: {
    width: '90%',
    height: 40,
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    paddingLeft: 10,
    paddingTop: 10
  },

  btnSalvar:{
    width:'60%' 
  }

})


