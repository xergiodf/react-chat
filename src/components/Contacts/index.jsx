import React, { useContext } from 'react'
import styled from 'styled-components'
import { GlobalContext } from '../GlobalState'
import { ADD_CONTACT, SELECT_CONTACT } from '../GlobalState/actions'
import Contacts from './Contacts'
import Contact from './Contact'

const Content = styled.div`
  height: 75%;
  overflow-y: auto;
  border-top: solid 1px #f1f1f1;
  border-bottom: solid 1px #f1f1f1;
`

const ContactsBox = () => {
  const {
    state: { contacts = [], selected, me },
    dispatch,
  } = useContext(GlobalContext)

  const onSelectContact = (id) =>
    dispatch({ type: SELECT_CONTACT, payload: id })

  const onAddContact = () => {
    const contactName = prompt('Contact Name: ')
    dispatch({ type: ADD_CONTACT, payload: contactName })
  }

  return (
    <Contacts>
      <h2>
        <span className="icon">👥️</span>Contacts
      </h2>
      <Content>
        <Contact
          name="You"
          onClick={() => onSelectContact(me)}
          icon={(selected === me && '💬️') || '🔵️'}
          clickable
        />
        {contacts.map((c) => (
          <Contact
            key={`contact-${c.id}`}
            onClick={() => onSelectContact(c.id)}
            name={c.name}
            icon={(selected === c.id && '💬️') || '🔵️'}
            clickable
          />
        ))}
      </Content>

      <Contact
        onClick={() => onAddContact()}
        name="Add contact"
        icon="🗣️"
        clickable
      />
    </Contacts>
  )
}

export default ContactsBox
