import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios'
import styled from 'styled-components'
import Characters from './components/Characters'


const Styled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
  color: white;
  background: transparent;
  border: none;
  font-size: 20px;
  }
`
 
const App = () => {
  const [characters, setCharacter] = useState('')

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/`)
    .then(res => {
      setCharacter(res.data.results)
  })
    .catch(err => {
    debugger
  })
  }, [])

  return (
    <>
      <Styled className="App">
        <h1 className="Header">Star Wars</h1>
        <Characters characters={characters} />
      </Styled>
    </>

  );
}

export default App;
