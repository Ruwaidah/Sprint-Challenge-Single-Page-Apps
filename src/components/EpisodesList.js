import React, {useState, useEffect} from 'react'
import axios from 'axios'
import EpisodeCard from './EpisodeCard'

export default function EpisodesList() {
    const [episodes, setEpisodes] = useState();
    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/episode/")
            .then(response => {
                console.log(response.data.results)
                setEpisodes(response.data.results)
            })
    }, [])

    if (!episodes){
        return <h2>Loading ... </h2>
    }
    console.log(episodes)
    return(
        <div className = 'EpisodesList'>
            {episodes.map(episode => <EpisodeCard  episode = {episode}/>)}
        </div>
    )
}