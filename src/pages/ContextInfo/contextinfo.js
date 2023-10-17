import { useState, useContext } from 'react';
import React from 'react';

export const ContextInfo = React.createContext()

export const ContextInfoProvider = ({children}) => {
    const [inputNome, setInputNome] = useState('')
    const [inputIdade, setInputIdade] = useState('')
    const [inputTelefone, setInputTelefone] = useState('')
    const [inputEmail, setInputEmail] = useState ('')

  
    return (
        <ContextInfo.Provider
            value={{inputNome, setInputNome,
                inputIdade, setInputIdade,
                inputTelefone, setInputTelefone,
                inputEmail, setInputEmail
                  }}>
            {children}
        </ContextInfo.Provider>


    )

}