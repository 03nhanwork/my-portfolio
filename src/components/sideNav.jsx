import { NavLink } from 'react-router-dom';
import './sideNav.css'

function SideNav() {
  return (
    <nav className="top-nav">
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Experience"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Experience
          </NavLink>
        </li>
      </ul>
    </nav>
  )
};

export default SideNav