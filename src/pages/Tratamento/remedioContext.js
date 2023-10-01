import { useState, useContext } from 'react';
import React from 'react';

export const RemedioContext = React.createContext()

export const RemedioContextProvider = ({children}) => {
    const [inputRemedio, setInputRemedio] = React.useState('')
    const [inputDoenca, setInputDoenca] = useState('ola')
    const [inputData, setInputData] = React.useState('333333')


    return (
        <RemedioContext.Provider
            value={{inputRemedio, setInputRemedio, inputDoenca, setInputDoenca, inputData, setInputData}}>
            {children}
        </RemedioContext.Provider>


    )

}