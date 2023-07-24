import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
    // const setMode=(color) => {

    //     // props.enableMode('black')
    //     console.log(color);
    //     // if(props.mode !== 'light'){
    //     //     props.enableMode('light');
    //     // }else if(color === 'blue'){
    //     //     props.enableMode('blue');
    //     // }else{
    //     //     props.enableMode('black');
    //     // }
    // }
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-dark bg-secondary'>
        <div className="container-fluid">
          <a className="navbar-brand" href="">
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent" >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="">
                  Home
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link"  href="">
                  {props.about}
                </a>
              </li> */}
            </ul>
            <div className="d-flex">
              <div className="bg-primary rounded mx-2" onClick={()=>{props.enableMode('primary')}} style={{width:'30px', height: '30px'}}></div>
              <div className="bg-success rounded mx-2" onClick={()=>{props.enableMode('success')}} style={{width:'30px', height: '30px'}}></div>
              <div className="bg-danger rounded mx-2" onClick={()=>{props.enableMode('danger')}} style={{width:'30px', height: '30px'}}></div>
              <div className="bg-warning rounded mx-2" onClick={()=>{props.enableMode('warning')}} style={{width:'30px', height: '30px'}}></div>
              <div className="bg-info rounded mx-2" onClick={()=>{props.enableMode('info')}} style={{width:'30px', height: '30px'}}></div>
              <div className="bg-dark rounded mx-2" onClick={()=>{props.enableMode('dark')}} style={{width:'30px', height: '30px'}}></div>
              <div className="bg-light rounded mx-2" onClick={()=>{props.enableMode('light')}} style={{width:'30px', height: '30px'}}></div>
            </div>
            {/* <div className={`form-check form-switch text-${props.mode === 'light'? 'blue': 'light'}`}>
                <input className="form-check-input" type="checkbox" role="switch" onClick={props.enableMode} id="flexSwitchCheckDefault1" />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault1">{props.mode === 'light'? 'Enable Blue Mode': 'Enable Light Mode'}</label>
            </div>
            <div className={`form-check form-switch text-${props.mode === 'light'? 'dark': 'light'}`}>
                <input className="form-check-input" type="checkbox" role="switch" onClick={props.enableMode} id="flexSwitchCheckDefault" />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'light'? 'Enable Dark Mode': 'Enable Light Mode'}</label>
            </div> */}
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.protoTypes = { title: PropTypes.string, about: PropTypes.string };

Navbar.defaultProps = { title: "Cutom Title", about: "Cutom About" };
