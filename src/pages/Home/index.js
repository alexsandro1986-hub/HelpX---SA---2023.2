
import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
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
            <MaterialCommunityIcons name="account" color={color} size={size} />
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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}