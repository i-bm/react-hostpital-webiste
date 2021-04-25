import React from 'react';
import TopInfo from '../components/TopInfo';
import {Link} from 'react-router-dom';
import Logo from '../assets/img/logo.png';

function Navigation (){
  return(
<div>
<TopInfo />

<nav className="top-nav navbar navbar-expand-lg navbar-light d-none d-md-block d-lg-block">
    <div className="container">
<ul className="navbar-nav mr-auto">
      <li className="nav-item">
      <i className="fal fa-map-marker-alt pr-1"></i> C123 Paradise Street, Asylum Down, Accra, GH
      </li>
      <li className="nav-item">
      <i className="fal fa-clock pr-1 pl-3"></i>Mon - Sat 8.00 - 18.00. Sunday CLOSED
      </li>
    </ul>
    {/* <ul className="navbar-nav">
    <li className="nav-item"><Link to="#"> <i class="fab fa-facebook-f"></i></Link></li>
    <li className="nav-item"><Link to="#"> <i class="fab fa-twitter"></i></Link></li>
    <li className="nav-item"><Link to="#"> <i class="fab fa-linkedin-in"></i></Link></li>
    <li className="nav-item"><Link to="/appointment" className="btn btn-success">Get An Appointment</Link></li>
    </ul> */}
    <Link to="/appointment" className="btn btn-success">Get An Appointment</Link>
    </div>
</nav>



<nav className="main-nav navbar navbar-expand-lg navbar-light d-none d-md-block d-lg-block" style={{backgroundColor: "transparent"}}>
    <div className="container">
  <Link to="/" className="navbar-brand"><img src={Logo} width="200" alt="Logo" /></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse1 navbar-collapse1" >
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link to="/" className="nav-link">Home</Link>
      </li>
      <li className="nav-item active">
        <Link to="/doctors" className="nav-link">Doctors</Link>
      </li>
      
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Conditions & Services
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link to="/" className="dropdown-item" href="#">anaesthesia</Link>
          <Link to="/" className="dropdown-item" href="#">cardiology</Link>
          <Link to="/" className="dropdown-item" href="#">dentistry</Link>
          <Link to="/" className="dropdown-item" href="#">dermatology</Link>
          <Link to="/" className="dropdown-item" href="#">dietetics</Link>
          <Link to="/" className="dropdown-item" href="#">ear, nose, and throat</Link>
          <Link to="/" className="dropdown-item" href="#">endoscopy</Link>
          <Link to="/" className="dropdown-item" href="#">family practice clinic</Link>
          <Link to="/" className="dropdown-item" href="#">haematology / sickle cell</Link>
          <Link to="/" className="dropdown-item" href="#">internal medicine</Link>
          <Link to="/" className="dropdown-item" href="#">neurosurgery</Link>
          <Link to="/" className="dropdown-item" href="#">obstetrics / gynaecology</Link>
          <Link to="/" className="dropdown-item" href="#">ophthalmology</Link>
          <Link to="/" className="dropdown-item" href="#">orthopaedics</Link>
          <Link to="/" className="dropdown-item" href="#">paediatrics</Link>
          <Link to="/" className="dropdown-item" href="#">physiotherapy</Link>
          <Link to="/" className="dropdown-item" href="#">plastic surgery</Link>
          <Link to="/" className="dropdown-item" href="#">surgery (general)</Link>
          <Link to="/" className="dropdown-item" href="#">urology</Link>
          </div>
      </li>
      <li className="nav-item">
        <Link to="/about-us" className="nav-link">About Us</Link>
      </li>
      <li className="nav-item">
        <Link to="/contact-us" className="nav-link">Contact Us</Link>
      </li>
    </ul>
  </div>
  </div>
</nav>
</div>
  );
  }

export default Navigation;

