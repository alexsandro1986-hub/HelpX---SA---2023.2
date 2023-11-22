import { useState, useContext } from 'react';
import React from 'react';
import { NavigationHelpersContext } from '@react-navigation/native';
import { useNavigation, NavigationContainer } from "@react-navigation/native";

export const ContextInfo = React.createContext()

export const ContextInfoProvider = ({ children }) => {
    //Erick
    const [inputEmail, setInputEmail] = useState('')
    const [inputSenha, setInputSenha] = useState('')
    const [inputConfirmaSenha, setInputConfirmaSenha] = useState('')
    //Alex
    const [inputNome, setInputNome] = useState('')
    const [inputIdade, setInputIdade] = useState('')
    const [alergiaSelecionado, setAlergiaSelecionada] = useState('')
    const [inputTelefone, setInputTelefone] = useState('')
    const [inputContatoEmergencia, setInputContatoEmergencia] = useState('')
    const [inputNtelefoneEmergencia, setNtelefoneEmergencia] = useState('')
    const [inputNCep, setInputNcep] = useState('')
    const [inputLogradouro, setInputLogradouro] = useState('')
    const [inputNumeroCasa, setNumeroCasa] = useState('')
    const [inputTiposanguineo, setInputTiposanguineo] = useState('')
    const [inputSangue, setInputSangue] = useState('')
    const [inputOrgao, setInputOrgao] = useState('')
    const [inputCpf, setInputCpf] = useState('')
    const [inputComorbidade, setInpuComorbidade] = useState('')
    const [inputMedicamentoComor,  setInputMedicamentoComor] = useState('')
    //Cadastro

    // Login
    const [id, setId] = useState()
    const [userInfo, setUserInfo] = useState()
    //ADMIN
    const [flagAdm, setFlagAdm] = useState(false)
    const senhaAdm = '123'
    const loginAdm = 'adm'

    // LOGOUT

    const logout = () => {
        if (flagAdm){
            setFlagAdm(!flagAdm)
           
        }
        setInputEmail('')
        setInputSenha('')
       
    }
    //Objeto Info User
    const vetorUser = [
        {
          id: 1,
          nome: "João Silva",
          idade: 30,
          alergia: "Pólen",
          tipoSanguineo: "A+",
          doadorSangue: "Sim",
          telefone: "(11) 1234-5678",
          contatoEmergencia: "Maria Silva",
          telefoneEmergencia: "(11) 8765-4321",
          cep: "12345-678",
          logradouro: "Rua das Flores",
          nCasa: "123",
          email: "joao.com",
          senha: "123",
          doadorOrgao: "Não"
        },
        {
          id: 2,
          nome: "Andrey",
          idade: 25,
          alergia: "Amendoim",
          tipoSanguineo: "B-",
          doadorSangue: "Não",
          telefone: "(22) 9876-5432",
          contatoEmergencia: "Pedro Santos",
          telefoneEmergencia: "(22) 1234-5678",
          cep: "54321-876",
          logradouro: "Avenida Principal",
          nCasa: "567",
          email: "andrey",
          senha: "123",
          doadorOrgao: "Não"
        },
        {
          id: 3,
          nome: "Carlos Pereira",
          idade: 35,
          alergia: "Nenhum",
          tipoSanguineo: "O+",
          doadorSangue: "Sim",
          telefone: "(33) 5555-5555",
          contatoEmergencia: "Ana Pereira",
          telefoneEmergencia: "(33) 9999-9999",
          cep: "98765-432",
          logradouro: "Rua das Árvores",
          nCasa: "789",
          email: "carlos@example.com",
          senha: "senha789",
          doadorOrgao:"Sim"
        },
        {
          id: 4,
          nome: "Ana Santos",
          idade: 28,
          alergia: "Poeira",
          tipoSanguineo: "AB+",
          doadorSangue: "Não",
          telefone: "(44) 7777-7777",
          contatoEmergencia: "José Santos",
          telefoneEmergencia: "(44) 1234-5678",
          cep: "55555-555",
          logradouro: "Avenida Central",
          nCasa: "456",
          email: "ana@example.com",
          senha: "senha101",
          doadorOrgao: "Não"
        },
        {
          id: 5,
          nome: "Pedro Ferreira",
          idade: 40,
          alergia: "Látex",
          tipoSanguineo: "A-",
          doadorSangue: "Sim",
          telefone: "(55) 9999-8888",
          contatoEmergencia: "Mariana Ferreira",
          telefoneEmergencia: "(55) 8888-9999",
          cep: "66666-666",
          logradouro: "Rua dos Esportes",
          nCasa: "101",
          email: "pedro@example.com",
          senha: "senha202",
          doadorOrgao: "Sim"
        },
        {
          id: 6,
          nome: "Laura Mendes",
          idade: 32,
          alergia: "Frutos do Mar",
          tipoSanguineo: "B+",
          doadorSangue: "Não",
          telefone: "(66) 1234-4321",
          contatoEmergencia: "Rodrigo Mendes",
          telefoneEmergencia: "(66) 4321-1234",
          cep: "77777-777",
          logradouro: "Avenida dos Parques",
          nCasa: "303",
          email: "laura@example.com",
          senha: "senha303",
          doadorOrgao: "Não"
        },
        {
          id: 7,
          nome: "Paulo Oliveira",
          idade: 29,
          alergia: "Nenhum",
          tipoSanguineo: "O-",
          doadorSangue: "Sim",
          telefone: "(77) 5555-8888",
          contatoEmergencia: "Luísa Oliveira",
          telefoneEmergencia: "(77) 8888-5555",
          cep: "88888-888",
          logradouro: "Rua dos Negócios",
          nCasa: "505",
          email: "paulo@example.com",
          senha: "senha404",
          doadorOrgao: "Sim"
        },
        {
          id: 8,
          nome: "Isabela Gonçalves",
          idade: 27,
          alergia: "Poluição",
          tipoSanguineo: "AB-",
          doadorSangue: "Não",
          telefone: "(88) 1111-9999",
          contatoEmergencia: "Gustavo Gonçalves",
          telefoneEmergencia: "(88) 9999-1111",
          cep: "99999-999",
          logradouro: "Avenida das Artes",
          nCasa: "707",
          email: "isabela@example.com",
          senha: "senha505",
          doadorOrgao: "Não"
        },
        {
          id: 9,
          nome: "Rafaela Sousa",
          idade: 26,
          alergia: "Animais de Estimação",
          tipoSanguineo: "A+",
          doadorSangue: "Sim",
          telefone: "(99) 3333-3333",
          contatoEmergencia: "Fernando Sousa",
          telefoneEmergencia: "(99) 1234-5678",
          cep: "11111-111",
          logradouro: "Rua das Comidas",
          nCasa: "909",
          email: "rafaela@example.com",
          senha: "senha606",
          doadorOrgao: "Sim"
        },
        {
          id: 10,
          nome: "Gustavo Alves",
          idade: 31,
          alergia: "Poeira",
          tipoSanguineo: "B+",
          doadorSangue: "Sim",
          telefone: "(10) 5432-1098",
          contatoEmergencia: "Luciana Alves",
          telefoneEmergencia: "(10) 1234-5678",
          cep: "22222-222",
          logradouro: "Avenida dos Veículos",
          nCasa: "1010",
          email: "gustavo@example.com",
          senha: "senha707",
          doadorOrgao: "Não"
        }
      ];
           




    return (
        <ContextInfo.Provider
            value={{
                //Ercik
                inputEmail, setInputEmail,
                inputSenha, setInputSenha,
                inputConfirmaSenha, setInputConfirmaSenha,
                //dadosPessoais
                inputNome, setInputNome,
                inputIdade, setInputIdade,
                inputCpf, setInputCpf,
                inputTelefone, setInputTelefone,
                alergiaSelecionado, setAlergiaSelecionada,
                inputLogradouro, setInputLogradouro,
                inputNumeroCasa, setNumeroCasa,
                inputNCep, setInputNcep,
                //contatoEmergencia
                inputContatoEmergencia, setInputContatoEmergencia,
                inputNtelefoneEmergencia, setNtelefoneEmergencia,
                //sequestro
                inputTiposanguineo, setInputTiposanguineo,
                inputSangue, setInputSangue,
                inputOrgao, setInputOrgao,
                
                inputComorbidade, setInpuComorbidade,
                inputMedicamentoComor, setInputMedicamentoComor,
              
                inputNCep, setInputNcep,
                inputLogradouro, setInputLogradouro,
                inputNumeroCasa, setNumeroCasa,


                //Admin 
                flagAdm, setFlagAdm,
                senhaAdm,
                loginAdm,
                //Login
                id, setId,
                userInfo, setUserInfo,
                //Logout 
                logout,
                // OBJETOS INFOS USUARIOS
                vetorUser,

            }}>
            {children}
        </ContextInfo.Provider>


    )

}