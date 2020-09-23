import React from 'react'
import GlobalState from '../GlobalState'
import Contacts from '../Contacts'
import Messages from '../Messages'
import MessagesView from '../Messages/View'
import MessagesInput from '../Messages/Input'
import Container from './Container'

const App = () => (
  <GlobalState>
    <Container>
      <Contacts />
      <Messages>
        <MessagesView />
        <MessagesInput />
      </Messages>
    </Container>
  </GlobalState>
)

export default App
