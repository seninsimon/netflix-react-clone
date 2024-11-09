import React from 'react'
import './Player.css'

const Player = () => {
  return (
    <div className="player">
      <iframe 
      width="90%"
      height="90%"
      src="https://www.youtube.com/embed/XtMThy8QKqU" frameborder="0"
      title='trailer'
      ></iframe>
    </div>
  )
}

export default Player