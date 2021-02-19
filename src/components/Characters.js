import React from 'react'
import Character from './Character'

export default function Characters(props) {
  const { characters } = props
  const arr = Array.from(characters)
  
  return (
    <div className="list-container">
      {arr.map(char => {
        return (<Character character={char} key={arr.indexOf(char)}/>)
      })}
    </div>
  )
}