import React, { useContext } from 'react'
import styled from 'styled-components'
import { GlobalContext } from '../GlobalState'
import Contact from '../Contacts/Contact'

const Content = styled.div`
  padding: 1rem;
  height: 100%;
  background: #f7f7f7;
  flex-shrink: 2;
  overflow-y: auto;
  box-shadow: inset 0 2rem 2rem -2rem rgba(0, 0, 0, 0.05),
    inset 0 -2rem 2rem -2rem rgba(0, 0, 0, 0.05);
`

const Message = styled.div`
  box-sizing: border-box;
  padding: 0.5rem 1rem;
  margin: ${(props) => (props.me ? '1rem 1rem 1rem auto' : '1rem')};
  background: ${(props) => (props.me ? '#333' : '#fff')};
  color: ${(props) => (props.me ? '#fff' : '#000')};
  border-radius: ${(props) =>
    props.me ? '1.125rem 1.125rem 0 1.125rem' : '1.125rem 1.125rem 1.125rem 0'};
  min-height: 2.25rem;
  width: fit-content;
  max-width: 66%;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.075),
    0rem 1rem 1rem -1rem rgba(0, 0, 0, 0.1);
`

const View = () => {
  const {
    state: { contacts = [], messages = [], selected, me },
  } = useContext(GlobalContext)
  return (
    <>
      <Contact
        name={
          selected === me ? 'You' : contacts.find((c) => c.id === selected).name
        }
        icon="👤️"
      />
      <Content>
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
      </Content>
    </>
  )
}

export default View
