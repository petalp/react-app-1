import React from 'react'
import possibilityImage from '../../assets/possibility.png'
import './possibility.css'

const Possiblity = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>

      <div className="gpt3__possibility-content">
        <h4>Request Early access to get Started</h4>
        <h1 className="gradient__text">The possibility are <br /> beyound your imagination </h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing.
          Indulgence way everything joy alternation boisterous the attachment. Party we years to order allow asked of
        </p>
        <h4> Request Early Access to Get Started </h4>
      </div>
    </div>
  )
}

export default Possiblity