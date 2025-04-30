import React, {useContext, createContext} from 'react'


export const theme = createContext({
    mode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{}
})

export const ThemeProvider = theme.Provider

