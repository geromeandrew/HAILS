import React, {useState} from 'react'
//import * as FaIcons from "react-icons/fa";
//import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import { SidebarData} from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons'
import logo from './logo.png';

function Navbar() {
    const [sidebar] = useState(true)

    //const showSidebar = () => setSidebar(!sidebar)

  return (
    <div>
    <IconContext.Provider value={{color: '#000000'}}>
        <div className="navbar">
            
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items'>
                <li className='navbar-toggle'>
                    <img className='weblogo' src={logo} alt="logo"/><h1 className='webname'>HAILS</h1>
                </li>
                {SidebarData.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    </IconContext.Provider>
    </div>
  )
}

export default Navbar