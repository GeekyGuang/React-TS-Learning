import React, { useState } from 'react'

interface DefaultContextValue {
  name: string
  shoppingCartItems: { id: number; name: string }[]
}

const defaultContextValue: DefaultContextValue = {
  name: 'jack',
  shoppingCartItems: [],
}

export interface StateContext {
  state: DefaultContextValue
  setState:
    | React.Dispatch<React.SetStateAction<DefaultContextValue>>
    | undefined
}

export const appContext = React.createContext<StateContext>({
  state: defaultContextValue,
  setState: undefined,
})

export const AppStateProvider: React.FC = (props) => {
  const [state, setState] = useState(defaultContextValue)
  return (
    <appContext.Provider value={{ state, setState }}>
      {props.children}
    </appContext.Provider>
  )
}
