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
    const [inputDoador, setInputDoador] =useState('')
    const [inputSangue, setInputSangue]=useState('')
    const [inputOrgao, setInputOrgao] =useState('')


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