import React, { useContext } from 'react'
import { GlobalContext } from '../GlobalState'

const MessagesBox = () => {
  const {
    state: { messages = [], selected },
  } = useContext(GlobalContext)
  return (
    <div>
      {messages
        .filter((m) => m.to === selected)
        .map((m, i) => (
          <p key={`msg-${i}`}>{m.message}</p>
        ))}
    </div>
  )
}

export default MessagesBox
