import './navbar.css'
import { NavLink } from 'react-router-dom';
import logo from '../../assets/imgs/fc.png'
import menu from '../../assets/imgs/menu.png'
export const NavBar = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <div>
          <NavLink className="navbar-brand" to='/home'>
            <img className='logo' src={logo} alt="Tu Logo" />
          </NavLink>
          <span className="logo-text">Facundo Caamaño</span>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
         <img className='menuLogo' src={menu} alt="menu"/>
        </button>
        <div className="offcanvas offcanvas-end" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <NavLink className="nav-link active" aria-current="page" to="/home">
                <li className="nav-item">
                  Home
                </li>
              </NavLink>
              <NavLink to="/contact" className="nav-link" >
                <li className="nav-item">
                  Contact
                </li>
              </NavLink>
              <NavLink to='/projects' className="nav-link" >
                <li className="nav-item">
                  Project
                </li>
              </NavLink>

            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}