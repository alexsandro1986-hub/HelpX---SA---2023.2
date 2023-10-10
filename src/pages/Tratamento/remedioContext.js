import { useState, useContext } from 'react';
import React from 'react';

export const RemedioContext = React.createContext()

export const RemedioContextProvider = ({children}) => {
    const [inputRemedio, setInputRemedio] = useState('')
    const [inputDoenca, setInputDoenca] = useState('')
    const [inputData, setInputData] = useState('')
    const [arrayTratamento, setArrayTratamento] = useState([])
    const [idEdit, setIdEdit] = useState()
    
   
    const criandoTratamento = (post) =>
    setArrayTratamento([...arrayTratamento, post]);
 
    const editandoTratamento = (post) =>{
        arrayTratamento.splice(post.id, 1, post)
        setArrayTratamento(arrayTratamento)
        setFlagEditando(false)
    }
    function construindoObj(doenca, remedio, data)  {
    let tratamento =
        { Enfermidade: doenca,
        Remedio: remedio,
        Data: data,
        id: (flagEditando? idEdit : arrayTratamento.length)
    }
        return tratamento
    }
    const [flagEditando, setFlagEditando] = useState(false)

    return (
        <RemedioContext.Provider
            value={{inputRemedio, setInputRemedio,
                 inputDoenca, setInputDoenca, 
                 inputData, setInputData,
                  arrayTratamento, setArrayTratamento,
                  criandoTratamento, construindoObj, editandoTratamento,
                   flagEditando, setFlagEditando,
                   idEdit, setIdEdit
                  }}>
            {children}
        </RemedioContext.Provider>


    )

}