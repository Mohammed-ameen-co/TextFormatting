// import React, { useState } from "react";
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export default function NavBar(props) {
  // 
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li> */}
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
          
          <div className={`form-check form-check-inline text-${props.mode === `light` ? `dark` : `light`} `}>
              <input className="form-check-input" onClick={props.toggleMode.darkBlue} type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
              <label className="form-check-label" htmlFor="inlineRadio1">Dark blue</label>
          </div>
          <div className={`form-check form-check-inline text-${props.mode === `light` ? `dark` : `light`} `}>
              <input className="form-check-input" onClick={props.toggleMode.darkRed} type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
              <label className="form-check-label" htmlFor="inlineRadio2">Dark red</label>
          </div>
          <div className={`form-check form-check-inline text-${props.mode === `light` ? `dark` : `light`} `}>
              <input className="form-check-input" onClick={props.toggleMode.darkGreen} type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
              <label className="form-check-label" htmlFor="inlineRadio3">Dark green</label>
          </div>
          <div className={`form-check form-check-inline text-${props.mode === `light` ? `dark` : `light`} `}>
              <input className="form-check-input" onClick={props.toggleMode.whiteMode} type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4" />
              <label className="form-check-label" htmlFor="inlineRadio4">White</label>
          </div>
          
        </div>
      </div>
    </nav>
  );
}

NavBar.propTypes = { 
    title: PropTypes.string.isRequired, 
    aboutText: PropTypes.string.isRequired,
    home: PropTypes.string.isRequired 
};