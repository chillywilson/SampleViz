import { createContext, useContext, useState } from "react"

const CharacterAnimationsContext = createContext({})

export const CharacterAnimationsProvider = (props) =>{
    const [animationIndex, setAnmationIndex] = useState(0)
    const [animations, setAnimations] = useState([])

    return (
    <CharacterAnimationsContext.Provider 
    value = {{
        animationIndex,
        setAnmationIndex,
        animations,
        setAnimations,
    }}
>
        {props.children}
        </CharacterAnimationsContext.Provider>
    )
}

export const useCharacterAnimations = () =>{
    return useContext(CharacterAnimationsContext)
}