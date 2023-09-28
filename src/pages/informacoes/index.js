import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function informacoes(navigation) {
  
    const avancar = () => {
      alert('oi')
    }

    const voltar = () => {
      alert('calma gisele')
    }
    
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
        <View style={styles.informacoes}>
          <View>
            <Text style={styles.informatexto}>INFORMAÇOES!</Text>
          </View>

          <View style={styles.caixaIforma}>
            <Text style={styles.textoInforma}>Pedido Informações</Text>
            <View>
              <Input
                placeholder='Informações...'
                keyboardType='email-address'

                onChangeText={value => setEmail(value)}
                returnKeyType='done'
              />

            </View>

          </View>





        </View>
        <View style={styles.botaoDireito}>

          <Button
            icon={
              <Icon
                name="arrow-right"
                size={15}
                color="white"

              />
            }

            onPress={avancar}
          />

        </View>
        <View style={styles.botaoEsquerdo}>
          <Button
            icon={
              <Icon
                name="arrow-left"
                size={15}
                color="white"

              />
            }

            onPress={voltar}
          />

        </View>
      </View>
    );
  }
  const Tab = createBottomTabNavigator();



  // return (
  //   <Tab.Screen
  //     name="informacoes"
  //     component={informacoes}
  //     options={{
  //       tabBarLabel: 'informacoes',
  //       tabBarIcon: ({ color, size }) => (
  //         <MaterialCommunityIcons name="account" color={color} size={size} />
  //       ),
  //     }}
  //   />

  // );




const styles = StyleSheet.create({
  informacoes: {
    flex: 1,
    width: 450,
    backgroundColor: "#C7FFCC",
    alignItems: "center",
    gap: 42

  },
  informatexto: {
    marginTop: 100,
    fontSize: 30,
    color: '#e91e63',
  },
  caixaIforma: {
    height: 350,
    width: 350,
    backgroundColor: '#FFF',
    borderRadius: 15,
    alignItems: 'center'
  },
  textoInforma: {
    fontSize: 30,
    marginTop: 10,
  },
  pedirInfo: {
    marginTop: 45,
    fontSize: 50,
  },
  botaoDireito: {
    display: 'flex',
    left: 105,
    top: 20


  },
  botaoEsquerdo: {
    right: 105,
    bottom: 10
  },








})


