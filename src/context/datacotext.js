import { createContext, useContext, useEffect, useState} from "react";
import { database } from "../firebase";
import {ref, onValue } from "firebase/database";

export const dataContext = createContext({
  aboutData : {},
  educations : {},
  experiences : {},
  homeData : {},
  projects : {},
  skills : {},
  resumeURL: "https://drive.google.com/file/d/1ZAT1CnK9_dZte-4C8xOF4RUWmNOwdYPe/view?usp=share_link",
  footer : {}
});

export function DataContextProvider({ children }) {
  const [aboutData, setAboutData] = useState({});
  const [educations, setEducations] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [homeData, setHomeData] = useState({});
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [resumeURL, setResumeURL] = useState("https://drive.google.com/file/d/1ZAT1CnK9_dZte-4C8xOF4RUWmNOwdYPe/view?usp=share_link");
  const [footer, setFooter] = useState([]);
  // const aboutData = {};
  // const educations = {};
  // const experiences = {};
  // const homeData = {};
  // const projects = {};
  // const skills = {};

  useEffect( ()=>{
    const fetchData = (node, setterFun)=>{
      const nodeRef = ref(database, `${node}`);
      onValue(nodeRef, (snapshot) => {
        const data = snapshot.val();
        if(data){
          setterFun(data)
        }
        // console.log(data);
    })
  };

  let stateList = ['aboutData' , 'educations', 'experiences', 'homeData', 'projects', 'skills', 'resumeURL', 'footer'];
  let setterList = [setAboutData, setEducations, setExperiences, setHomeData, setProjects, setSkills, setResumeURL, setFooter]
  for (let i = 0; i < stateList.length; i++) {
    fetchData(stateList[i], setterList[i]);
  }

  }, [setAboutData, setEducations, setExperiences, setHomeData, setProjects, setSkills, setResumeURL, setFooter])

  return (
    <dataContext.Provider value={ {aboutData, educations, experiences, homeData, projects, skills, resumeURL, footer} }>
      {children}
    </dataContext.Provider>
  );
}

export function useDataContext() {
  const {aboutData, educations, experiences, homeData, projects, skills, resumeURL, footer} = useContext(dataContext);

  return {aboutData, educations, experiences, homeData, projects, skills, resumeURL, footer};
}
