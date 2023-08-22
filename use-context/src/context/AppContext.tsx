'use client'
import {createContext, ReactNode, useState, SetStateAction, Dispatch} from 'react'

interface ContextTypes  
{
    val: number,
    setVal: Dispatch<SetStateAction<number>>
}


export const context = createContext({} as ContextTypes)

const AppContext = ({children}: {children: ReactNode}) => {
    const [val, setVal] = useState(0)
    return <context.Provider value={{val, setVal}}>
        {children}
    </context.Provider>
}
export default AppContext

