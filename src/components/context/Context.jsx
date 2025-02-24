import React, { useState } from 'react'
import { createContext } from 'react'

export let Contextapi = createContext()
let { Provider } = Contextapi
const Context = ({ children }) => {
  let [globalstate, setGlobalstate] = useState('')
  return <Provider value={{globalstate,setGlobalstate}}>{children}</Provider>
}

export default Context
