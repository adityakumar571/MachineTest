import React from "react";

export const ProductCard1 = () => {
  return (
    <div className="max-w-sm mx-auto rounded-2xl shadow-lg overflow-hidden bg-white border border-gray-200  card rounded-3 ">
      {/* Image Section */}
      <img
        src="https://via.placeholder.com/400x250"
        alt="Product"
        className="w-full h-56 object-cover"
      />
    
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">Special Offer!</h3>
        <p className="text-green-600 font-medium mt-2">Flat 20% Off!</p>
        <p className="text-gray-600 mt-2">
          Get the best quality product at an amazing discounted price. Limited time offer!
        </p>
        <button
          className="btn"
          style={{
            backgroundColor: "#FFA500", 
            color: "white",
            width: "100%",
            fontWeight: "500",
            padding: "10px",
            borderRadius: "5px",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#007bff")} // Blue on hover
          onMouseOut={(e) => (e.target.style.backgroundColor = "#FFA500")} // Revert back to orange
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export const  ProductCard2 = ({ image, title, discount, description, buttonText }) => {
  return (
    <div className="max-w-sm mx-auto rounded-2xl shadow-lg overflow-hidden bg-white border border-gray-200 card rounded-3 m-4">
      {/* Image Section */}
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover"
      />
    
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-green-600 font-medium mt-2">{discount}</p>
        <p className="text-gray-600 mt-2">
          {description}
        </p>
        <button
          className="btn"
          style={{
            backgroundColor: "#FFA500", 
            color: "white",
            width: "100%",
            fontWeight: "500",
            padding: "10px",
            borderRadius: "5px",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#007bff")} // Blue on hover
          onMouseOut={(e) => (e.target.style.backgroundColor = "#FFA500")} // Revert back to orange
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};
