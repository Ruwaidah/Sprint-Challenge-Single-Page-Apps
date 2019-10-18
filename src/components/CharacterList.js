import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard'
import SearchForm from './SearchForm'

//  Component for the Character list and get the Data from API
export default function CharacterList() {
  const [characters, setCharacters] = useState([]);           //put the data in 
  const [searchedCharacter, setSearchedCharacter] = useState(); // Data filtered by the search form 
  const [text, setText] = useState('');  // the text input from the search form
  
  const searchword = (word) => {     // Function to update the Text that is coming from the search form component
        setText(word)
      }

  useEffect(() => {                 // getting the Data from the API
    axios.get("https://rickandmortyapi.com/api/character/")
    .then (response => {
      setCharacters(response.data.results)
      setSearchedCharacter(response.data.results)
    })
  }, []);


//  Function to search for the word in the character name
  function findmatch(obj) {
    if (obj.name.toLowerCase().includes(text.toLowerCase()))
     return obj
  }
  
  useEffect(() => {     // changing the data that display depend on the search form result
    const results = characters.filter(findmatch)
    setSearchedCharacter(results)
   },[text])


  if (!searchedCharacter)
  return <h2>Loading ...</h2>

  return (
    <section className="character-list">
      <SearchForm searchword = {searchword}/>
      <div className = "characterList">{searchedCharacter.map(character => 
        <CharacterCard character = {character} />  ) }</div>
    </section>
  );
}
