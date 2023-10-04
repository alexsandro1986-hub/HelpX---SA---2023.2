import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Button, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();
const Header = () => (

    <View style={styles.header}>
        <View style={styles.containerinfromacoes} >
            <Text style={styles.textoInforma}>INFORMAÇÕES</Text>
        </View>
    </View>

);

export default function informacoes() {
    return (
        <><Header />

            <Stack.Navigator >

                <Stack.Group >

                    <Stack.Screen name='Nome' component={Nome('Idade')} options={{ headerShown: false }} />
                    <Stack.Screen name='Idade' component={Idade('Alergias')} options={{ headerShown: false }} />
                    <Stack.Screen name='Alergias' component={Alergias('Contatos')} options={{ headerShown: false }} />
                    <Stack.Screen name='Contatos' component={Contatos('Endereco')} options={{ headerShown: false }} />
                    <Stack.Screen name='Endereco' component={Endereco('')} options={{ headerShown: false }} />

                </Stack.Group>

            </Stack.Navigator></>

    );
}

function Nome(a) {
    return function ({ navigation }) {

        return (
            <View style={styles.caixa}>
                <View style={styles.body}>
                    <View style={styles.teste}>
                        <TextInput
                            style={styles.input}
                            placeholder="Nome"
                        // onChangeText={(text) => setNome(text)}
                        // value={nome}
                        />
                    </View>
                    <View style={styles.botao}>
                        <TouchableOpacity onPress={() => navigation.navigate(a)}>

                            <Text style={styles.bto_Direita}>

                                <Icon
                                    name="arrow-right"
                                    size={35}
                                    color="white"

                                />

                            </Text>



                        </TouchableOpacity >
                        <TouchableOpacity onPress={() => navigation.navigate()} >
                            <Text style={styles.esquerda_bto}>
                                <Icon
                                    name="arrow-left"
                                    size={35}
                                    color="white"

                                />
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

function Idade(a) {
    return function ({ navigation }) {
        return (
            <View style={styles.caixa}>
                <View style={styles.body}>
                    <View style={styles.teste}>
                        <TextInput
                            style={styles.input}
                            placeholder="Idade"
                        // onChangeText={(text) => setNome(text)}
                        // value={nome}
                        />
                    </View>
                    <View style={styles.botao}>
                        <TouchableOpacity onPress={() => navigation.navigate(a)}>

                            <Text style={styles.bto_Direita}>
                                <Icon
                                    name="arrow-right"
                                    size={35}
                                    color="white"

                                />
                            </Text>



                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate()} >
                            <Text style={styles.esquerda_bto}>
                                <Icon
                                    name="arrow-left"
                                    size={35}
                                    color="white"

                                />
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

function Alergias(a) {
    return function ({ navigation }) {
        return (
            <View style={styles.caixa}>
                <View style={styles.body}>
                    <View style={styles.teste}>
                        <TextInput
                            style={styles.input}
                            placeholder="Alergias"
                        // onChangeText={(text) => setNome(text)}
                        // value={nome}
                        />
                    </View>
                    <View style={styles.botao}>
                        <TouchableOpacity onPress={() => navigation.navigate(a)}>

                            <Text style={styles.bto_Direita}>
                                <Icon
                                    name="arrow-right"
                                    size={35}
                                    color="white"

                                />
                            </Text>
                            <Text style={styles.esquerda_bto}>
                                <Icon
                                    name="arrow-left"
                                    size={35}
                                    color="white"

                                />
                            </Text>


                        </TouchableOpacity>


                    </View>
                </View></View>
        );
    }
}


function Contatos(a) {
    return function ({ navigation }) {
        return (
            <View style={styles.caixa}>
                <View style={styles.body}>
                    <View style={styles.teste}>
                        <TextInput
                            style={styles.input_Contato}
                            placeholder="N°-telefone"

                        />
                        <TextInput
                            style={styles.input_Contato}
                            placeholder="Nome-contato"

                        />
                        <TextInput
                            style={styles.input_Contato}
                            placeholder="Telefone-contato"

                        />
                    </View>

                    <View style={styles.botao}>
                        <TouchableOpacity onPress={() => navigation.navigate(a)}>

                            <Text style={styles.bto_Direita}>
                                <Icon
                                    name="arrow-right"
                                    size={35}
                                    color="white"

                                />
                            </Text>
                            <Text style={styles.esquerda_bto}>
                                <Icon
                                    name="arrow-left"
                                    size={35}
                                    color="white"

                                />
                            </Text>


                        </TouchableOpacity></View>
                </View></View>
        );
    }
}


function Endereco(a) {
    return function ({ navigation }) {
        return (
            <View style={styles.caixa}>
                <View style={styles.body}>
                    <View style={styles.teste}>
                        <TextInput
                            style={styles.input_endereco}
                            placeholder="N°-CEP"

                        />
                        <TextInput
                            style={styles.input_endereco}
                            placeholder="Logradouro"

                        />
                        <TextInput
                            style={styles.input_endereco}
                            placeholder="Numero"

                        />
                    </View>
                    <View style={styles.botao}>
                        <TouchableOpacity onPress={() => navigation.navigate(a)}>

                            <Text style={styles.bto_Direita}>
                                <Icon
                                    name="arrow-right"
                                    size={35}
                                    color="white"

                                />
                            </Text>
                            <Text style={styles.esquerda_bto}>
                                <Icon
                                    name="arrow-left"
                                    size={35}
                                    color="white"

                                />
                            </Text>


                        </TouchableOpacity></View>
                </View></View>
        );
    }
}



const Tab = createBottomTabNavigator();


const styles = StyleSheet.create({
    header: {
        height: 250,
        backgroundColor: "#C7FFCC",


    },
    containerinfromacoes: {
        flex: 1,
        alignItems: "center",

    },

    textoInforma: {
        marginTop: 180,
        fontSize: 40,
        color: '#fff',
    },



    caixa: {
        backgroundColor: "#C7FFCC",
    },
    body: {

        backgroundColor: '#FF007ACC',
        width: 378,
        height: 500,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 15
    },
    input: {
        fontSize: 30,
        marginBottom: 250,
        gap: 10,
        padding: 10,
        borderBottomWidth: 1,
    },
    input_Contato: {
        fontSize: 30,
        marginBottom: 30,
        borderBottomWidth: 1,

    },
    input_endereco: {
        fontSize: 30,
        marginBottom: 30,
        borderBottomWidth: 1,
    },
    botao: {
        gap: 25,
        padding: 45,
    },
    bto_Direita: {
        display: 'flex',
        left: 155,
        bottom: 60,



    },
    esquerda_bto: {
        right: 155,
        bottom: 95
    },


})





















