
import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, TextInput, TouchableOpacity, TouchableHighlight, Modal } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Feather from "@expo/vector-icons/Feather";
import { LinearGradient } from 'expo-linear-gradient';
import { useState, useContext, useEffect } from 'react';
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
                            fontWeight: '500',
                            fontSize: 30,
                        },
                        headerTitleAlign: "center",
                    }} />
                <Stack.Screen name='AdicionarNovoTratamento' component={AdicionarNovoTratamento} options={{
                    title: 'Adicionar',
                    headerStyle: {
                        backgroundColor: '#97D8AE',
                        borderColor: '#97D8AE',
                        borderWidth: 2,
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,


                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: '500',
                        fontSize: 30,
                    },
                    headerTitleAlign: "center",
                }} />
            </Stack.Navigator>
        </RemedioContextProvider>
    )
}


//  ================== TRATAMENTO FEED (POSTS) =========================
export function Tratamento() {
    const navigation = useNavigation()
    const { arrayTratamento } = useContext(RemedioContext)



    return (
        <View style={styles.container}>

            <View style={styles.containerCorpo}>
                <View style={styles.containerIcons}>
                    <Feather
                        name="frown"
                        size={30}
                        color="black"
                        style={styles.icons}
                    />
                    <Feather
                        name="calendar"
                        size={30}
                        color="black"
                        style={styles.icons}
                    />


                </View>
                <ScrollView>
                    {arrayTratamento.map((doenca, index) => (
                        <View key={index} >
                            <Sanfona enfermidade={doenca.Enfermidade} data={doenca.Data} remedio={doenca.Remedio} chave={index} />

                        </View>
                    ))}
                </ScrollView>


            </View>

            <View style={styles.footerBotao}>
                <TouchableOpacity onPress={() => navigation.navigate('AdicionarNovoTratamento')}>

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

function Sanfona(props) {
    const navigation = useNavigation()
    const [expandir, setExpandir] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const { arrayTratamento, setArrayTratamento, setFlagEditando, setIdEdit } = useContext(RemedioContext)
    const aa = 1
    // Pegando posição y do touch do usuário no post para modificar a posição do modal
    const [toquePostY, setToquePostY] = useState(1)



    function alternarCompressao() {
        setExpandir(!expandir);
    }
    function oi() {
        alert('oiiiii')
    }
   
    // function verificarPosicaoToque(toque){
    //     console.log('Verificando posição do toque na pagina')
    //     useEffect(() =>{
            
    //         console.log("PageY", toquePostY)
    //         setToquePostY(toque)
    //     }, [toque])
    // }

    return (
        <View style={styles.postTratamento}>
            <TouchableOpacity
                onPress={(event) => {
                    console.log(event.nativeEvent.pageY)
                    const aa = event.nativeEvent.pageY
                    setToquePostY(aa)
                    // verificarPosicaoToque(aa)
                   

                    alternarCompressao()
                }
                }
                onLongPress={oi}
            >
                <View style={styles.containerDoencas} >
                    <Feather name='clipboard' size={20}
                    style={styles.iconsPosts} 
                    onPress={() => {setModalVisible(true)}}/>
                    <Text style={styles.textoDoenca}>{props.enfermidade}</Text>
                    <Text style={styles.textoDoenca}>{props.data}</Text>

                    <Feather name={expandir ? 'chevron-up' : 'chevron-down'}
                        size={25} color="#bbb" style={styles.iconsPosts} />
                    

                    {/* ========== MODAL (Botões: editar e excluir) =========== */}
                    <Modal
    
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            setModalVisible(!modalVisible);
                        }}
                    >
                        <View style={[styles.modalPosicao, {paddingBottom: toquePostY>450? 300:0 }]}>

                            <View style={styles.modalzinho}>

                                <TouchableOpacity
                                    style={styles.botaoModal}
                                    onPress={() => {
                                        arrayTratamento.map((elemento) => {
                                            if (elemento.id == props.chave) {
                                                setIdEdit(elemento.id)
                                                setFlagEditando(true)
                                                setModalVisible(!modalVisible)
                                                navigation.navigate('AdicionarNovoTratamento')
                                            }
                                        })
                                        console.log(props.chave)


                                    }}
                                >
                                    <Text style={styles.textoModal}> Editar</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.botaoModal}
                                    onPress={() => {
                                        setArrayTratamento(
                                            arrayTratamento.filter(idPosts => idPosts.id != props.chave))
                                    }}>
                                    <Text style={styles.textoModal}> Excluir</Text>
                                </TouchableOpacity>


                                <TouchableOpacity
                                    style={styles.botaoModal}
                                    onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={styles.textoModal}> Cancelar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>

                    {/* ============== FIM MODAL =========== */}

                    {/* <TouchableOpacity
                        onPress={() => {setModalVisible(true)}}
                    >
                    </TouchableOpacity> */}

                </View>
            </TouchableOpacity>
            {
                expandir && <Text style={[styles.textoDoenca, { fontWeight: 300, width: '100%', textAlign: 'left'}]}>Remédios: {props.remedio}</Text>
            }

        </View>
    );
}
// =================== Adicionar TRATAMENTOS =======================


export function AdicionarNovoTratamento() {
    const navigation = useNavigation()
    const { inputRemedio, setInputRemedio,
        inputDoenca, setInputDoenca,
        inputData, setInputData,
        criandoTratamento, construindoObj, flagEditando, editandoTratamento } = useContext(RemedioContext)


    return (
        <View style={styles.container}>
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
                   
                    />
                </View>

                <View style={styles.containerDoencas}>
                    <TextInput
                        multiline
                        numberOfLines={2}

                        style={styles.input}
                        value={inputRemedio}

                        onChangeText={setInputRemedio}

                        placeholder="Remédio(s)"

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
                    
                    />
                </View>

            </View>

            <View style={styles.footerBotao}>
                <TouchableOpacity onPress={() => {
                    flagEditando ?
                    editandoTratamento(construindoObj(inputDoenca, inputRemedio, inputData)) : criandoTratamento(construindoObj(inputDoenca, inputRemedio, inputData))
                    navigation.goBack()
                }
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


const styles = StyleSheet.create({
  
    container: {
        // flex: 1,
        // backgroundColor: "#C7FFCC",
        alignItems: "center",
        flexDirection: 'column',
        width: 430,
        height: 800,
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
        flexDirection: 'column',

    },
    containerIcons: {
        width: '100%',
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: '10%',
        paddingRight: '10%'

    },
    icons: {
        width: 30,
        height: 30,
        alignItems: 'center',
    },
    containerDoencas: {
        width: '100%',
        height: 50,
        // borderWidth: 1,
        // borderColor: '#97D8AE',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        // alignItems: 'stretch'


    },
    postTratamento: {
        width: '100%',
        borderWidth: 1, 
        borderColor: '#97D8AE',
        paddingBottom: 20 
    },
    iconsPosts: {
        width: '10%',
        paddingTop: 25
    },
    textoDoenca: {
        fontWeight: 700,
        fontSize: 20,
        // lineHeight: 17,
        alignItems: 'center',
        textAlign: 'center',
        color: '#7D7070',
        paddingTop: 25,
        width: '40%',

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
        width: '100%',
        padding: 6,
        textAlign: 'center'
    },
   
    modalPosicao: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalzinho: {
        borderWidth: 2,
        borderColor: 'black',
        width: '100%',
        borderRadius: 10,
        backgroundColor: 'transparent',
        height: '20%',
        justifyContent: 'space-evenly'
    },
    botaoModal: {
        backgroundColor: 'white',
        height: '33.33%',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',

    },
    textoModal: {
        color: '#7D7070',
        fontSize: 20,
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',

    },




});


