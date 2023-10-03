
import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Feather from "@expo/vector-icons/Feather";
import { LinearGradient } from 'expo-linear-gradient';
import Icon from '@mdi/react';
import { mdiEmoticonSickOutline } from '@mdi/js';
import { useState, useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RemedioContext, RemedioContextProvider } from './remedioContext';


const Stack = createStackNavigator();

export function StackTratamento() {
    return (
        <RemedioContextProvider>
            <Stack.Navigator initialRouteName='Tratamento'>
                <Stack.Screen name='Tratamento' component={Tratamento}
                    options={{
                        title: 'Tratamento',
                        headerStyle: {
                            backgroundColor: '#97D8AE',
                            borderColor: '#97D8AE',
                            borderWidth: 2,
                            borderBottomLeftRadius: 20,
                            borderBottomRightRadius: 20,

                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: '700',
                        },
                        headerTitleAlign: "center",
                    }} />
                <Stack.Screen name='CadastroTratamento' component={CadastroTratamento} options={{ headerShown: false }} />
            </Stack.Navigator>
        </RemedioContextProvider>
    )
}

export function Tratamento() {
    const navigation = useNavigation()
    const { arrayTratamento } = useContext(RemedioContext)


    return (
        <View style={styles.container}>
            {/* <View style={styles.containerTitulo}>
                <Text style={styles.textoTitulo}> Tratamentos</Text>
            </View> */}
            <View style={styles.containerCorpo}>
                <View style={styles.containerIcons}>

                    <Icon path={mdiEmoticonSickOutline}
                        size={1.5}

                    />

                    <Feather
                        name="calendar"
                        size={30}
                        color="black"
                        style={styles.icons}
                    />


                </View>
                {arrayTratamento.map((doenca, index) => (
                    <View style={styles.containerDoencas} key={index}>
                        <Text style={styles.textoDoenca}> {doenca.Enfermidade}</Text>
                        <Text style={styles.textoDoenca} > {doenca.Remedio}</Text>
                        <Text style={styles.textoDoenca} > {doenca.Data}</Text>
                    </View>
                ))}


            </View>

            <View style={styles.footerBotao}>
                <TouchableOpacity onPress={() => navigation.navigate('CadastroTratamento')}>

                    <LinearGradient
                        // Button Linear Gradient
                        colors={['#CDE4AD', '#97D8AE', '#78D1D2']}
                        style={styles.botaoPlus}>
                        <Feather
                            name="plus"
                            size={40}
                            color="white"

                        />
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View >


    );

}

// =================== Cadastro =======================


let flag = false
let rem = ''
let opa

export function CadastroTratamento() {
    const navigation = useNavigation()
    const { inputRemedio, setInputRemedio,
        inputDoenca, setInputDoenca,
        inputData, setInputData,
        arrayTratamento, setArrayTratamento,
        objTratamento } = useContext(RemedioContext)


    return (
        <View style={styles.container}>
            <View style={styles.containerTitulo}>
                <Text style={styles.textoTitulo}> Adicionar</Text>
                <TouchableOpacity
                    style={styles.containerTitulo}
                    onPress={() =>
                        navigation.goBack()
                    }>
                    <Feather
                        name="arrow-left"
                        size={30}
                        color="white"
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.containerCorpo}>
                <View style={styles.containerDoencas}>
                    <TextInput
                        multiline
                        numberOfLines={1}
                        blurOnSubmit
                        value={inputDoenca}
                        onChangeText={setInputDoenca}
                        style={styles.input}
                        placeholder="Enfermidade"
                    // onFocus={() => {
                    //     console.log('Focused on input');

                    // }
                    // }
                    />
                </View>

                <View style={styles.containerDoencas}>
                    <TextInput
                        multiline
                        numberOfLines={2}

                        style={styles.input}
                        value={inputRemedio}

                        onChangeText={(texto) => {
                            setInputRemedio(texto)
                        }
                        }
                        placeholder="Remédio(s)"
                        onFocus={() => {
                            console.log('Focused on input');
                            flag = true

                        }
                        }
                    />



                </View>

                <View style={styles.containerDoencas}>
                    <TextInput
                        multiline
                        numberOfLines={2}
                        blurOnSubmit
                        style={styles.input}
                        value={inputData}
                        onChangeText={setInputData}
                        placeholder="Data"
                    // onFocus={() => {
                    //     console.log('Focused on input');

                    // }
                    // }
                    />
                </View>

            </View>

            <View style={styles.footerBotao}>
                <TouchableOpacity onPress={() =>
                    objTratamento({
                        Enfermidade: inputDoenca,
                        Remedio: inputRemedio,
                        Data: inputData,
                        id: arrayTratamento.length
                    })
                    // navigation.goBack()
                }


                >

                    <LinearGradient
                        // Button Linear Gradient
                        colors={['#CDE4AD', '#97D8AE', '#78D1D2']}
                        style={styles.botaoPlus}>
                        <Feather
                            name="check-circle"
                            size={40}
                            color="white"

                        />
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View >

    )
}

export function NovoRemedio() {
    const { inputRemedio, setInputRemedio } = useContext(RemedioContext)

    console.log('bbbbb')
    return (
        <View style={styles.containerDoencas}>
            <TextInput
                multiline
                numberOfLines={2}

                style={styles.input}
                value={inputRemedio}

                onChangeText={(texto) => {
                    setInputRemedio(texto)
                }
                }
                placeholder="Remédio(s)"
                onFocus={() => {
                    console.log('Focused on input');
                    flag = true

                }
                }
            />
        </View>
    )

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
        borderColor: '#97D8AE',
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
        fontSize: 20,
        lineHeight: 17,
        alignItems: 'center',
        textAlign: 'center',
        color: '#7D7070',
        paddingTop: 25,
        width: '50%'
    },
    footerBotao: {
        width: '100%',
        height: '5%',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: '10%'
    },
    botaoPlus: {
        borderRadius: 30,
        // backgroundColor: '#97D8AE'
    },
    input: {
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 16,
        color: 'black',
        width: 200,
        padding: 6,
        textAlign: 'center'
    },
    inputRemedios: {
        width: '100%',
        height: '60%',
        borderWidth: 1,
        borderColor: '#97D8AE',
        flexDirection: 'column',

    }



});


