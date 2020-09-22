import React from 'react'
import GlobalState from '../GlobalState'
import Contacts from '../Contacts'
import MessagesView from '../MessagesView'
import MessagesInput from '../MessagesInput'

const App = () => (
  <GlobalState>
    <Contacts />
    <MessagesView />
    <MessagesInput />
  </GlobalState>
)

export default App
