import React, { useState, Fragment, useEffect } from 'react'
import axios from 'axios'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import '../style/searchBar.css'
function Searchbar(props) {

  const [cities, setCities] = useState([]);
  const [input, setInput] = useState("");
  const onSearch = (string, result) => {
    setInput(string);
    console.log("result")
    console.log(result);
  }
  useEffect(() => {
    if (input.length > 1) {
      axios
        .get(`https://geocoding-api.open-meteo.com/v1/search?name=${input}&count=5`)
        .then(response => {
          const data = response.data;
          let temp_array = [];
          for (let i = 0; data.results[i] != null; i++) {
            const city_name = data.results[i].name + ", " + (data.results[i].admin1 != null ? data.results[i].admin1 + ', ' : "") + data.results[i].country_code;
            console.log(city_name);
            const temp_city = {
              id: i,
              city: city_name
            }
            temp_array.push(temp_city);
          }
          console.log("temp");  
          console.log(temp_array);
          setCities(temp_array);
          console.log("cities");
          console.log(cities);
          temp_array = [];
        })

    }
  },[input])

  const formatResult = (city) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}> {city.city}</span>
      </>
    )
  }
  const onHover = () => {
    console.log("hover")
  }
  const onSelect = (city) => {
    console.log("select")
  }
  const onFocus = (city) => {
    console.log("focus")
  }
  return (
    <div className='searchBar'>
      <label htmlFor="searchBar" >Location</label> <br></br>
      <div> {props.location}</div> <br></br>
      <div style={{ height: "10%", width: "80%" }}>
        <ReactSearchAutocomplete
          items={cities}
          fuseOptions={{ keys: ["id", "city"] }}
          resultStringKeyName="city"
          onSearch={onSearch}
          onHover={onHover}
          onSelect={onSelect}
          onFocus={onFocus}
          formatResult={formatResult}
        />
        <div>
          <ul>
            {cities.map(city => (
              <li key={city.id}>{city.city}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )

}
export default Searchbar