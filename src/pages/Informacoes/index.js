import React, { useState, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { View, Button, Text, StyleSheet, Image, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { ContextInfo, ContextInfoProvider } from '../ContextInfo/contextinfo';
import { RadioButton } from 'react-native-paper';

import { Picker } from '@react-native-picker/picker';
import { Dimensions } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import AppIntroSlider from 'react-native-app-intro-slider';
import { color } from 'react-native-reanimated';
import api from '../Api_gerenciamento';
import AsyncStorage from '@react-native-async-storage/async-storage'





const baseURL = 'https://helpx.glitch.me'


const telaAltura = Dimensions.get('window').height;
const telaComprimento = Dimensions.get('window').width;



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


    return (
        <AppIntroSlider
            renderItem={renderSlides}
            data={slides}
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
            showDoneButton={true}
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
        <View style={{ flex: 1, padding: 20 }} >
            <View style={styles.viwInfomativo}>
                <Text style={styles.txtInfomativo}>Vamos Começar</Text>
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
        "Nenhuma",
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

        <View style={{ flex: 1, padding: 20 }}>
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
        "Nenhuma",
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
                <View style={styles.inputAlergias}>
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
                {/* <TextInput
                    style={styles.input}
                    placeholder="Remédio"
                    value={inputMedicamentoComor}
                    onChangeText={setInputMedicamentoComor}
                    returnKeyType="done"
                /> */}
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
            <View style={styles.inputDoador}>
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
                        <Text>Você é doador de sangue? </Text>
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
                        <Text>Você é doador de orgãos?</Text>
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
                <Text style={styles.txtInfomativo}>Informações de Contato</Text>
            </View>
            <TextInput
                style={styles.input_Contato}
                placeholder="N° de Telefone"
                value={inputTelefone}
                onChangeText={setInputTelefone}
                returnKeyType="done"

            />
            <TextInput
                style={styles.input_Contato}
                placeholder="Contato Emergência"
                value={inputContatoEmergencia}
                onChangeText={setInputContatoEmergencia}
                returnKeyType="done"

            />
            <TextInput
                style={styles.input_Contato}
                placeholder="Telefone de Emergência"
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




    return (

        <View style={{ flex: 1, padding: 20 }}>
            <View style={styles.viwInfomativo}>
                <Text style={styles.txtInfomativo}>Seu Endereço</Text>
            </View>
            <TextInput
                style={styles.input_endereco}
                placeholder="CEP"
                value={inputNCep}
                onChangeText={setInputNcep}
                returnKeyType="done"
            />
            <TextInput
                style={styles.input_endereco}
                placeholder="Rua"
                value={inputLogradouro}
                onChangeText={setInputLogradouro}
                returnKeyType="done"
            />
            <TextInput
                style={styles.input_endereco}
                placeholder="Número"
                value={inputNumeroCasa}
                onChangeText={setNumeroCasa}
                returnKeyType="done"
            />



            <TouchableOpacity onPress={() => {
                const completar_cadastro = async (dados) => {
                    console.log('dados', dados)
                    console.log(inputSangue)
                    const idz = await AsyncStorage.getItem("id")
                    try {
                        console.log("Id do storage", idz)
                        const response = await api.put("/users/complete/c80c35fb-c936-4c66-9e58-2c861a12182d", dados)
                        console.log(response.data)
                    } catch (error) {
                        console.log(error.response)
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
                <Text> VSFFFFFF</Text>
            </TouchableOpacity>
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
        marginTop: 83,
        fontSize: 40,
        color: '#fff',
    },

    body: {
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },


    viwInfomativo: {
        alignItems: 'center',

    },
    txtInfomativo: {
        marginBottom: 70,
        fontSize: 30
    },


    input: {
        position: 'relative',
        fontSize: 30,
        borderBottomWidth: 1,
        marginBottom: 100,
        textAlign: 'center'

    },
    inputAlergias: {
        borderColor: '#DC143C',
        borderWidth: 1,

    },
    inputDoador: {
        gap: 2
    },

    tiposSangue: {
        marginBottom: 10,
        marginTop: 10


    },
    radioGroup: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',

        borderRadius: 8,
        backgroundColor: 'white',

        elevation: 3,
        shadowColor: '#000',
        // shadowOffset: {
        //     width: 0,
        //     height: 0,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 1.84,
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
        backgroundColor: 'rgba(0, 0, 0, .2)',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -10

    },



})

// /* CADASTRO */



// background: linear-gradient(179.96deg, #CDE4AD 3.67%, #97D8AE 54.83%, #78D1D2 99.97%);


// /* Informações */

// position: absolute;
// width: 219px;
// height: 55px;
// left: 0px;
// top: 83px;

// font-family: 'Inter';
// font-style: normal;
// font-weight: 700;
// font-size: 24px;
// line-height: 29px;
// display: flex;
// align-items: center;
// text-align: center;

// color: #FFFFFF;

// /* Rectangle 20 */

// position: absolute;
// width: 199px;
// height: 234px;
// left: 10px;
// top: 146px;

// border-radius: 10px;


// /* fluent:arrow-left-12-filled */

// position: absolute;
// width: 25px;
// height: 25px;
// left: 8px;
// top: 371px;



// /* Vector */

// position: absolute;
// left: 10.42%;
// right: 12.5%;
// top: 16.82%;
// bottom: 16.82%;

// background: #000000;


// /* fluent:arrow-left-12-filled */

// position: absolute;
// width: 25px;
// height: 25px;
// left: 214px;
// top: 396px;

// transform: rotate(-180deg);


// /* Vector */

// position: absolute;
// left: 89.58%;
// right: -66.66%;
// top: 83.18%;
// bottom: -49.53%;

// background: #000000;
// transform: rotate(-180deg);


// /* Avançar */

// position: absolute;
// width: 51px;
// height: 24px;
// left: 131px;
// top: 371px;

// font-family: 'Inter';
// font-style: normal;
// font-weight: 400;
// font-size: 13px;
// line-height: 16px;
// display: flex;
// align-items: center;
// text-align: center;

// color: #000000;























