import React, { createContext, useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { ADD_CONTACT, SEND_MESSAGE, SELECT_CONTACT } from './actions'

export const GlobalContext = createContext({})

/*
Messages structure
{
  from: '',
  to: '',
  message: '',
  timestamp: ''
}

Contacts structure
{
  id: '',
  name: ''
}
*/

const initialState = {
  me: undefined,
  messages: [],
  contacts: [],
  selected: undefined,
}

const reducerFn = (state, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            from: state.me,
            to: state.selected,
            message: action.payload,
            timestamp: Date.now(),
          },
        ],
      }
    }
    case ADD_CONTACT: {
      return {
        ...state,
        contacts: [
          ...state.contacts,
          {
            id: uuidv4(),
            name: action.payload,
          },
        ],
      }
    }
    case SELECT_CONTACT: {
      return {
        ...state,
        selected: action.payload,
      }
    }
    default:
      return state
  }
}

const GlobalState = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFn, initialState)
  const ctxValue = { state, dispatch }
  return (
    <GlobalContext.Provider value={ctxValue}>{children}</GlobalContext.Provider>
  )
}

export default GlobalState
