import { faDiceFive, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import "./NavbarMenu.css";

export const NavbarMenu = () => {
  return (
    <div className="navbar-menu">
      <div className="navbar-menu-container">
        <NavLink to={""} className="navbar-menu-item" end>
          <div className="navbar-menu-icon">
            <FontAwesomeIcon icon={faHouse} />
          </div>
          <div className="navbar-menu-text">Home</div>
        </NavLink>
        <NavLink to={"create"} className="navbar-menu-item" end>
          <div className="navbar-menu-icon">
            <FontAwesomeIcon icon={faDiceFive} />
          </div>
          <div className="navbar-menu-text">Create Game</div>
        </NavLink>
      </div>
    </div>
  );
};
