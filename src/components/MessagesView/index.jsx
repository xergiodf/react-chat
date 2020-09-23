import React, { useContext } from 'react'
import { GlobalContext } from '../GlobalState'

const Message = ({ me, children }) => (
  <>
    {me ? (
      <p>
        <b>{children}</b>
      </p>
    ) : (
      <p>{children}</p>
    )}
  </>
)

const MessagesBox = () => {
  const {
    state: { contacts = [], messages = [], selected, me },
  } = useContext(GlobalContext)

  return (
    <div>
      <p>
        Currently talking to:{' '}
        {selected === me ? 'You' : contacts.find((c) => c.id === selected).name}{' '}
      </p>
      <hr />
      {messages
        .filter(
          (m) =>
            (m.to === selected && m.from === me) ||
            (m.to === me && m.from === selected)
        )
        .map((m, i) => (
          <Message me={m.from === me} key={`msg-${i}`}>
            {m.message}
          </Message>
        ))}
      <hr />
    </div>
  )
}

export default MessagesBox
