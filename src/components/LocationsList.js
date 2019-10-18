import React, { useEffect, useState } from "react";
import axios from 'axios'
import LocationCard from './LocationCard'

export default function LocationsList() {
    const [locations, setEpisode] = useState();
    useEffect(() => {
        axios.get(" https://rickandmortyapi.com/api/location/ ")
        .then(response => {
            setEpisode(response.data.results)
        })
    }, [])

    if (!locations)
    return <h2>Loading...</h2>

    return (
        <div className = "locations">
            {locations.map(location => <LocationCard location = {location}/>)}
        </div>
    )
}
