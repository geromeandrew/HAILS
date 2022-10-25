import React from 'react';
import * as FaIcons from "react-icons/fa";
//import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/',
        icon: <MdIcons.MdDashboard/>,
        cName: 'nav-text'
    },
    {
        title: 'Course',
        path: '/course',
        icon: <BsIcons.BsFillBookmarkFill/>,
        cName: 'nav-text'
    },
    {
        title: 'Statistics',
        path: '/statistics',
        icon: <FaIcons.FaChartPie/>,
        cName: 'nav-text'
    },
    {
        title: 'Help Center',
        path: '/help_center',
        icon: <IoIcons.IoMdHelpCircleOutline/>,
        cName: 'nav-text-hc'
    }
]