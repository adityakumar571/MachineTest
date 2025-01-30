import React from 'react';
import { Link } from 'react-router-dom';
import FlightImage from '../../images/flight.f515b25a.svg';
import BusesImage from '../../images/GroupBus.svg';
import HotelImage from '../../images/hotel.4b63222d.svg';
import TraintImage from '../../images/train.d3e3d1e5.svg';
import userIcon from '../../images/user.png'
import './Nav.css';

function Navbar() {
  // Fix the imageStyle declaration using const
  const imageStyle = {
    width: '30px', 
    height: '30px', 
    objectFit: 'cover', 
    borderRadius: '50%'
  };

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light " style={{ backgroundColor: 'White'}}>
      <div className="container-fluid">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
          <li className="nav-item">
            <Link className="nav-link" to="/flights">
              <img style={imageStyle} src={FlightImage} alt="Flights" />
              Flights
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/hotels">
              <img style={imageStyle} src={HotelImage} alt="Hotels" />
              Hotels
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/trains">
              <img style={imageStyle} src={TraintImage} alt="Trains" />
              Trains
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/buses">
              <img style={imageStyle} src={BusesImage} alt="Buses" />
              Buses
            </Link>
          </li>
        </ul>

        <div className='authentication d-flex align-items-center'>
          <img src={userIcon} alt="user icon" style={imageStyle} />
          <p className=" mb-0" style={{ cursor: 'pointer' }}>LOGIN/</p>
          <p className="mb-0" style={{ cursor: 'pointer' }}>SIGNUP</p>
        </div>
      </div>
    </nav>
    </>



  );
}

export default Navbar;
