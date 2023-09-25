
import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF' }}>

      <View><Text>Alguma coisa aqui</Text></View>

      <View style={styles.geral}>
        <View style={styles.primeiro_Quadrado}>1</View>
        <View style={styles.segundo_Quadrado}>2</View>
        <View style={styles.terceiro_Quadrado}>3</View>
        <View style={styles.quarto_Quadrado}>4</View>


      </View>

    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}



const Tab = createBottomTabNavigator();

export default function principal() {
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
  primeiro_Quadrado: {
    flex: 1,
    backgroundColor: '#e91e63',
    width: 275,
    height: 275,
    borderWidth: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  segundo_Quadrado: {
    flex: 1,
    backgroundColor: '#e91e63',
    width: 275,
    height: 275,
    borderWidth: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  terceiro_Quadrado: {
    flex: 1,
    backgroundColor: '#e91e63',
    width: 275,
    height: 275,
    borderWidth: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  quarto_Quadrado: {
    flex: 1,
    backgroundColor: '#e91e63',
    width: 275,
    height: 275,
    borderWidth: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },

});
