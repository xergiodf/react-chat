import React, { useContext, useState } from 'react'
import { GlobalContext } from '../GlobalState'
import { SEND_MESSAGE } from '../GlobalState/actions'

const TextBox = () => {
  const { dispatch } = useContext(GlobalContext)
  const [text, setText] = useState('')

  const onMsgSend = () => {
    dispatch({ type: SEND_MESSAGE, payload: text })
    setText('')
  }

  return (
    <>
      <textarea
        rows="4"
        cols="50"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button onClick={onMsgSend}>Send</button>
    </>
  )
}

export default TextBox
