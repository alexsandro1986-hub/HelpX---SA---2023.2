import React, { useState, useContext } from 'react';
import { NavigationContainer, TabRouter } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { View, Button, Text, StyleSheet, Image, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { ContextInfo, ContextInfoProvider } from '../ContextInfo/contextinfo';
import { RadioButton } from 'react-native-paper';

import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/Ionicons';
import AppIntroSlider from 'react-native-app-intro-slider';
import api from '../Api_gerenciamento';
import AsyncStorage from "@react-native-async-storage/async-storage";





const slides = [
    {
        key: 1,
        render: <Nome />
    },
    {
        key: 2,
        render: <Alergias />
    },
    {
        key: 3,
        render: <Comorbidade />
    },
    {
        key: 4,
        render: <Doador />
    },
    {
        key: 5,
        render: <Contatos />
    },
    {
        key: 6,
        render: <Endereco />
    },

]



function renderSlides({ item }) {
    return (item.render)
}





export default function Informacoes() {
    const { inputNome, setInputNome } = useContext(ContextInfo)
    const { inputIdade, setInputIdade } = useContext(ContextInfo)
    const { inputCpf, setInputCpf, id } = useContext(ContextInfo)
    const navigation = useNavigation()
    const {renderBtn, setRenderBtn} = useContext(ContextInfo)
    



    return (
        <AppIntroSlider
            renderItem={renderSlides}
            data={slides}
            style={styles.introSlider}
            activeDotStyle={{
                backgroundColor: 'green',
            }}
            renderNextButton={() => {
                return (
                    <View style={styles.buttonCircle}>
                        <Icon
                            name="arrow-forward-outline"
                            color="rgba(255, 255, 255, .9)"
                            size={25}
                        />

                    </View>

                   
                );
            }}
            showPrevButton={true}
            renderPrevButton={() => {
                return (
                    <View style={styles.buttonCircle}>
                        <Icon
                            name="arrow-back-outline"
                            color="rgba(255, 255, 255, .9)"
                            size={25}
                        />
                    </View>
                );
            }}
            showDoneButton={renderBtn}
            renderDoneButton={() => {
                return (
                    <View style={styles.buttonCircle}>
                        <Icon
                            name="md-checkmark"
                            color="rgba(255, 255, 255, .9)"
                            size={25}

                        />
                    </View>
                );
            }
            }
            onDone={() => {


                (navigation.navigate('Home'))


            }}

        />
    );
}







function Nome() {

    const { inputNome, setInputNome } = useContext(ContextInfo)
    const { inputIdade, setInputIdade } = useContext(ContextInfo)
    const { inputCpf, setInputCpf } = useContext(ContextInfo)

    return (
        <View style={{ flex: 1, padding: 20, alignContent:'center'}} >
            <View style={styles.viwInfomativo}>
                <Text style={[styles.txtInfomativo, { marginBottom: 0 }]}>Vamos começar</Text>
                <Text style={{marginBottom: 100, marginTop:10, fontSize: 24, fontWeight: '600', color: '#999999'}}>Informe abaixo</Text>
            </View>
            <TextInput
                style={styles.input}
                placeholder="Nome"
                value={inputNome}
                onChangeText={setInputNome}
                returnKeyType="done"

            />
            <TextInput
                style={styles.input}
                placeholder="Idade"
                value={inputIdade}
                onChangeText={setInputIdade}
                returnKeyType="done"

            />
            <TextInput
                style={styles.input}
                placeholder="CPF"
                value={inputCpf}
                onChangeText={setInputCpf}
                returnKeyType="done"

            />
        </View>




    );
}




function Alergias() {
    const alergias = [
        'Nenhuma',
        "Nenhuma",
        "Rinite alérgica",
        "Asma alérgica",
        "Alimentos",
        "Picadas de insetos",
        "Atópica",
        "Medicamentos",
        "Produtos químicos",
        "Urticária",
        "Poeira doméstica",
        "Animais de estimação",
        "Látex",
        "Veneno de abelhas e vespas",
        "Metais",
        "Plantas",
        "Fungos",
        "Produtos de beleza",
        "Insetos de jardim",
        "Látex de frutas",
        "Produtos de limpeza",
        "Outras",
    ]



    const { alergiaSelecionado, setAlergiaSelecionada } = useContext(ContextInfo)
    return (

        <View style={{ flex: 1, padding: 20, justifyContent:'flex-start', gap:60}}>
            <View style={styles.viwInfomativo}>
                <Text style={styles.txtInfomativo}>Você possui alguma alergia?</Text>
            </View>
            <View style={styles.inputAlergias}>
                <Picker
                    mode="dropdown"
                    selectedValue={alergiaSelecionado}
                    onValueChange={(itemValue) =>
                        setAlergiaSelecionada(itemValue)

                    }>


                    {alergias
                        .filter((value, index) => alergiaSelecionado === 0 ? value : index === 0 ? false : value)
                        .map((value, index) => (
                            <Picker.Item label={value} value={value} key={index} />
                        ))}
                    {/* alergias.map(al => {
                                        return <Picker.Item label={al} value={al} />
                                    }) */}

                </Picker>
            </View>

        </View>

    );
}

function Comorbidade() {

    const comorbidades = [
        'Nenhuma',
        "Nenhuma",
        "Hipertensão arterial",
        "Diabetes mellitus",
        "Obesidade",
        "Doença cardiovascular",
        "Doença pulmonar obstrutiva crônica (DPOC)",
        "Doença renal crônica",
        "Câncer",
        "Asma",
        "Artrite reumatoide",
        "Depressão",
        "Doença de Alzheimer",
        "Doença de Parkinson",
        "HIV/AIDS",
        "Doenças autoimunes",
        "Insuficiência cardíaca",
        "Doenças hepáticas",
        "Epilepsia",
        "Doenças neurológicas",
        "Doenças gastrointestinais",
        "Transtornos psiquiátricos",
        "Outras",
    ]

    const { inputComor, setInputComor } = useContext(ContextInfo)
    const { inputMedicamentoComor, setInputMedicamentoComor } = useContext(ContextInfo)

    return (
        <View style={{ flex: 1, padding: 20 }} >
            <View style={styles.viwInfomativo}>
                <Text style={styles.txtInfomativo}>Está tratando alguma doença?</Text>
            </View>

            <View>
                <View style={{marginBottom:35}}>
                    <Picker
                        mode="dropdown"
                        selectedValue={inputComor}
                        onValueChange={(itemValue) =>
                            setInputComor(itemValue)

                        }>


                        {comorbidades
                            .filter((value, index) => inputComor === 0 ? value : index === 0 ? false : value)
                            .map((value, index) => (
                                <Picker.Item label={value} value={value} key={index} />
                            ))}
                        {/* alergias.map(al => {
                                        return <Picker.Item label={al} value={al} />
                                    }) */}

                    </Picker>
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="Remédio"
                    value={inputMedicamentoComor}
                    onChangeText={setInputMedicamentoComor}
                    returnKeyType="done"
                />
            </View>





        </View>



    );
}



function Doador() {

    const [sangue] = useState(['', 'Tipo sanguineo', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])

    const { inputTiposanguineo, setInputTiposanguineo } = useContext(ContextInfo)

    const { inputSangue, setInputSangue } = useContext(ContextInfo);
    const { inputOrgao, setInputOrgao } = useContext(ContextInfo);

    return (

        <View style={{ flex: 1, padding: 20 }}>
            <View style={styles.viwInfomativo}>
                <Text style={styles.txtInfomativo}>Qual o seu tipo sanguíneo?</Text>
            </View>
            <View style={[styles.inputDoador, {marginBottom:35}]}>
                <Picker
                    mode="dropdown"
                    selectedValue={inputTiposanguineo}
                    onValueChange={(itemValue) =>
                        setInputTiposanguineo(itemValue)
                    }>

                    {sangue
                        .filter((value, index) => inputTiposanguineo === 0 ? value : index === 0 ? false : value)
                        .map((value, index) => (
                            <Picker.Item label={value} value={value} key={index} />
                        ))}

                </Picker>
            </View>

            {/* radioButton  doador sangue*/}

            <View style={styles.tiposSangue}>
                <View style={styles.radioGroup}>
                    <View style={styles.radioButton}>
                        <Text style={styles.txtDoador}>Você é doador de sangue? </Text>
                        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

                            <View style={styles.radioLabel}>
                                <RadioButton.Android
                                    value="sim"
                                    status={inputSangue === "sim" ?
                                        'checked' : 'unchecked'}
                                    onPress={() => setInputSangue("sim")}
                                    color="#007BFF"
                                />
                                <Text style={styles.radioText} >
                                    Sim
                                </Text>
                            </View>


                            <View style={styles.radioLabel}>
                                <RadioButton.Android
                                    value="nao"
                                    status={inputSangue === "nao" ?
                                        'checked' : 'unchecked'}
                                    onPress={() => setInputSangue("nao")}
                                    color="#007BFF"
                                />
                                <Text style={styles.radioText} >
                                    Não
                                </Text>
                            </View>
                        </View>

                    </View>
                </View>
            </View>

            {/* radioButton  doador orgãos*/}
            <View style={styles.tiposSangue}>
                <View style={styles.radioGroup}>
                    <View style={styles.radioButton}>
                        <Text  style={styles.txtDoador}>Você é doador de orgãos?</Text>
                        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <View style={styles.radioLabel}>
                                <RadioButton.Android
                                    value="sim"
                                    status={inputOrgao === 'sim' ?
                                        'checked' : 'unchecked'}
                                    onPress={() => setInputOrgao('sim')}
                                    color="#007BFF"
                                />
                                <Text style={styles.radioText}>
                                    Sim
                                </Text>
                            </View>



                            <View style={styles.radioLabel}>
                                <RadioButton.Android
                                    value="nao"
                                    status={inputOrgao === 'nao' ?
                                        'checked' : 'unchecked'}
                                    onPress={() => setInputOrgao('nao')}
                                    color="#007BFF"
                                />
                                <Text style={styles.radioText}>
                                    Não
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}



function Contatos() {

    const { inputTelefone, setInputTelefone } = useContext(ContextInfo)
    const { inputContatoEmergencia, setInputContatoEmergencia } = useContext(ContextInfo)
    const { inputNtelefoneEmergencia, setNtelefoneEmergencia } = useContext(ContextInfo)
    return (

        <View style={{ flex: 1, padding: 20 }}>
            <View style={styles.viwInfomativo}>
                <Text style={styles.txtInfomativo}>Informações de contato</Text>
            </View>
            <TextInput
                style={styles.input}
                placeholder="Seu numero de Telefone"
                value={inputTelefone}
                onChangeText={setInputTelefone}
                returnKeyType="done"

            />
             <View style={styles.viwInfomativo}>
                <Text style={[styles.txtInfomativo, {marginBottom:35, marginTop: 20, fontSize:23}]}>Contato de emergência</Text>
            </View>
            <TextInput
                style={styles.input}
                placeholder="Nome"
                value={inputContatoEmergencia}
                onChangeText={setInputContatoEmergencia}
                returnKeyType="done"

            />
            <TextInput
                style={styles.input}
                placeholder="Telefone para Emergência "
                value={inputNtelefoneEmergencia}
                onChangeText={setNtelefoneEmergencia}
                returnKeyType="done"

            />
        </View>

    );
}


function Endereco() {
    const { inputNome, setInputNome } = useContext(ContextInfo)
    const { inputIdade, setInputIdade } = useContext(ContextInfo)
    const { inputCpf, setInputCpf } = useContext(ContextInfo)
    const { inputTelefone, setInputTelefone } = useContext(ContextInfo)
    const { inputContatoEmergencia, setInputContatoEmergencia } = useContext(ContextInfo)
    const { inputNtelefoneEmergencia, setNtelefoneEmergencia } = useContext(ContextInfo)
    const { inputTiposanguineo, setInputTiposanguineo } = useContext(ContextInfo)
    const { inputMedicamentoComor, setInputMedicamentoComor } = useContext(ContextInfo)
    const { alergiaSelecionado, setAlergiaSelecionada } = useContext(ContextInfo)
    const { inputComor } = useContext(ContextInfo)
    const { inputSangue, setInputSangue } = useContext(ContextInfo);
    const { inputOrgao, setInputOrgao } = useContext(ContextInfo);
    const { inputNCep, setInputNcep } = useContext(ContextInfo)
    const { inputLogradouro, setInputLogradouro } = useContext(ContextInfo)
    const { inputNumeroCasa, setNumeroCasa } = useContext(ContextInfo)

    
    const {renderBtn, setRenderBtn} = useContext(ContextInfo)




    return (

        <View style={{ flex: 1, padding: 20 }}>
            <View style={styles.viwInfomativo}>
                <Text style={styles.txtInfomativo}>Seu Endereço</Text>
            </View>
            <TextInput
                style={styles.input}
                placeholder="CEP"
                value={inputNCep}
                onChangeText={setInputNcep}
                returnKeyType="done"
            />
            <TextInput
                style={styles.input}
                placeholder="Rua"
                value={inputLogradouro}
                onChangeText={setInputLogradouro}
                returnKeyType="done"
            />
            <TextInput
                style={styles.input}
                placeholder="Número"
                value={inputNumeroCasa}
                onChangeText={setNumeroCasa}
                returnKeyType="done"
            />



            <View style={styles.viewBtnConFirmar}>
                <TouchableOpacity style={styles.BtnConFirmar} onPress={() => {
                    const completar_cadastro = async (dados) => {
                        console.log('dados', dados)
                        console.log(inputSangue)
                        const idz = await AsyncStorage.getItem("id")
                        try {
                            const response = await api.put(`/users/update/${idz}`, dados)
                            console.log(response.data)
                            setRenderBtn(true)
                            
                        } catch (error) {
                            console.log(error.response.data)
                        }
                    }
                    let CompletandoCadastro = {
                        nome: inputNome,
                        idade: inputIdade,
                        cpf: inputCpf,
                        alergia: alergiaSelecionado,
                        comorbidade: inputComor,
                        medicamento: inputMedicamentoComor,
                        sangue: inputTiposanguineo,
                        doadorsangue: inputSangue,
                        doadororgao: inputOrgao,
                        telefoneusuario: inputTelefone,
                        contatoemergencia: inputContatoEmergencia,
                        telefoneemergencia: inputNtelefoneEmergencia,
                        ncep: inputNCep,
                        logradouro: inputLogradouro,
                        numerocasa: inputNumeroCasa,
                        emailemergencia: inputIdade,
                    }
                    completar_cadastro(CompletandoCadastro)
                }}>
                    <Text style={styles.textoBotao}>Confirmar</Text>
                </TouchableOpacity>
            </View>
        </View>




    );
}




const Tab = createBottomTabNavigator();


const styles = StyleSheet.create({

    header: {
        height: 250,



    },
    container: {
        flex: 1,
        alignItems: "center",

    },

    textoInforma: {
        marginTop: 100,
        fontSize: 40,
        color: '#fff',
    },

    body: {
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',

    },


    viwInfomativo: {
        alignItems: 'center',



    },
    txtInfomativo: {
        marginTop: 15,
        marginBottom: 60,
        fontSize: 26,
        fontWeight: '700',
        color: '#1b9f4a'
    },


    input: {
        position: 'relative',
        fontSize: 27,
        borderBottomWidth: 1,
        marginBottom: 50,
        paddingLeft:15

    },
    inputAlergias: {
      

    },
    inputDoador: {
        gap: 2
    },

    tiposSangue: {
        marginBottom: 10,
        marginTop: 10


    },
    txtDoador:{
        fontSize:22,
        fontWeight:'500',
        color:'#979595'
    },
    radioGroup: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',

        borderRadius: 8,
        backgroundColor: 'white',

        elevation: 3,
        shadowColor: '#000',

    },

    radioButton: {

        alignItems: 'center',
        width: '100%',

    },

    radioLabel: {
        marginLeft: 15,
        maxWidth: 70,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    radioText: {
        fontSize: 18,
        color: '#333'
    },

    input_Contato: {
        fontSize: 30,
        bottom: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        textAlign: 'center'

    },
    input_endereco: {
        fontSize: 30,
        marginBottom: 10,
        borderBottomWidth: 1,
        textAlign: 'center'
    },

    buttonCircle: {
        width: 60,
        height: 60,
        backgroundColor: '#97D8AE',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -10

    },

    introSlider: {
        flex: 1,
        backgroundColor: '#fff'
    },

    viewBtnConFirmar:{
        width:'100%',
        height:150,
        alignItems:'center',
        justifyContent:'center'
    },

    BtnConFirmar:{
        width: "60%",
        height: 60,
        backgroundColor: "#97D8AE",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        borderRadius: 18,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginTop: 10,
    },
    
  textoBotao: {
    // paddingTop: 5,
    textAlign: "center",
    alignItems: "center",
    color: "#FFFFFF",
    fontSize: 23,
    fontWeight: 600,
    fontStyle: "normal",
    color: "white",
  },



})

