import {React, useState} from 'react'
import BrandLogo from '../../assets/BrandLogo';
import './Navbar.css'
import {HashLink as Link} from 'react-router-hash-link';



const Navbar= ()=> 
{
    const [open,setOpen] = useState(false);

    const toggleBurger = ()=>{
        setOpen(!open); 
    }

    return (
        <nav className="navigation">

                <div className="logo" >
                    <Link style={{textDecoration: 'none', color: 'white'}} to='#' smooth>
                        <BrandLogo />
                    </Link>
                </div>

                <ul className={open?'nav-links nav-active ':'nav-links'}>
                    <li  style={open?{animation:'navLinkFade 0.3s ease forwards 0.4s '}:{}}>
                        <Link style={{textDecoration: 'none', color: 'white'}} to='#' smooth >Home</Link>
                        {/* Home */}
                    </li>
                    <li style={open?{animation:'navLinkFade 0.3s ease forwards 0.4s '}:{}}>
                        <Link style={{textDecoration: 'none', color: 'white'}} to='#about' smooth>About</Link>
                        {/* About */}
                    </li>
                    <li style={open?{animation:'navLinkFade 0.3s ease forwards 0.4s '}:{}}>
                        <Link style={{textDecoration: 'none', color: 'white'}} to='#mywork' smooth>Myworks</Link>
                        {/* Myworks */}
                    </li>
                    <li style={open?{animation:'navLinkFade 0.3s ease forwards 0.4s '}:{}}>
                    <Link style={{textDecoration: 'none', color: 'white'}} to='#myContact' smooth>Contact</Link>
                        {/* Contact */}
                    </li>
                </ul> 

                <div className={open?'burger toggle':'burger'} onClick={toggleBurger} >
                    <div className="line1" />
                    <div className="line2" />
                    <div className="line3" />
                </div>   
        </nav>
    )
}

export default Navbar;

