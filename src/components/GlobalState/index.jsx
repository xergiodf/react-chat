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

const fakeMessages = [
  'Hi there 👋️',
  'Nice to e-meet you',
  'How are you?',
  'Not too bad, thanks',
  'What do you do?',
  "That's awesome",
  "I've gotta go now",
  'It was a pleasure chat with you',
  'Bye',
  '😊️',
]

const initialState = {
  me: uuidv4(),
  messages: [],
  contacts: [],
  selected: undefined,
}

const reducerFn = (state, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      if (!action.payload) return state

      const newMessage = [
        ...state.messages,
        {
          from: state.me,
          to: state.selected,
          message: action.payload,
          timestamp: Date.now(),
        },
      ]

      if (state.me !== state.selected) {
        const msgLen = newMessage.filter(
          (m) => m.from === state.selected && m.to === state.me
        ).length

        if (msgLen < fakeMessages.length) {
          newMessage.push({
            from: state.selected,
            to: state.me,
            message: fakeMessages[msgLen],
            timestamp: Date.now(),
          })
        }
      }

      return {
        ...state,
        messages: newMessage,
      }
    }

    case ADD_CONTACT: {
      if (!action.payload) return state

      const newId = uuidv4()
      return {
        ...state,
        contacts: [
          ...state.contacts,
          {
            id: newId,
            name: action.payload,
          },
        ],
        selected: newId,
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
  const [state, dispatch] = useReducer(reducerFn, {
    ...initialState,
    selected: initialState.me,
  })

  const ctxValue = { state, dispatch }
  return (
    <GlobalContext.Provider value={ctxValue}>{children}</GlobalContext.Provider>
  )
}

export default GlobalState
