import React, { useState } from 'react'
import './about.css'
import AboutPageCard from '../../component/aboutPageCard/AboutPageCard'
import { useDataContext } from '../../context/datacotext'

const About = () => {
  const { aboutData, skills, experiences, educations, resumeURL } = useDataContext()
  const [tabs,setTabs]=useState({"skill":true,"experience":false,"education":false});

  return (
    <div id='about'>
     <div className='aboutContainer'>

      <div className='aboutImage'>
        <img src={aboutData.imgURL} alt='Loading...' />
      </div>

      <div className='aboutMain'>

        <div className='aboutText'>
          <h1>About Me</h1>
          <p>
           { aboutData.introduction}
          </p>
        </div>

        <div className="aboutTabs">
          <p className={tabs.skill===true?"tab-links tab-link-active":"tab-links"} onClick={()=>{ setTabs({"skill":true,"experience":false,"education":false}) }}>Skills</p>
          <p className={tabs.experience===true?"tab-links tab-link-active":"tab-links"} onClick={()=>{ setTabs({"skill":false,"experience":true,"education":false}) }}>Experience</p>
          <p className={tabs.education===true?"tab-links tab-link-active":"tab-links"} onClick={()=>{ setTabs({"skill":false,"experience":false,"education":true}) }}>Education</p>
        </div>

        <div className={tabs.skill===true?"tab-contents tab-active":"tab-contents"}>
          {skills.map((cur,ind)=>{
            return (<AboutPageCard key={ind} title={cur.title} contents={cur.contents} />);
          })}
        </div>

        <div className={tabs.experience===true?"tab-contents tab-active":"tab-contents"}>
          {experiences.map((cur,ind)=>{
            return (<AboutPageCard key={ind} title={cur.title} contents={cur.contents} />);
          })}
        </div>

        <div className={tabs.education===true?"tab-contents tab-active":"tab-contents"}>
          {educations.map((cur,ind)=>{
            return (<AboutPageCard key={ind} title={cur.title} contents={cur.contents} />);
          })}
        </div>

        <div className='aboutMyresume'>
          <a href={resumeURL} >My Resume</a>
        </div>

      </div>
     </div>
    </div>
  )
}

export default About;