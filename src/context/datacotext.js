import { createContext, useContext, useEffect, useState} from "react";
import { database} from "../firebase";
// import { storage} from "../firebase";
import {ref, onValue } from "firebase/database";
// import { ref as storageRef, getDownloadURL } from "firebase/storage";
// import axios from 'axios'
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

        // if(node === 'homeData')
        // {
        //   console.log(data);
        //   fetchContent(data, setterFun)
        // }
    })
  };

  // const fetchContent = (nodeVal, setterFun)=>{
  //   // const url = nodeVal.svgImageURL
  //   // fetch(url).then((response)=>{
  //   //   return response.text()
  //   // }).then((textContent)=>{
  //   //   setterFun({"svgContent" : textContent, ...nodeVal})
  //   // }).catch((error)=>{
  //   //   console.error("Error fetching SVG content:", error)
  //   // })

  //   // const url = nodeVal.svgImageURL;
  
  //   // axios.get(url)
  //   // .then((response) => {
  //   //   return response.data;
  //   // })
  //   // .then((textContent) => {
  //   //   setterFun({ "svgContent": textContent, ...nodeVal });
  //   // })
  //   // .catch((error) => {
  //   //   console.error("Error fetching SVG content:", error);
  //   // });
  // };

  let stateList = ['aboutData' , 'educations', 'experiences', 'homeData', 'projects', 'skills', 'resumeURL', 'footer'];
  let setterList = [setAboutData, setEducations, setExperiences, setHomeData, setProjects, setSkills, setResumeURL, setFooter]
  for (let i = 0; i < stateList.length; i++) {
    fetchData(stateList[i], setterList[i]);
  }
  // console.log("After all states are updated :", homeData)
  // fetchContent('homeData', setHomeData);

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
