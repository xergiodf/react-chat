import React from 'react'
import styled from 'styled-components'

const Name = styled.div`
  font-family: Red hat Display, sans-serif;
  font-weight: ${(props) => (props.clickable ? 'normal' : 'bold')};
  margin: ${(props) => (props.clickable ? '0.100rem' : '0.125rem')};

  & .icon {
    margin-right: 0.75rem;
  }
`

const Container = styled.div`
  margin: 1rem 1rem 1rem 0.5rem;
  height: 2rem;
  display: flex;
  cursor: ${(props) => (props.clickable ? 'pointer' : 'default')};
  color: #666666;

  &:hover {
    color: ${(props) => (props.clickable ? '#6ca0f5' : '#666666')};
  }
`

const Contact = ({ name, icon, clickable, ...props }) => (
  <Container {...props} clickable={clickable}>
    <Name clickable={clickable}>
      <span className="icon">{icon}</span> {name}
    </Name>
  </Container>
)

export default Contact
