import React from 'react'
import "./Flights.css";
import { airlineData } from '../Components/Card/AirData.js';
import Header from '../Components/Header/Header';
import {ProductCard1, ProductCard2} from '../Components/Card/ProductCard';
import AirLineInfo from '../Components/Card/AirLineInfo';
function Flights() {
  return (
    <>
    <Header/>
    <div className="card p-3 bg-white shadow-sm middle-text">
  <div className="d-flex align-items-center justify-content-center text-center mt-2">
    <p className="m-1">Home</p>
    <p className="m-1">Flights Booking</p>
    <p className="m-1">Go First AirLines</p>
  </div>
</div>

    <div id="main-Section">

    <div id='left-Section' className='p'>
    <ProductCard2
        image="https://i.pinimg.com/236x/a1/c9/17/a1c917c96c218a6c2a86c526b579518e.jpg"
        title="Special Offer!"
        discount="Flat 70% Off!"
        description="Get the best quality product at an amazing discounted price. Limited time offer!"
        buttonText="View Details"
      />

<ProductCard2
        image="https://images.unsplash.com/photo-1532882191016-9133c6d82083?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWlybGluZXxlbnwwfHwwfHx8MA%3D%3D"
        title="Special Offer!"
        discount="Flat 80% Off!"
        description="Get the best quality product at an amazing discounted price. Limited time offer!"
        buttonText="View Details"
      />

<ProductCard2
        image="https://images.unsplash.com/photo-1605216663789-a86dbd5e59a5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFpcmxpbmV8ZW58MHx8MHx8fDA%3D"
        title="Special Offer!"
        discount="Flat 20% Off!"
        description="Get the best quality product at an amazing discounted price. Limited time offer!"
        buttonText="View Details"
      />
     </div>
    <div id='right-Section'>
    <div className="card bg-white p-4">
  <h1>Go First Flights</h1>
  <p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit placeat
    necessitatibus saepe praesentium impedit. Aliquam molestias, impedit quod,
    corporis voluptatem minus dolorem debitis fuga perspiciatis harum dolore,
    quas commodi magni?
  </p>
</div>
   


     <div className='RouteDetails '>
      <h1>Go First Popular Domestic Routes</h1>
      <ul>
        <li>AirLine</li>
        <li>From</li>
        <li>To</li>
        <li>Cheapest</li>
      </ul>
     </div>
     <div className="container">
      <AirLineInfo
        image="https://via.placeholder.com/500" 
        airline="Go First" 
        route="BoM ----- Del" 
        price="40000"
      />
      
           {airlineData.map((airline, index) => (
            <div key={index}>
              <AirLineInfo
                image={airline.image}
                airline={airline.airline}
                route={airline.route}
                price={airline.price}
              />
            </div>
          ))}
    </div>
     </div>
    </div></>
    
  )
}

export default Flights
