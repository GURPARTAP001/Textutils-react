import React from 'react'
import PropTypes from 'prop-types'//we are importing this to check that if we have selected the correct prop type

//here we are passing the props ,they are like the arguments 
export default function Navbar(props) {
  return (

    <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.tittle}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">about</a>
            </li>
          </ul>
          <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"}`}>
            <input className="form-check-input" type="checkbox" onClick={props.toggle} role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`Enable ${props.mode==="light"?"DARK":"LIGHT"}MODE`}</label>
          </div>


        </div>
      </div>
    </nav>
  )
}
// we can also assign the data type to the props
Navbar.propTypes =
{
  tittle: PropTypes.string.isRequired//this req ensure that we have passed some props 
}

// Specifies the default values for props:
Navbar.defaultProps = {
  tittle: 'set titte'
};
