import React from 'react'
import './home.css'
import { useDataContext } from '../../context/datacotext'
// import LandingPage from '../../assets/LandingPage'

const Home = () => {
  const { homeData } = useDataContext()
  
  return (
    <div id='home'>
      <div className='homeContainer'>
        <div className="homeText">
                <h1>{homeData.introLine} <br /><span>{homeData.firstName}</span> {homeData.middleName} {homeData.lastName}</h1>
                <p>{homeData.jobTitle}</p>
        </div>
        <div className='homeImage'>
          <img src={`${homeData.imgURL}`} alt='Loading...'/>
          {/* <LandingPage /> */}
        </div>
      </div>
    </div>
  )
}

export default Home;