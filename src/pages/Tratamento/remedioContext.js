import { useState, useContext } from 'react';
import React from 'react';

export const RemedioContext = React.createContext()
let idzinho = 0
export const RemedioContextProvider = ({children}) => {
    const [inputRemedio, setInputRemedio] = useState('')
    const [inputDoenca, setInputDoenca] = useState('')
    const [inputData, setInputData] = useState('')
    const [arrayTratamento, setArrayTratamento] = useState([])
    const [idEdit, setIdEdit] = useState()
    
   
    const criandoPost = (post) =>
    setArrayTratamento([...arrayTratamento, post]);
 
    const editandoPost = (post) =>{
        arrayTratamento.splice(post.id, 1, post)
        setArrayTratamento(arrayTratamento)
        setFlagEditando(false)
    }

  
    function construindoObj(doenca, remedio, data)  {
        let tratamento =
        { Enfermidade: doenca,
        Remedio: remedio,
        Data: data,
        Indice: (flagEditando? idEdit : idzinho + 1)
    }
   
            idzinho++;
    console.log(tratamento);

        return tratamento
    }
    const [flagEditando, setFlagEditando] = useState(false)

    return (
        <RemedioContext.Provider
            value={{inputRemedio, setInputRemedio,
                 inputDoenca, setInputDoenca, 
                 inputData, setInputData,
                  arrayTratamento, setArrayTratamento,
                  criandoPost, construindoObj, editandoPost,
                   flagEditando, setFlagEditando,
                   idEdit, setIdEdit
                  }}>
            {children}
        </RemedioContext.Provider>


    )

}