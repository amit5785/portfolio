import React from 'react'
import './footer.css'
import Footersvg from '../../assets/footersvg'
import {FaLinkedinIn} from  "react-icons/fa";
import {SiLeetcode,SiHackerrank} from 'react-icons/si';
import {BsGithub} from 'react-icons/bs';
import {ImMail2} from 'react-icons/im';
import {FiPhoneCall} from 'react-icons/fi';
import { HashLink as Link } from 'react-router-hash-link';
import { useDataContext } from '../../context/datacotext';


const Footer = () => {
  const {resumeURL, footer} = useDataContext()
  return (
    <div id="footer">
      <div className='footerContainer'>
        <div className='footerlinkcontainer'>
          <div className='footerlinks'>
            <h3>External Links</h3>
            <p><ImMail2 className='icon' /> <span><a href={`tel:${footer.email}`}>{footer.email}</a></span></p>
            <p><FiPhoneCall className='icon' /> <span><a href={`tel:${footer.mobileNo}`}>{footer.mobileNo}</a></span></p>
            <p>
              <a href='https://www.linkedin.com/in/amit5785/' ><FaLinkedinIn className='icon'/></a> 
              <a href="https://github.com/amit5785" ><BsGithub className='icon' /></a>
              <a href='https://leetcode.com/amit5785/' ><SiLeetcode className='icon' /></a> 
              <a href='https://www.hackerrank.com/amit5785' ><SiHackerrank className='icon' /></a>
            </p>
            <div className='myresume'>
             <a href={resumeURL}>My Resume</a>
            </div>
          </div>
          <div className='footersvg'>
            <Footersvg />
          </div>
        </div>
        <div className='copyrightsection'>
          <p>Copyright © <span><Link to='#'>Amit</Link></span>. Made By Amit Kumar Singh.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;