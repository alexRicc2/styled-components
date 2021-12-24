import React, { createContext , useContext, useState} from 'react';

export const NomeContext = createContext({})

function NomeProvider({children}){

  const [nome, setNome] = useState('Fulano')

  return(
    <NomeContext.Provider value={{nome, setNome}}>
    {children}
    </NomeContext.Provider>
  )
}
function useNome(){
  const context = useContext(NomeContext)
  return context
}


export { NomeProvider, useNome }