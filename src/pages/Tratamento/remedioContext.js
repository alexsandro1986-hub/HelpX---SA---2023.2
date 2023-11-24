import { useState, useContext } from 'react';
import React from 'react';

export const RemedioContext = React.createContext()

export const RemedioContextProvider = ({children}) => {
    const [inputRemedio, setInputRemedio] = useState('')
    const [inputDoenca, setInputDoenca] = useState('')
    const [inputData, setInputData] = useState('')
    const [arrayTratamento, setArrayTratamento] = useState([])
    const [idEdit, setIdEdit] = useState()
    

    const [flagEditando, setFlagEditando] = useState(false)

    return (
        <RemedioContext.Provider
            value={{inputRemedio, setInputRemedio,
                 inputDoenca, setInputDoenca, 
                 inputData, setInputData,
                  arrayTratamento, setArrayTratamento,
                       flagEditando, setFlagEditando,
                   idEdit, setIdEdit
                  }}>
            {children}
        </RemedioContext.Provider>


    )

}