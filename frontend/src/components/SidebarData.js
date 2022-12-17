import React from 'react';
//import * as FaIcons from "react-icons/fa";
//import * as AiIcons from "react-icons/ai";
//import * as MdIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs";
import * as IoIcons5 from "react-icons/io5";
import * as IoIcons from "react-icons/io";
import * as FiIcons from "react-icons/fi";

export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/',
        icon: <IoIcons5.IoGridOutline/>,
        cName: 'nav-text'
    },
    {
        title: 'Course',
        path: '/course',
        icon: <BsIcons.BsJournalBookmark/>,
        cName: 'nav-text'
    },
    {
        title: 'Settings',
        path: '/settings',
        icon: <FiIcons.FiSettings/>,
        cName: 'nav-text'
    },
    {
        title: 'Help Center',
        path: '/help_center',
        icon: <IoIcons.IoMdHelpCircleOutline/>,
        cName: 'nav-text-hc'
    }, 
    {
        title: 'Log Out',
        path: '/sign-in',
        icon: <IoIcons.IoMdLogOut/>,
        cName: 'nav-text-hc'
    }
    
]

    
