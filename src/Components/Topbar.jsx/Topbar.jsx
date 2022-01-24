
import React from 'react'
import {Code, Mail} from '@material-ui/icons';
import './Topbar.scss'
//import { CodeIcon, Mail } from '@material-ui/core'
export default function Topbar({menuOpen, setMenuOpen}) {
    
    return (
        <div className={"topbar " + (menuOpen && "active")} id="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo" >Kelvin Moses</a>
                    <div className="itemContainer">
                        <Code className="icon"/>  
                        <spa>+234 806 0684 357</spa>
                        <div className="itemContainer">
                            <Mail className="icon" />
                            <spa>+234 806 0684 357</spa>
                        </div>
                    </div>
                </div>                
                <div className="right">                    
                    <div onClick={()=>setMenuOpen(!menuOpen)} className="hamburger">
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>

                    </div>
                </div>
                
               
            </div>
        </div>
    )
}
