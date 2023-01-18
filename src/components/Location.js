import { React, useState, useEffect } from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import axios from 'axios'
import '../style/Location.css'
function Location() {
  const [cities, setCities] = useState([]);
  const handleOnSearch = async (string, results) => {
    try {
      const response = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${string}&count=5`);
        const temp_cities = response.data.results.map((city) =>( {
          id: city.id,
          name: `${city.name}${typeof city.admin1 !== "undefined" ? ', ' + city.admin1 : ""}${typeof city.country !== "undefined" ? ', ' + city.country : ""}`,
          long: city.longitude,
          lad: city.laditude 
        }))
        setCities(temp_cities);
      }
    catch (err) {
      console.log('ERROR', err.message)
    }
  }
  const formatResult = (item) => {
      return (
        <>
          <span style={{ color: "black" }}> {item.name}</span>
        </>
      )
    }

  const handleOnSelect = (item) => {
  }
  return (
    <div className='Location'>
      <ReactSearchAutocomplete
        items={cities}
        onSearch={handleOnSearch}
        formatResult={formatResult}
        onSelect={handleOnSelect}
      />
    </div>
  )
}

export default Location