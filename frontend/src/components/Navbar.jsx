import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='navbar-section'>
      <nav className="navbar navbar-expand-lg bg-body-secondary p-3">
        <div className="container-fluid">
         
       
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-center text-dark" id="navbarSupportedContent">
            <ul className="navbar-nav ms-lg-3">
              <li className="nav-item text-dark">
                <Link to='/' className="nav-link active" >Home</Link>
              </li>
              <li className="nav-item ms-lg-3">
                <Link to='/about' className="nav-link text-dark" >About</Link>
              </li>
              <li className="nav-item ms-lg-3">
                <Link to='/contact' className="nav-link text-dark" href="#">Contact</Link>
              </li>
            </ul>
            <Link to ='/'><button className="btn btn-primary text-light rounded-5 ps-5 pe-5  ms-lg-5">Logout</button></Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
