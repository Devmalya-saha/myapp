import React, { useState, useEffect } from 'react';
import Alert from './Alert';
import { Link } from 'react-router-dom';

export default function Nav(props) {
  const [mode,setmode]=useState('light');
  const[alert,setAlert]=useState(null);
  const setAlartmsg=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout (()=>
    {
      setAlert(null);

    },5000);
  };
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    if(!darkMode){
      setDarkMode(true);
    setAlartmsg("Dark mode has been enabled","success");
    }
    else
    {
      setDarkMode(false);
    setAlartmsg("Light mode has been enabled","Oh!no");
    }
  };

  useEffect(() => {
    // Update body background and text color based on darkMode state
    document.body.style.backgroundColor = darkMode ? '#121212' : '#ffffff';
    document.body.style.color = darkMode ? '#ffffff' : '#000000';
  }, [darkMode]);

  // Inline styles for the navbar
  const navbarStyles = {
    backgroundColor: darkMode ? '#343a40' : '#f8f9fa',
    transition: 'background-color 0.3s',
  };
  const linkStyles = {
    color: darkMode ? '#ffffff' : '#000000',
    transition: 'color 0.3s',
  };

  const buttonStyles = {
    color: darkMode ? '#ffffff' : '#000000',
    borderColor: darkMode ? '#6c757d' : '#28a745',
    backgroundColor: darkMode ? '#6c757d' : 'transparent',
    transition: 'color 0.3s, border-color 0.3s, background-color 0.3s',
  };

  const inputStyles = {
    backgroundColor: darkMode ? '#6c757d' : '#ffffff',
    color: darkMode ? '#ffffff' : '#000000',
    transition: 'background-color 0.3s, color 0.3s',
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={navbarStyles}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/" style={linkStyles}>{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/" style={linkStyles}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" style={linkStyles}>About</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={inputStyles} />
              <button className="btn btn-outline-success" type="submit" style={buttonStyles}>Search</button>
            </form>
            <button onClick={toggleDarkMode} className="btn btn-secondary ms-3">
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
           
            
          </div>
        </div>
      </nav>
      <div className="container my-2">
        <Alert alert={alert}/>
      </div>
      
    </div>

  );
}
