import React from 'react'
import PropTypes from 'prop-types'
//import { Link } from 'react-router-dom';

export default function Navbar(props){
    return(
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
        <a className="navbar-brand" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        {/* <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link> */}
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        {/* <Link className="nav-link" to="/about">{props.aboutText}</Link> */}
        <a className="nav-link" href="#">{props.aboutText}</a>
      </li>
    </ul>
    {/*<form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
    </form> */}
    <div className={`custom-control custom-switch text-${props.mode==='light'?'dark':'light'}`}>
      <input type="checkbox" className="custom-control-input" onClick={props.toggleMode} id="customSwitch1"></input>
      <label className="custom-control-label" htmlFor="customSwitch1">Enable Dark Mode</label>
    </div>
  </div>
</nav>
    );
}

Navbar.protoTypes = {
    title : PropTypes.string.isRequired,
    aboutText : PropTypes.string
}

Navbar.defaultProps = {
    title : "Title to be",
    aboutText : "About to be"
}
