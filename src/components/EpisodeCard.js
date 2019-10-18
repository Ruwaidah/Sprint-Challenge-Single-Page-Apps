import React from 'react'

export default function EpisodeCard(props) {

    return (
        <div className = "episodecard">
          <h2>{props.episode.name}</h2>
          <p>Episode: {props.episode.episode}</p>
          <p>Date: {props.episode.air_date}</p>
        </div>
      )
}
