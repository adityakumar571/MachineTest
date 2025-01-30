import React from 'react'
import './AirLineInfo.css'
function AirLineInfo({ image, airline, route, price }) {
  return (
    <div className="card my-2 d-flex" style={{ width: "100%" }}>
  <div className="row no-gutters w-100">
    <div className="d-flex w-100 align-items-center">
      {/* Image and Airline Name */}
      <div className="d-flex align-items-center">
        <img src={image} className="card-img" alt="Airline Image" style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "50%" }} />
        <h5 className="card-title ms-2">{airline}</h5>
      </div>

      {/* Route, Price, and Button */}
      <div className="d-flex w-100 justify-content-between align-items-center ms-4">
        <p className="card-text">{route}</p>
        <p className="card-text">₹{price}</p>
        <a href="#" className="btn btn-primary">View More</a>
      </div>
    </div>
  </div>
</div>

  )
}

export default AirLineInfo
