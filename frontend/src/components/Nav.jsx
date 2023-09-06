import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../contexts/current-user-context";
import logo from "./logo.png"
export default function SiteHeadingAndNav() {
  const { currentUser } = useContext(CurrentUserContext);

  return <header id="transnav">
    <img id="nav-logo" src={logo}></img>

    <nav>
      <ul>
        <li><NavLink className="nav-link" NavLink to='/'>Courses</NavLink></li>
        <li><NavLink className="nav-link"   to='/users' end={true}>Forum [ Pending ]</NavLink></li>
        {
          currentUser
            ? <li><NavLink className="nav-link"  to={`/users/${currentUser.id}`}>{currentUser.username}</NavLink></li>
            : <>
              <li><NavLink className="nav-link"  to='/login'>Login</NavLink></li>
              <li ><NavLink className="nav-link"  to='/sign-up'>Sign Up</NavLink></li>
            </>
        }
      </ul>
    </nav>
  </header>;
}
