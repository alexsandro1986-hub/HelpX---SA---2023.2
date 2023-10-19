import { useState, useContext } from 'react';
import React from 'react';

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
    const [inputTiposangineo, setInputTiposangineo] = useState('')
    const [inputSangue, setInputSnague] = useState('')
    const [inputOrgao, setInputOrgao] = useState('')
    
                //Cadastro

    //ADMIN
    const [flagAdm, setFlagAdm] = useState(false)
    const senhaAdm = '123321'
    const loginAdm = 'oiAdmin'

    //Objeto Info User
    const vetorUser = [
        {
        id: 1,
        nome: "Alice",
        idade: 25,
        alergia: "Pólen",
        sangue: "A+",
        doador: 'Sim',
        telefone: "123-456-7890",
        contatoEmergencia: "Bob",
        telefoneEmergencia: "987-654-3210",
        cep: "12345-678",
        logradouro: "Rua das Flores",
        nCasa: "123",
        email: "alice@email.com",
        senha: "senha123"
    },
    {
        id: 2,
        nome: "Bob",
        idade: 30,
        alergia: "Amendoim",
        sangue: "O-",
        doador: 'Não',
        telefone: "234-567-8901",
        contatoEmergencia: "Charlie",
        telefoneEmergencia: "876-543-2109",
        cep: "23456-789",
        logradouro: "Avenida Principal",
        nCasa: "456",
        email: "bob@email.com",
        senha: "senha456"
    },
    {
        id: 3,
        nome: "Charlie",
        idade: 40,
        alergia: "Nenhuma",
        sangue: "B+",
        doador: 'Sim',
        telefone: "345-678-9012",
        contatoEmergencia: "David",
        telefoneEmergencia: "765-432-1098",
        cep: "34567-890",
        logradouro: "Rua da Paz",
        nCasa: "789",
        email: "charlie@email.com",
        senha: "senha789"
    },
    {
        id: 4,
        nome: "David",
        idade: 35,
        alergia: "Penicilina",
        sangue: "AB-",
        doador: 'Não',
        telefone: "456-789-0123",
        contatoEmergencia: "Eve",
        telefoneEmergencia: "654-321-0987",
        cep: "45678-901",
        logradouro: "Avenida da Esperança",
        nCasa: "1011",
        email: "david@email.com",
        senha: "senha1011"
    },
    {
        id: 5,
        nome: "Eve",
        idade: 28,
        alergia: "Amendoim",
        sangue: "A-",
        doador: 'Sim',
        telefone: "567-890-1234",
        contatoEmergencia: "Frank",
        telefoneEmergencia: "543-210-9876",
        cep: "56789-012",
        logradouro: "Rua dos Sonhos",
        nCasa: "1213",
        email: "eve@email.com",
        senha: "senha1213"
    },
    {
        id: 6,
        nome: "Frank",
        idade: 45,
        alergia: "Nenhuma",
        sangue: "O+",
        doador: 'Não',
        telefone: "678-901-2345",
        contatoEmergencia: "Grace",
        telefoneEmergencia: "432-109-8765",
        cep: "67890-123",
        logradouro: "Avenida da Liberdade",
        nCasa: "1415",
        email: "frank@email.com",
        senha: "senha1415"
    },
    {
        id: 7,
        nome: "Grace",
        idade: 22,
        alergia: "Pólen",
        sangue: "A-",
        doador: 'Sim',
        telefone: "789-012-3456",
        contatoEmergencia: "Hank",
        telefoneEmergencia: "321-098-7654",
        cep: "78901-234",
        logradouro: "Rua da Amizade",
        nCasa: "1617",
        email: "grace@email.com",
        senha: "senha1617"
    },
    {
        id: 8,
        nome: "Hank",
        idade: 50,
        alergia: "Glúten",
        sangue: "B+",
        doador: 'Não',
        telefone: "890-123-4567",
        contatoEmergencia: "Ivy",
        telefoneEmergencia: "210-987-6543",
        cep: "89012-345",
        logradouro: "Avenida do Sol",
        nCasa: "1819",
        email: "hank@email.com",
        senha: "senha1819"
    },
    {
        id: 9,
        nome: "Ivy",
        idade: 33,
        alergia: "Nenhuma",
        sangue: "AB-",
        doador: 'Sim',
        telefone: "901-234-5678",
        contatoEmergencia: "Jack",
        telefoneEmergencia: "109-876-5432",
        cep: "90123-456",
        logradouro: "Rua dos Desejos",
        nCasa: "2021",
        email: "ivy@email.com",
        senha: "senha2021"
    },
    {
        id: 10,
        nome: "Jack",
        idade: 37,
        alergia: "Nenhuma",
        sangue: "O+",
        doador: 'Não',
        telefone: "012-345-6789",
        contatoEmergencia: "Karen",
        telefoneEmergencia: "987-654-3210",
        cep: "01234-567",
        logradouro: "Avenida das Estrelas",
        nCasa: "2223",
        email: "jack@email.com",
        senha: "senha2223"
    }
    ];

    // let idNovo = 11
    // funticon CriandoObjetoUser () {
    //   let objUser = { 
    //     id: idNovo,
    //     nome: inputNome,
    //     idade: inputIdade,
    //     alergia: inputAlergias,
    //     sangue: ,
    //     doador: ,
    //     telefone: inputTelefone,
    //     contatoEmergencia: inputContatoEmergencia,
    //     telefoneEmergencia: inputNtelefoneEmergencia,
    //     cep: inputNCep,
    //     logradouro: inputLogradouro,
    //     nCasa: inputNumeroCasa,
    //     email: inputEmail,
    //     senha: inputSenha
    // }
    //  vetorUser.push (objUser) OU return objUser 
        // idNovo ++
    // }




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
                inputTelefone, setInputTelefone,
                alergiaSelecionado, setAlergiaSelecionada,
                inputLogradouro, setInputLogradouro,
                inputNumeroCasa, setNumeroCasa,
                inputNCep, setInputNcep,
                //contatoEmergencia
                inputContatoEmergencia, setInputContatoEmergencia,
                inputNtelefoneEmergencia, setNtelefoneEmergencia,
                //sequestro
                inputTiposangineo, setInputTiposangineo,
                inputSangue, setInputSnague,
                inputOrgao, setInputOrgao,


                inputNCep, setInputNcep,
                inputLogradouro, setInputLogradouro,
                inputNumeroCasa, setNumeroCasa,


            //Admin 
            flagAdm, setFlagAdm,
            senhaAdm,
            loginAdm,

            
                // OBJETOS INFOS USUARIOS
                vetorUser,

            }}>
            {children}
        </ContextInfo.Provider>


    )

}