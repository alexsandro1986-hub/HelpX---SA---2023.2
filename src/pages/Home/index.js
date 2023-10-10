
import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
<<<<<<< HEAD
import { useNavigation } from "@react-navigation/native";


=======
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";
>>>>>>> ed23e490e552427e358909dbbd8a15f3201830a2

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator
      initialRouteName="Profile"
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
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#FFF' }}>

      <View style={feed.cima}>
 
<<<<<<< HEAD
        <TouchableOpacity
         onPress={() => navigation.navigate('StackTratamento')}
=======
        <TouchableOpacity 
        onPress={() => navigation.navigate('StackTratamento')}
>>>>>>> ed23e490e552427e358909dbbd8a15f3201830a2
        style={{width:'40%', height:'40%', backgroundColor:'#97D8AE', borderRadius:10, justifyContent:'center', alignItems:'center', gap: 15, shadowColor: "#000",shadowOffset: {width: 0, height: 4 }, shadowOpacity: 0.30, shadowRadius: 4.65, elevation: 8,}}>
            
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



<<<<<<< HEAD

function Profile() {
  return (


    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //   <Text>Profile!</Text>
    // </View>
  );
}
=======
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
    height:'50%',
    backgroundColor:'purple',
    

  },


})
>>>>>>> ed23e490e552427e358909dbbd8a15f3201830a2
