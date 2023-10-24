import React, { useState, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Button, Text, StyleSheet, Image, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { ContextInfo, ContextInfoProvider } from '../ContextInfo/contextinfo';
import { RadioButton } from 'react-native-paper';
import { ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';



const Stack = createStackNavigator();
const Header = () => (
    <LinearGradient colors={['#CDE4AD', '#97D8AE', '#78D1D2']}>
        <View style={styles.header}>
            <View style={styles.containerinfromacoes} >
                <Text style={styles.textoInforma}>INFORMAÇÕES</Text>
            </View>
        </View>
    </LinearGradient>
);

export default function Informacoes() {



    return (
        <><Header />

            <Stack.Navigator >

                <Stack.Group >

                    <Stack.Screen name='Nome' component={Nome('Idade')} options={{ headerShown: false }} />
                    <Stack.Screen name='Idade' component={Idade('Alergias')} options={{ headerShown: false }} />
                    <Stack.Screen name='Alergias' component={Alergias('Doador')} options={{ headerShown: false }} />
                    <Stack.Screen name='Doador' component={Doador('Contatos')} options={{ headerShown: false }} />
                    <Stack.Screen name='Contatos' component={Contatos('Endereco')} options={{ headerShown: false }} />
                    <Stack.Screen name='Endereco' component={Endereco('Home')} options={{ headerShown: false }} />

                </Stack.Group>

            </Stack.Navigator></>

    );
}

function MyBackButton() {
    const navigation = useNavigation();

    return (

        <TouchableOpacity onPress={() => navigation.goBack()} >
            <Text >
                <Icon
                    name="arrow-left"
                    size={35}
                    color="black"

                />
            </Text>
        </TouchableOpacity>
    );
}

function Nome(a) {


    return function ({ navigation }) {
        const { inputNome, setInputNome } = useContext(ContextInfo)

        return (
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.caixa}>
                    <View style={styles.body}>
                        <View style={styles.teste}>
                            <View style={styles.viwInfomativo}>
                                <Text style={styles.txtInfomativo}>Pedindo Informações</Text>
                            </View>
                            <TextInput
                                style={styles.input}
                                placeholder="Nome"
                                value={inputNome}
                                onChangeText={setInputNome}
                                returnKeyType="done"

                            />
                        </View>
                        <View style={styles.botao}>
                            <TouchableOpacity onPress={() => navigation.navigate(a)
                            }>

                                <Text style={styles.bto_Direita}>

                                    <Icon
                                        name="arrow-right"
                                        size={35}
                                        color="black"

                                    />

                                </Text>



                            </TouchableOpacity >
                            <TouchableOpacity  >
                                <Text style={styles.esquerda_bto}>
                                    <Icon
                                        name="arrow-left"
                                        size={35}
                                        color="black"

                                    />
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

function Idade(a) {
    return function ({ navigation }) {
        const { inputIdade, setInputIdade } = useContext(ContextInfo)
        return (
            <View style={styles.caixa}>
                <View style={styles.body}>
                    <View style={styles.teste}>
                        <View style={styles.viwInfomativo}>
                            <Text style={styles.txtInfomativo}>Pedindo Informações</Text>
                        </View>
                        <TextInput
                            style={styles.input}
                            placeholder="Idade"
                            value={inputIdade}
                            onChangeText={setInputIdade}
                            returnKeyType="done"

                        />
                    </View>
                    <View style={styles.botao}>
                        <TouchableOpacity onPress={() => navigation.navigate(a)}>

                            <Text style={styles.bto_Direita}>
                                <Icon
                                    name="arrow-right"
                                    size={35}
                                    color="black"

                                />
                            </Text>



                        </TouchableOpacity>
                        <View style={styles.esquerda_bto}><MyBackButton /></View>

                    </View>
                </View>
            </View>
        );
    }
}

function Alergias(a) {
    return function ({ navigation }) {
        const [alergias, setAlergias] = useState(['', 'Latex', 'Polem', 'Alimentos', 'Medicamentos', 'Poeira', 'Mofos', 'Pelos de Animais', 'picada de Insetos', 'Iodo'])
        const {alergiaSelecionado, setAlergiaSelecionada} = useContext(ContextInfo)
        return (
            <View style={styles.caixa}>
                <View style={styles.body}>
                    <View style={styles.teste}>
                        <View style={styles.viwInfomativo}>
                            <Text style={styles.txtInfomativo}>Pedindo Informações</Text>
                        </View>

                        <Picker
                            style={styles.inputAlergias}
                            selectedValue={alergiaSelecionado}
                            onValueChange={(itemValue) =>
                                setAlergiaSelecionada(itemValue)
                            }>

                            {
                                alergias.map(al => {
                                    return <Picker.Item label={al} value={al} />
                                })
                            }
                        </Picker>

                    </View>
                    <View style={styles.botao}>
                        <TouchableOpacity onPress={() => navigation.navigate(a)}>

                            <Text style={styles.bto_Direita}>
                                <Icon
                                    name="arrow-right"
                                    size={35}
                                    color="black"

                                />
                            </Text>
                        </TouchableOpacity>
                        <View style={styles.esquerda_bto}><MyBackButton /></View>

                    </View>
                </View></View>
        );
    }
}


function Doador(a) {
    return function ({ navigation }) {
        const [sangue, setSangue] = useState(['', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
        
        const { inputTiposanguineo, setInputTiposanguineo } = useContext(ContextInfo)

        const [inputSangue, setInputSangue] = useState('option1');
        const [inputOrgao, setInputOrgao] = useState('option3');

        return (
            <ScrollView style={styles.caixa}>
                <View style={styles.body}>
                    <View style={styles.teste}>
                        <View style={styles.viwInfomativo}>
                            <Text style={styles.txtInfomativo}>Pedindo Informações</Text>
                        </View>
                        <Picker
                            style={styles.inputAlergias}
                            selectedValue={inputTiposanguineo}
                            onValueChange={(itemValue) =>
                                setInputTiposanguineo(itemValue)
                            }>

                            {
                                sangue.map(al => {
                                    return <Picker.Item label={al} value={al} />
                                })
                            }
                        </Picker>

                        {/* radioButton  doador sangue*/}

                        <View style={styles.tiposSangue}>
                            <View style={styles.radioGroup}>
                                <View style={styles.radioButton}>
                                    <Text>Vôce é doador de sangue</Text>
                                    <RadioButton.Android
                                        value="option1"
                                        status={inputSnague === 'option1' ?
                                            'checked' : 'unchecked'}
                                        onPress={() => setInputSangue('option1')}
                                        color="#007BFF"
                                    />
                                    <Text style={styles.radioLabel}>
                                        Sim
                                    </Text>
                                </View>
                                <View style={styles.radioButton}>
                                    <RadioButton.Android
                                        value="option2"
                                        status={inputSangue === 'option2' ?
                                            'checked' : 'unchecked'}
                                        onPress={() => setInputSangue('option2')}
                                        color="#007BFF"
                                    />
                                    <Text style={styles.radioLabel}>
                                        Não
                                    </Text>
                                </View>
                            </View>
                        </View>

                        {/* radioButton  doador orgãos*/}
                        <View style={styles.tiposSangue}>
                            <View style={styles.radioGroup}>
                                <View style={styles.radioButton}>
                                    <Text>Vôce é doador de orgãos</Text>
                                    <RadioButton.Android
                                        value="option3"
                                        status={inputOrgao === 'option3' ?
                                            'checked' : 'unchecked'}
                                        onPress={() => setInputOrgao('option3')}
                                        color="#007BFF"
                                    />
                                    <Text style={styles.radioLabel}>
                                        Sim
                                    </Text>
                                </View>
                                <View style={styles.radioButton}>
                                    <RadioButton.Android
                                        value="option4"
                                        status={inputOrgao === 'option4' ?
                                            'checked' : 'unchecked'}
                                        onPress={() => setInputOrgao('option4')}
                                        color="#007BFF"
                                    />
                                    <Text style={styles.radioLabel}>
                                        Não
                                    </Text>
                                </View>
                            </View>
                        </View>


                    </View>





                    <View style={styles.botaoDoador}>
                        <TouchableOpacity onPress={() => navigation.navigate(a)}>


                            <Text style={styles.bto_DireitaDoador}>
                                <Icon
                                    name="arrow-right"
                                    size={35}
                                    color="black"

                                />
                            </Text>
                        </TouchableOpacity>
                        <View style={styles.bto_EsquerdaDoador}><MyBackButton /></View>

                    </View>
                </View>
            </ScrollView >
        );
    }
}


function Contatos(a) {
    return function ({ navigation }) {
        const { inputNtelefone, setInputNtelefone } = useContext(ContextInfo)
        const { inputContatoEmergencia, setInputContatoEmergencia } = useContext(ContextInfo)
        const { inputNtelefoneEmergencia, setNtelefoneEmergencia } = useContext(ContextInfo)
        return (
            <View style={styles.caixa}>
                <View style={styles.body}>
                    <View style={styles.teste}>
                        <View style={styles.viwInfomativo}>
                            <Text style={styles.txtInfomativo}>Pedindo Informações</Text>
                        </View>
                        <TextInput
                            style={styles.input_Contato}
                            placeholder="N° de Telefone"
                            value={inputNtelefone}
                            onChangeText={setInputNtelefone}
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

                    <View style={styles.botao}>
                        <TouchableOpacity onPress={() => navigation.navigate(a)}>

                            <Text style={styles.direita_btoContato}>
                                <Icon
                                    name="arrow-right"
                                    size={35}
                                    color="black"

                                />
                            </Text>

                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.goBack('Alergias')} >

                            <Text style={styles.esquerda_btoContato} >
                                <Icon
                                    name="arrow-left"
                                    size={35}
                                    color="black"

                                />
                            </Text>

                        </TouchableOpacity>
                    </View>
                </View></View>
        );
    }
}


function Endereco(a) {
    return function ({ navigation }) {
        const { inputNCep, setInputNcep } = useContext(ContextInfo)
        const { inputLogradouro, setInputLogradouro } = useContext(ContextInfo)
        const { inputNumeroCasa, setNumeroCasa } = useContext(ContextInfo)
        return (
            <View style={styles.caixa}>
                <View style={styles.body}>
                    <View style={styles.teste}>
                        <View style={styles.viwInfomativo}>
                            <Text style={styles.txtInfomativo}>Pedindo Informações</Text>
                        </View>
                        <TextInput
                            style={styles.input_endereco}
                            placeholder="N°-CEP"
                            value={inputNCep}
                            onChangeText={setInputNcep}
                            returnKeyType="done"
                        />
                        <TextInput
                            style={styles.input_endereco}
                            placeholder="Logradouro"
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
                    </View>
                    <View style={styles.botaoEndereco}>
                        <TouchableOpacity onPress={() => navigation.navigate(a)}>

                            <Text style={styles.bto_Direita_Endereco}>
                                <Icon
                                    name="arrow-right"
                                    size={35}
                                    color="black"

                                />
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.goBack()} >
                            <Text style={styles.bto_esquerda_Endereco}>
                                <Icon
                                    name="arrow-left"
                                    size={35}
                                    color="black"

                                />
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}



const Tab = createBottomTabNavigator();


const styles = StyleSheet.create({
    // width: 219px;
    // height: 55px;
    // left: 0px;
    // top: 83px;
    header: {
        height: 250,



    },
    containerinfromacoes: {
        flex: 1,
        alignItems: "center",

    },

    textoInforma: {
        marginTop: 83,
        fontSize: 40,
        color: '#fff',
    },



    caixa: {
        backgroundColor: "#C7FFCC",
    },

    // /* Rectangle 19 */


    // width: 219px;
    // height: 266px;
    // left: 0px;
    // top: 146px;

    // background: rgba(255, 255, 255, 0.71);
    // box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
    // border-radius: 15px 15px 0px 0px;
    body: {
        position: 'relative',
        backgroundColor: '#ffffff',
        width: 390,
        height: 650,
        alignItems: 'center',
        borderRadius: 25,
        padding: 20,
    },

    // /* Pedindo informações */

    // position: absolute;
    // width: 219px;
    // height: 40px;
    // left: 0px;
    // top: 146px;

    // font-family: 'Inter';
    // font-style: normal;
    // font-weight: 400;
    // font-size: 13px;
    // line-height: 16px;
    // display: flex;
    // align-items: center;
    // text-align: center;
    viwInfomativo: {
        alignItems: 'center',
    },
    txtInfomativo: {
        marginBottom: 70,
        fontSize: 30
    },

    // /* Line 3 */

    // position: absolute;
    // width: 174px;
    // height: 0px;
    // left: 22px;
    // top: 236px;
    // border: 1px solid #000000;
    // color: #000000;

    input: {
        position: 'relative',
        fontSize: 30,
        borderBottomWidth: 1,
        marginBottom: 100,
        textAlign: 'center'

    },
    inputAlergias: {
        alignItems: 'center',
        fontSize: 35,
        marginLeft: 5,
        borderColor:'#000000',
        borderBottomEndRadius:10
    },

    tiposSangue: {
        marginBottom: 15,


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

    },
    radioLabel: {
        marginLeft: 8,
        fontSize: 16,
        color: '#333',
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
    botao: {
        gap: 25,
        padding: 45,
        display: 'flex'
    },
    // /* fluent:arrow-left-12-filled */

    // position: absolute;
    // width: 25px;
    // height: 25px;
    // left: 214px;
    // top: 396px;

    // transform: rotate(-180deg);
    botaoDoador: {
        left: 40,
        top: 25
    },

    bto_Direita: {
        position: 'relative',
        display: 'flex',
        marginBottom: 56,
        left: 155,


    },
    bto_DireitaDoador: {
        position: 'relative',
        display: 'flex',
        left: 115,

    },
    bto_EsquerdaDoador: {
        position: 'relative',
        display: 'flex',
        bottom: 35,
        right: 195
    },
   
    esquerda_btoContato: {
        position: 'relative',
        display: 'flex',
        bottom:30,
        width:35
    },
    direita_btoContato: {
        position: 'relative',
        display: 'flex',
        marginLeft: 290,
       top:30,
        width:35
    },

    botaoEndereco: {
        position: 'relative',
        display: 'flex',
        padding: 45

    },
    bto_Direita_Endereco: {
        position: 'relative',
        display: 'flex',
        marginLeft: 290,
        width:35

    },
    bto_esquerda_Endereco: {
        position: 'relative',
        display: 'flex',
        bottom: 35,
        width:35


    },
    esquerda_bto: {
        right: 155,
        bottom: 118
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























