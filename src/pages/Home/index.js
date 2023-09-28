
import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#9cf0b9',
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
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
    justifyContent:'space-between',
    gap:10,
  },
});



function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#FFF' }}>

      <View style={feed.cima}>
 
        <TouchableOpacity style={{width:'40%', height:'40%', backgroundColor:'#97D8AE', borderRadius:10, justifyContent:'center', alignItems:'center', gap: 15, shadowColor: "#000",shadowOffset: {width: 0, height: 4 }, shadowOpacity: 0.30, shadowRadius: 4.65, elevation: 8,}}>
            
            <MaterialCommunityIcons name="pill" color={'white'} size={50} />

            <Text style={{fontSize: 18, fontWeight:'800', color:'#3C8F5A'}}>
              Tratamento
            </Text>
            
        </TouchableOpacity>

        <View style={feed.options}>

        </View>

        <View style={feed.options}>

        </View>

        <View style={feed.options}>

        </View>

      </View>

      

    </View>
  );
}

const feed = StyleSheet.create({

  cima:{
    height:'50%', 
    width:'100%', 
    justifyContent:'center',
    alignContent:'center',
    flexWrap:'wrap',
    gap:20,
    backgroundColor:'transparent', 
    borderBottomWidth:2, 
    borderColor:'#97D8AE',
},

  options:{
    width:'40%',
    height:'40%',
    backgroundColor:'#cdcdcd',
    borderRadius:10, 
    justifyContent:'center',
    alignItems:'center',

  }
  })



function Profile() {
  return (
    <LinearGradient
      colors={['#CDE4AD', '#97D8AE', '#ffffff', '#ffffff']}
       style={profile.container} >

      <View style={profile.cima}>
        <View style={{width:'100%', height: '2%'}}>
        </View>
        
        <Text style={{fontSize:25, color:'white', fontWeight:'bold'}}>Meu Perfil</Text>

        <View style={{borderWidth: 2, borderColor:'black', borderRadius:10 , width: 80, height: 80, justifyContent:'center', alignItems:'center'}}>
        
          <MaterialCommunityIcons name="account" color={'black'} size={80} />

        </View>

      </View>

      <View style={profile.viewNameUser}>

        <Text style={{fontSize: 24, fontWeight:'bold', color:'white'}}>
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

      <View style={profile.viewQR}>

        <TouchableOpacity style={profile.btnQrCode}>

        <MaterialCommunityIcons name="qrcode" color={'white'} size={40} />

        </TouchableOpacity>

      </View>






   
    </LinearGradient>
  );
}

const profile = StyleSheet.create({

  container:{
    flex: 1, 
    justifyContent: 'flex-start', 
    alignItems: 'center',
    gap:15,  
  },

  cima:{
    width:'100%',
    height:'25%',
    justifyContent: 'flex-start', 
    alignItems: 'center',  
    gap: 30,
  },

  viewNameUser:{
    width:'100%',
    height:'5%',
    justifyContent:'center',
    alignItems:'center',
  },

  infoView:{
    width: '70%',
    height:'40%',
    backgroundColor:'white',
    borderRadius:10,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 0}, 
    shadowOpacity: 0.40, 
    shadowRadius: 20, 
    elevation: 3
  },

  infoUser:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    gap: 10,
    padding:10
  },

  textInfo:{
    fontSize:25, 
    fontWeight:'bold',
    color:'grey'
  },

  textInfoUser:{
    fontSize:20, 
    fontWeight:'bold',
    color:'grey'
  },

  viewQR:{
    width:'70%',
    height:'10%',
    padding: 10,
    justifyContent:'center',
    alignItems:'flex-end'
  },

  btnQrCode:{
    width:70, 
    height:70, 
    backgroundColor:'#990000', 
    justifyContent:'center',
     alignItems:'center', 
     borderWidth:2,
     borderColor:'white',
     borderRadius:100,
     shadowColor: "#000",
     shadowOffset: {width: 0, height: 3}, 
     shadowOpacity: 0.70, 
     shadowRadius: 10, 
     elevation: 10
  },






})