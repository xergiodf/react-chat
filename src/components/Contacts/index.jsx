import React, { useContext } from 'react'
import { GlobalContext } from '../GlobalState'
import { ADD_CONTACT, SELECT_CONTACT } from '../GlobalState/actions'

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
    <ul>
      <li>
        <button onClick={() => onSelectContact(me)}>
          {selected === me && '🔘️'} You
        </button>
      </li>
      {contacts.map((c) => (
        <li key={c.id}>
          <button onClick={() => onSelectContact(c.id)}>
            {selected === c.id && '🔘️'}
            {c.name}
          </button>
        </li>
      ))}
      <li>
        <button onClick={() => onAddContact()}>Add Contact</button>
      </li>
    </ul>
  )
}

export default ContactsBox
