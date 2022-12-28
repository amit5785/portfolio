import React, { useState } from 'react'
import './about.css'
import AboutPageCard from '../../component/aboutPageCard/AboutPageCard'
import Skills from '../../assets/Skills'
import Educations from '../../assets/Education'
import Experiences from '../../assets/Experience'

const About = () => {

  const [tabs,setTabs]=useState({"skill":true,"experience":false,"education":false});

  return (
    <div id='about'>
     <div className='aboutContainer'>

      <div className='aboutImage'>
        <img src="https://docs.google.com/uc?id=1nBEIIFeKdwoAC4Z_x1UN4fK-nSqOgDcO" alt='Error in loading...' />
      </div>

      <div className='aboutMain'>

        <div className='aboutText'>
          <h1>About Me</h1>
          <p>
            My name is Amit Kumar Singh, and I belong to Bihar, India. I am currently pursuing a B.Tech. in electrical engineering at the National Institute of Technology, Patna. I enjoy coding. I love discovering new things, getting to know new people, and having new experiences. Each new issue that I encounter makes me excited. always eager to foster a happy atmosphere. I'm always interested in picking up new knowledge and abilities. flexible and prepared to work in a setting that promotes progress.
          </p>
        </div>

        <div className="aboutTabs">
          <p className={tabs.skill===true?"tab-links tab-link-active":"tab-links"} onClick={()=>{ setTabs({"skill":true,"experience":false,"education":false}) }}>Skills</p>
          <p className={tabs.experience===true?"tab-links tab-link-active":"tab-links"} onClick={()=>{ setTabs({"skill":false,"experience":true,"education":false}) }}>Experience</p>
          <p className={tabs.education===true?"tab-links tab-link-active":"tab-links"} onClick={()=>{ setTabs({"skill":false,"experience":false,"education":true}) }}>Education</p>
        </div>

        <div className={tabs.skill===true?"tab-contents tab-active":"tab-contents"}>
          {Skills.map((cur,ind)=>{
            return (<AboutPageCard key={ind} title={cur.title} contents={cur.contents} />);
          })}
        </div>

        <div className={tabs.experience===true?"tab-contents tab-active":"tab-contents"}>
          {Experiences.map((cur,ind)=>{
            return (<AboutPageCard key={ind} title={cur.title} contents={cur.contents} />);
          })}
        </div>

        <div className={tabs.education===true?"tab-contents tab-active":"tab-contents"}>
          {Educations.map((cur,ind)=>{
            return (<AboutPageCard key={ind} title={cur.title} contents={cur.contents} />);
          })}
        </div>

        <div className='aboutMyresume'>
          <a href='https://drive.google.com/file/d/1ZAT1CnK9_dZte-4C8xOF4RUWmNOwdYPe/view?usp=share_link'>My Resume</a>
        </div>

      </div>
     </div>
    </div>
  )
}

export default About;