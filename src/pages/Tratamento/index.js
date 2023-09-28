
import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import Feather from "@expo/vector-icons/Feather";




export default function Tratamentos() {

    return (
        <View style={styles.container}>
            <View style={styles.containerTitulo}>
                <Text style={styles.textoTitulo}> Tratamentos</Text>
            </View>
            <View style={styles.containerCorpo}>
                <View style={styles.containerIcons}>
                    <Feather
                        name="droplet"
                        size={30}
                        color="white"
                        style={styles.icons}
                    />
                    <Feather
                        name="calendar"
                        size={30}
                        color="white"
                        style={styles.icons}
                    />
                </View>
                <View style={styles.containerDoencas}>
                    <Text style={styles.textoDoenca}> Gripe</Text>
                    <Text style={styles.textoDoenca} > 26/09</Text>
                </View>
                <View style={styles.containerDoencas}>
                    <Text style={styles.textoDoenca}> Gripe</Text>
                    <Text style={styles.textoDoenca} > 26/09</Text>
                </View>
            </View>

            <MyTabs/>
        </View>


    );

}

// function BottomTab() {
//     return (

//         <Tab.Navigator
//             initialRouteName="Feed"
//             screenOptions={{
//                 tabBarActiveTintColor: '#e91e63',
//             }}
//         >
//             <Tab.Screen
//                 name="Feed"
//                 component={Feed}
//                 options={{
//                     tabBarLabel: 'Home',
//                     tabBarIcon: ({ color, size }) => (
//                         <MaterialCommunityIcons name="home" color={color} size={size} />
//                     ),
//                     headerShown: false,
//                 }}
//             />

//             <Tab.Screen
//                 name="Profile"
//                 component={Profile}
//                 options={{
//                     tabBarLabel: 'Profile',
//                     tabBarIcon: ({ color, size }) => (
//                         <MaterialCommunityIcons name="account" color={color} size={size} />
//                     ),
//                     headerShown: false,
//                 }}
//             />
//         </Tab.Navigator>




//     );
// }


const styles = StyleSheet.create({
    geral: {
        width: '50%',
        height: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10,
    },
    container: {
        flex: 1,
        // backgroundColor: "#C7FFCC",
        alignItems: "center",
        flexDirection: 'column',

        gap: 11,
    },
    containerTitulo: {
        width: '100%',
        height: '8%',
        backgroundColor: '#97D8AE',
        borderColor:  '#97D8AE',
        borderWidth: 2,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        // box-shadow: 0px 1px 8px rgba(85, 74, 74, 0.44);
        justifyContent: 'center'
    },
    textoTitulo: {
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: 20,
        lineHeight: 24,
        alignItems: 'center',
        textAlign: 'center',
        color: '#FFFFFF',
      

    },
    containerCorpo: {
        width: '100%',
        height: '80%',
        flexDirection: 'column'

    },
    containerIcons: {
        width: '100%',
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-evenly'

    },
    icons: {
        width: 30,
        height: 30
    },
    containerDoencas: {
        width: '100%',
        height: 70,
        borderWidth: 1,
        borderColor: '#97D8AE',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        

    },
    textoDoenca: {
        fontWeight: 700,
        fontSize: 14,
        lineHeight: 17,
        alignItems: 'center',
        textAlign: 'center',
        color: '#7D7070',
        // color: 'red',
        paddingTop: 25,
        
    },



});







