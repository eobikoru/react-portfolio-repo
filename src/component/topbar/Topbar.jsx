import "./topbar.scss"
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import { useState } from "react";
function Topbar({menuOpen , setMenuOpen}) {
 
  return (
    <div className={"topbar "  + (menuOpen && "active")} >
        <div className="wrapper">
            <div className="left">
                <a href="#intro" className="logo"> .Emekadaniel</a>
                <div className="itemContainer">
                    <PersonIcon className="icon" />
                    <span>08988367666</span>
                </div>
                <div className="itemContainer" >
                    <MailIcon  className="icon"/>
                    <span>emekadanioel916@gmail </span>
                </div>
            </div>
            <div className="right">
              <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
                  <span className="line1"></span>
                  <span className="line2"></span>
                  <span className="line3"></span>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Topbar