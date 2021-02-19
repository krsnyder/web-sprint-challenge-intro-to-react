import React from 'react'
import styled from 'styled-components'

const Styled = styled.div`
  border: 2px solid black;
  width: 30vw;
  background-color: rgb(0, 0, 0, 0.6);
  h3 {
    color: silver;
  }
`

export default function Character(props) {
  const { character} = props
  return (
    <Styled>
      <h3>{character.name}</h3>
    </Styled>
  )
}