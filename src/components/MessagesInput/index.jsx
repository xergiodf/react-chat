import React, { useContext, useState } from 'react'
import { GlobalContext } from '../GlobalState'
import { SEND_MESSAGE } from '../GlobalState/actions'

const TextBox = () => {
  const { dispatch } = useContext(GlobalContext)
  const [text, setText] = useState('')

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      dispatch({ type: SEND_MESSAGE, payload: text })
      setText('')
    }
  }

  return (
    <>
      <input
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        value={text}
        placeholder="Type your message here!"
        type="text"
      />
    </>
  )
}

export default TextBox
