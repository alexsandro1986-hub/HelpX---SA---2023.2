
import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import QRCode from 'react-native-qrcode-svg';
import { useContext } from 'react';
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
      <Stack.Screen name='Home' component={Feed} options={{ title: '' }} />
      <Stack.Screen name='QrCodeUser' component={QrCodeUser} options={{ title: '' }} />
      <Stack.Screen name='EditUser' component={EditUser} options={{ title: '' }} />
    </Stack.Navigator>
  );
}

function Feed() {
  const navigation = useNavigation()
  const {inputNome, setInputNome} = useContext(ContextInfo)
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
          onPress={() => navigation.navigate('Chat', { name: {inputNome} })}
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

          <Text style={profile.textInfo}>alergia</Text>
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
  const {teste} = useContext(ContextInfo)

  


  return (
    <View style={editU.container}>

           <TextInput
           style={editU.input}
           value={teste}
           onChangeText={elemento.Settar}
           key={index}
                />
    
       

  
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

  viewInput:{
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'red'
  },

  input: {
    width: '40%',
    height: '10%',
    backgroundColor: '#cdcdcd',
    borderRadius: 10,
    
  }

})


