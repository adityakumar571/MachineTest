import React,{useState} from "react";
import "./Header.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function Header()  {
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  const fetchCities = async (query) => {
    const apiEndpoint = `https://api.example.com/cities?query=${query}`;
    try {
      const response = await fetch(apiEndpoint);
      const data = await response.json();
      setSuggestions(data.cities || []);
    } catch (error) {
      console.error("Error fetching city data:", error);
    }
  };

  const handleCityChange = (e, setCity) => {
    const query = e.target.value;
    setCity(query);
    if (query.length > 2) {
      fetchCities(query); 
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (city, setCity) => {
    setCity(city);
    setSuggestions([]);
  };

  return (
    <div id="header"className="card">
      <div className="trip">
        <label>
          <input type="radio" name="tripType" value="oneWay" /> One Way
        </label>
        <label>
          <input type="radio" name="tripType" value="roundTrip"  className="for-control"/> Round Trip
        </label>
      </div>

      <div className="userInfo">
  <div className="mb-3">
    <label htmlFor="fromInput">From</label>
    <br />
    <input
      type="text"
      id="fromInput"
      className="form-control"
      value={fromCity}
      onChange={(e) => handleCityChange(e, setFromCity)}
      placeholder="Enter origin"
    />
    {fromCity && suggestions.length > 0 && (
      <ul className="suggestions">
        {suggestions.map((city, index) => (
          <li
            key={index}
            onClick={() => handleSuggestionClick(city, setFromCity)}
          >
            {city}
          </li>
        ))}
      </ul>
    )}
  </div>

  <div id="arrow" className="my-3 "><p className="opposite-arrow"></p></div>

  <div className="mb-3">
    <label htmlFor="toInput">To</label>
    <br />
    <input
      type="text"
      id="toInput"
      className="form-control"
      value={toCity}
      onChange={(e) => handleCityChange(e, setToCity)}
      placeholder="Enter destination"
    />
    {toCity && suggestions.length > 0 && (
      <ul className="suggestions">
        {suggestions.map((city, index) => (
          <li
            key={index}
            onClick={() => handleSuggestionClick(city, setToCity)}
          >
            {city}
          </li>
        ))}
      </ul>
    )}
  </div>

  <div className="mb-3">
    <label htmlFor="departureDate">DEPARTURE DATE</label>
    <br />
    <DatePicker
      selected={departureDate}
      onChange={(date) => setDepartureDate(date)}
      placeholderText="Select departure date"
      className="form-control"
      dateFormat="yyyy/MM/dd"
    />
  </div>

  <div className="mb-3">
    <label htmlFor="returnDate">RETURN DATE</label>
    <br />
    <DatePicker
      selected={returnDate}
      onChange={(date) => setReturnDate(date)}
      placeholderText="Select return date"
      className="form-control"
      dateFormat="yyyy/MM/dd"
    />
  </div>

  <div className="mb-3">
    <label htmlFor="passengerClass">PASSENGER & CLASS</label>
    <br />
    <input
      type="text"
      id="passengerClass"
      placeholder="Enter passenger count and class"
      className="form-control"
    />
  </div>

  <button className="btn btn-primary m-4">UPDATE SEARCH</button>
</div>

  <div className="trip"> 
  <p>FARE TYPE</p>
      <fieldset className=" fareType">
        <br />
        <label>
          <input type="checkbox" value="student" /> Student
        </label>
        <label>
          <input type="checkbox" value="seniorCitizen" /> Senior Citizen
        </label>
        <label>
          <input type="checkbox" value="armedForces" /> Armed Forces
        </label>
        <label>
          <input type="checkbox" value="doctorsAndNurses" /> Doctors & Nurses
        </label>
      </fieldset>
    </div>
    </div>
     
  );
};

export default Header;
