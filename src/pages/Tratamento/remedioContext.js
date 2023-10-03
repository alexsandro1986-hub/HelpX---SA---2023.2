import { useState, useContext } from 'react';
import React from 'react';

export const RemedioContext = React.createContext()

export const RemedioContextProvider = ({children}) => {
    const [inputRemedio, setInputRemedio] = useState('')
    const [inputDoenca, setInputDoenca] = useState('')
    const [inputData, setInputData] = useState('')
    const [arrayTratamento, setArrayTratamento] = useState([])
   
    const objTratamento = (post) =>
    setArrayTratamento([...arrayTratamento, post]);
 
    


    return (
        <RemedioContext.Provider
            value={{inputRemedio, setInputRemedio,
                 inputDoenca, setInputDoenca, 
                 inputData, setInputData,
                  arrayTratamento, setArrayTratamento,
                  objTratamento
                  }}>
            {children}
        </RemedioContext.Provider>


    )

}