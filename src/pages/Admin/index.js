import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function StackAdmin() {

    return (
        <Stack.Navigator initialRouteName='FeedAdmin'>
            <Stack.Screen name='FeedAdmin' component={FeedAdmin}
                options={{
                    title: 'Feed ou Home',
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
            <Stack.Screen name='Relatorio' component={Relatorio} options={{
                title: 'Relatórios',
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
            <Stack.Screen name='Usuarios' component={FeedAdmin} />
            <Stack.Screen name='Suporte' component={FeedAdmin} />
            <Stack.Screen name='Graficos' component={Graficos} />
        </Stack.Navigator>
    );

}
function FeedAdmin() {
    const navigation = useNavigation()
    return (


        <View style={feed.container}>

            <View style={feed.cima}>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Relatorio')}
                    style={feed.botao}>

                    <MaterialCommunityIcons name="graph" color={'white'} size={50} />

                    <Text style={feed.textoBotao}>
                        Relatório
                    </Text>

                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('StackTratamento')}
                    style={feed.botao}>

                    <MaterialCommunityIcons name="comment-account" color={'white'} size={50} />

                    <Text style={feed.textoBotao}>
                        Suporte
                    </Text>

                </TouchableOpacity>


                <TouchableOpacity
                    onPress={() => navigation.navigate('StackTratamento')}
                    style={feed.botao}>

                    <MaterialCommunityIcons name="account-multiple-outline" color={'white'} size={50} />

                    <Text style={feed.textoBotao}>
                        Usuários
                    </Text>

                </TouchableOpacity>


                <View style={feed.options}>

                </View>

            </View>



        </View>
    );
}

const feed = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#FFF'
    },
    cima: {
        height: '50%',
        width: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
        gap: 20,
        backgroundColor: 'transparent',
        borderBottomWidth: 2,
        borderColor: '#97D8AE',
    },

    options: {
        width: '40%',
        height: '40%',
        backgroundColor: '#cdcdcd',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',

    },
    botao: {
        width: '40%',
        height: '40%',
        backgroundColor: '#97D8AE',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15, shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    textoBotao: {
        fontSize: 18,
        fontWeight: '800',
        color: '#3C8F5A'
    }
})

const telaRelatorio = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'flex-start',
        // alignItems: 'center',
        backgroundColor: '#FFF',
        gap: 11,
    },
    cima: {
        paddingTop: '22%',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
        gap: 20,
        backgroundColor: 'transparent',

        borderColor: '#97D8AE',
        flexDirection: 'row'
    },

    options: {
        width: '40%',
        height: '40%',
        backgroundColor: '#cdcdcd',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',

    },
    botao: {
        width: '40%',
        height: '30%',
        backgroundColor: '#97D8AE',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15, shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    textoBotao: {
        fontSize: 18,
        fontWeight: '800',
        color: '#3C8F5A'
    }
})



function Relatorio() {
    const navigation = useNavigation()
    return (


        <View style={telaRelatorio.container}>
            <ScrollView>
                <View style={telaRelatorio.cima}>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Graficos', { tipo: 'UF' })}
                        style={telaRelatorio.botao}>

                        <MaterialCommunityIcons name="city" color={'white'} size={50} />

                        <Text style={telaRelatorio.textoBotao}>
                            UF
                        </Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Graficos', { tipo: 'Usuarios' })}
                        style={telaRelatorio.botao}>

                        <MaterialCommunityIcons name="account-supervisor-circle" color={'white'} size={50} />

                        <Text style={telaRelatorio.textoBotao}>
                            Usuários
                        </Text>

                    </TouchableOpacity>


                    <TouchableOpacity
                        onPress={() => navigation.navigate('Graficos', { tipo: 'Idade' })}
                        style={telaRelatorio.botao}>

                        <MaterialCommunityIcons name="format-list-numbered-rtl" color={'white'} size={50} />

                        <Text style={telaRelatorio.textoBotao}>
                            Idade
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Graficos', { tipo: 'Medicamentos' })}
                        style={telaRelatorio.botao}>

                        <MaterialCommunityIcons name="pill" color={'white'} size={50} />

                        <Text style={telaRelatorio.textoBotao}>
                            Medicamentos
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Graficos', { tipo: 'Comordidades' })}
                        style={telaRelatorio.botao}>

                        <MaterialCommunityIcons name="diabetes" color={'white'} size={50} />

                        <Text style={telaRelatorio.textoBotao}>
                            Comordidades
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Graficos', { tipo: 'Alergias' })}
                        style={telaRelatorio.botao}>

                        <MaterialCommunityIcons name="allergy" color={'white'} size={50} />

                        <Text style={telaRelatorio.textoBotao}>
                            Alergias
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Graficos', { tipo: 'Sangue' })}
                        style={telaRelatorio.botao}>

                        <MaterialCommunityIcons name="iv-bag" color={'white'} size={50} />

                        <Text style={telaRelatorio.textoBotao}>
                            Sangue
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Graficos', { tipo: 'Doador' })}
                        style={telaRelatorio.botao}>

                        <MaterialCommunityIcons name="hand-heart" color={'white'} size={50} />

                        <Text style={telaRelatorio.textoBotao}>
                            Doador
                        </Text>

                    </TouchableOpacity>



                </View>

            </ScrollView>

        </View>
    );

}

function Graficos({ route, navigation }) {
    const { tipo } = route.params

    return (
        <Text> {tipo} </Text>
    )
}