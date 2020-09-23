import styled from 'styled-components'
import Contact from './Contact'

export default styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(-3.5rem, -50%);
  width: 24rem;
  height: 32rem;
  padding: 1rem 2rem 1rem 1rem;
  box-sizing: border-box;
  border-radius: 1rem 0 0 1rem;
  background: white;
  box-shadow: 0 0 8rem 0 rgba(0, 0, 0, 0.1),
    2rem 2rem 4rem -3rem rgba(0, 0, 0, 0.5);
  transition: transform 500ms;

  &:hover {
    transform: translate(-15rem, -50%);
  }

  & h2 {
    margin: 0.5rem 0 1.5rem 0;
    font-family: Red hat Display, sans-serif;
  }

  & h2 .icon {
    margin-right: 1.5rem;
  }
`
