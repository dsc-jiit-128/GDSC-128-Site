import { HamburgerIcon } from "@chakra-ui/icons"
import SideBar from "./sideBar";
import { useState } from "react";
import '../css/navBar.css'

function ResponsiveNavbar() {

  const [active , setActive] = useState(false);

  return (
    <>
      <nav className="navbar reponsive-navbar">
        {!active ? 
            <div className="side-menu" onClick={e => setActive(true)}>
                <HamburgerIcon color="white"/>
            </div>
        : null}
        
      </nav>
      <SideBar 
        active={active}
        setActive={setActive}
      />
    </>
  );
}

export default ResponsiveNavbar;