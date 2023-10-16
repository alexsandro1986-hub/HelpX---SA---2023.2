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
    const [inputAlergias, setInputAlergias] = useState('')
    const [inputTelefone, setInputTelefone] = useState('')
    const [inputContatoEmergencia, setInputContatoEmergencia] = useState('')
    const [inputNtelefoneEmergencia, setNtelefoneEmergencia] = useState('')
    const [inputNCep,setInputNcep]= useState('')
    const [inputLogradouro,setInputLogradouro]= useState('')
    const [inputNumeroCasa,setNumeroCasa]= useState('')

    const teste = [
        { Nome: inputNome, Settar: setInputNome },
        { Nome: inputIdade, Settar: setInputIdade },
        { Nome: inputEmail, Settar: setInputEmail },
        { Nome: inputTelefone, Settar: setInputTelefone },
        { Nome: inputAlergias, Settar: setInputAlergias },
        { Nome: inputContatoEmergencia, Settar: setInputContatoEmergencia },
        { Nome: inputNtelefoneEmergencia, Settar: setNtelefoneEmergencia },
        { Nome: inputNCep, Settar: setInputNcep },
        { Nome: inputLogradouro, Settar: setInputLogradouro },
        { Nome: inputNumeroCasa, Settar: setNumeroCasa },
    ]

    return (
        <ContextInfo.Provider
            value={{
               //Ercik
                inputEmail, setInputEmail,
                inputSenha, setInputSenha,
                inputConfirmaSenha, setInputConfirmaSenha,
                //Alexs
                inputNome, setInputNome,
                inputIdade, setInputIdade,
                inputTelefone, setInputTelefone,
                inputAlergias, setInputAlergias,
                inputTelefone, setInputTelefone,
                inputContatoEmergencia, setInputContatoEmergencia,
                inputNtelefoneEmergencia, setNtelefoneEmergencia,
                inputNCep,setInputNcep,
                inputLogradouro,setInputLogradouro,
                inputNumeroCasa,setNumeroCasa,
                teste
                
            }}>
            {children}
        </ContextInfo.Provider>


    )

}