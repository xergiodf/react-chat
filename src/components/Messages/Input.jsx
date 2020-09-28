import React, { useContext } from 'react'
import styled from 'styled-components'
import { GlobalContext } from '../GlobalState'
import { SEND_MESSAGE, SAVE_DRAFT } from '../GlobalState/actions'

const InputWrapper = styled.div`
  box-sizing: border-box;
  flex-basis: 4rem;
  flex-shrink: 0;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 0 0.5rem 0 1.5rem;

  & input {
    border: none;
    background-image: none;
    background-color: white;
    padding: 0.5rem 1rem;
    margin-right: 1rem;
    border-radius: 1.125rem;
    flex-grow: 2;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1),
      0rem 1rem 1rem -1rem rgba(0, 0, 0, 0.2);
    font-family: Red hat Display, sans-serif;
    font-weight: 400;
    letter-spacing: 0.025em;
  }

  input:placeholder {
    color: #999;
  }
`

const Input = () => {
  const {
    dispatch,
    state: { drafts = [], selected, me },
  } = useContext(GlobalContext)

  const draft = drafts.find((d) => d.from === me && d.to === selected) || {
    message: '',
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      dispatch({ type: SEND_MESSAGE, payload: draft.message })
      dispatch({ type: SAVE_DRAFT, payload: '' })
    }
  }

  return (
    <InputWrapper>
      <input
        onChange={(e) =>
          dispatch({ type: SAVE_DRAFT, payload: e.target.value })
        }
        onKeyDown={handleKeyDown}
        value={draft.message}
        placeholder="Type your message here!"
        type="text"
      />
    </InputWrapper>
  )
}

export default Input
