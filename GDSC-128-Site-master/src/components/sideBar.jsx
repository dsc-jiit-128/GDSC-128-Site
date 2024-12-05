import {CloseIcon} from "@chakra-ui/icons"
import { NavLink } from "react-router-dom";
import '../css/navBar.css'

function SideBar(props) {
  const closeSidebar = () => {
      props.setActive(false);
  }

  return (
    <>
    {props.active ? 
      <div className="side-bar-menu">
        <div className="close-side-bar">
            <CloseIcon onClick={closeSidebar} boxSize={2}/>
        </div>
        <div className="sidebar-items">
          <div className="side-bar-navigation">
            <NavLink to="/events" onClick={closeSidebar}>
              <li>EVENTS</li>
            </NavLink>
            <NavLink to="/teams" onClick={closeSidebar}>
              <li>TEAMS</li>
            </NavLink>
            <NavLink to="/login" onClick={closeSidebar}>
              <li>LOGIN</li>
            </NavLink>
          </div>
        </div>
      </div>
    : null}
    </>
  );
}

export default SideBar;