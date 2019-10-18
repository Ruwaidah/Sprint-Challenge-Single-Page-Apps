import React from "react";
import  { BrowserRouter as Router}  from 'react-router-dom'
import {NavLink, Route} from 'react-router-dom'
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList'
import LocationsList from './components/LocationsList'
import EpisodesList from './components/EpisodesList'



export default function App() {
  return (
    <Router>
    <main>
      <Header />
      <div className = 'nav'>
        <NavLink exact to = "/">Characters</NavLink>
        <NavLink to = "/locations">Locations</NavLink>
        <NavLink exact to = "/episodes">Episodes</NavLink>
      </div>
      <Route exact path = '/' component = {CharacterList}/>
      {/* <CharacterList /> */}
      <Route exact path = '/locations' component = {LocationsList}/>
      <Route exact path = '/episodes' component = {EpisodesList} />
      {/* <LocationsList /> */}
    </main>
    </Router>

  );
}
