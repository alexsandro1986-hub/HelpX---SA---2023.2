import { useState, useContext } from 'react';
import React from 'react';

export const ContextInfo = React.createContext()

export const ContextInfoProvider = ({ children }) => {
    //Erick
    const [inputEmail, setInputEmail] = useState('')
    const [inputSenha, setInputSenha] = useState('')
    const [inputConfirmaSenha, setInputConfirmaSenha] = useState('')
    //Alex
    const [inputNome, setInputNome] = useState('andrey freitasd')
    const [inputIdade, setInputIdade] = useState('21')
    const [inputAlergias, setInputAlergias] = useState('dsdsadad, dadad')
    const [inputTelefone, setInputTelefone] = useState('9999999')
    const [inputContatoEmergencia, setInputContatoEmergencia] = useState('neiva')
    const [inputNtelefoneEmergencia, setNtelefoneEmergencia] = useState('333333333')
    const [inputNCep,setInputNcep]= useState('88111300')
    const [inputLogradouro,setInputLogradouro]= useState('maria julia da luz')
    const [inputNumeroCasa,setNumeroCasa]= useState('1294')
    const [inputDoador, setInputDoador] =useState('O+')
    const [inputSangue, setInputSangue]=useState('sim')
    const [inputOrgao, setInputOrgao] =useState('sim')


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
                inputContatoEmergencia, setInputContatoEmergencia,
                inputNtelefoneEmergencia, setNtelefoneEmergencia,
                inputNCep,setInputNcep,
                inputLogradouro,setInputLogradouro,
                inputNumeroCasa,setNumeroCasa,
                inputDoador, setInputDoador,
                inputSangue, setInputSangue,
                inputOrgao, setInputOrgao,
                
            }}>
            {children}
        </ContextInfo.Provider>


    )

}