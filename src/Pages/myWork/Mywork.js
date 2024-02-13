import React from 'react';
import './mywork.css';
import Workcard from '../../component/workcard/Workcard';
// import Projects from '../../assets/projects';
import { useDataContext } from '../../context/datacotext';

const Mywork = () => {
  const { projects }  = useDataContext()
  return (
    <div id='mywork'>
      <div className='myworkMain'>
        <h1>My Works</h1>
        <div className='myworkContainer'>
          {projects.map((cur,ind)=>{
            return (<Workcard key={ind} title={cur.title} applicationType={cur.applicationType} description={cur.description} />);
          })}
        </div>
      </div>
    </div>
  )
}

export default Mywork;