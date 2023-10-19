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
    return (
        <ContextInfo.Provider
            value={{
                //Cadastro
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
                inputOrgao, setInputOrgao



            }}>
            {children}
        </ContextInfo.Provider>


    )

}