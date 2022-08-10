import React from 'react'
import {NavLink} from 'react-router-dom';
// import PropTypes from 'prop-types'

export default function Navbar(probs) {
    return ( 
      <nav className={`navbar navbar-expand-lg navbar-${probs.mode} bg-${probs.mode}`}>
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/" activeClassName='manu_active '>{probs.title}</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink exact className="nav-link active" aria-current="page" to="/" activeClassName='manu_active'>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact className="nav-link active" to="/about" activeClassName='manu_active ' >About</NavLink>
            </li>
          </ul>
          <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={probs.toggleMode}/>
  <label className={`form-check-label text-${probs.mode==='dark' ? 'light':'dark'}`}  htmlFor="flexSwitchCheckDefault">Enable Darkmode</label>
</div>
        </div>
      </div>
    </nav>
    )
}

// Navbar.PropTypes = {
//   title : PropTypes.string
// }

Navbar.defaultProps= {
  title : 'set a title'
};