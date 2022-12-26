import React from 'react'
import './home.css'

const Home = () => {
  return (
    <div id='home'>
      <div className='homeContainer'>
        <div className="homeText">
                <h1>Hi, My Name is <br /><span>Amit</span> Kumar Singh</h1>
                <p>Web Developer</p>
        </div>
        <div className='homeImage'>
          <img src="https://docs.google.com/uc?id=1eN6Jaw9DiY4q0e0-f21ZH-iC90-_frVk" alt='Error in loading...'/>
        </div>
      </div>
    </div>
  )
}

export default Home;