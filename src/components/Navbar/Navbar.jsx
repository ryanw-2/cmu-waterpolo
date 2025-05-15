import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu.png'
const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);

  const [mobMenu, setMobMenu] = useState(false);
  const toggleMenu = () => {
    mobMenu ? setMobMenu(false) : setMobMenu(true);
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
        <img src={logo} alt="logo" className='logo' />
        <ul className={mobMenu ? '':'hide-mobile-menu'}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>HOME</Link></li>
            <li><Link to='leadership' smooth={true} offset={-200} duration={500}>LEADERSHIP</Link></li>
            <li><Link to='schedule' smooth={true} offset={-200} duration={500}>SCHEDULE</Link></li>
            <li><Link to='contact' smooth={true} offset={-175} duration={500}>CONTACT</Link></li>
        </ul>
        <img src={menu_icon} alt="menu" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar