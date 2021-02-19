import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios'
import styled from 'styled-components'
import Characters from './components/Characters'
// import Details from './components/Details'

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
  // const [theme, setTheme] = useState('darkmode')

  // Get request to fetch data from API
  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/`)
    .then(res => {
      setCharacter(res.data.results)
  })
    .catch(err => {
    debugger
  })
  }, [])

  // console.log(characters)
  
  // functions for showing/hiding details
  // const openDetails = id => {
  //   setDetails(id)
  // }

  // const closeDetails = () => {
  //   setDetails(null)
  // }

  // Toggling style themes
  const toggleTheme = () => {
    console.log("tog")
  }

  return (
    <Styled className="App">
      <h1 className="Header">Star Wars</h1>
      <Characters characters={characters}>
      </Characters>
      <button onClick={toggleTheme}>Dark Mode</button>
    </Styled>
  );
}

export default App;
