import { React, useState, useEffect } from 'react'
import { Autocomplete, TextField } from '@mui/material'
import data from '../asset/countries+states+cities.json'
import axios from 'axios'
import '../style/Location.css'
function Location(props) {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState(null);
  const [icountry, setiCountry] = useState('')
  const [states, setStates] = useState([]);
  const [state, setState] = useState(null);
  const [istate, setiState] = useState('');
  const [isStateDisable, setStateDisable] = useState(true);
  const [isCityDisable, setCityDisable] = useState(true);
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState(null);
  const [icity, setiCity] = useState('')
  const [isLocationChanged, setLocationChanged] = useState(false);
  useEffect(() => {
    setCountries(data.map((data) => ({
      label: data.name,
      id: data.id
    })))
  }, [])
  const handleCountryChange = (event, newValue) => {
    if (newValue !== null) {
      setCountry(newValue.label)
      const states_arr = data.find(country => country.name === newValue.label)
      if (states_arr.states.length > 0) {
        setStates(states_arr.states.map((state) =>
        ({
          label: state.name,
          id: state.id
        })
        ))
        setStateDisable(false)
      }

      else {
        handleSetLocation(states_arr.name, states_arr.longitude, states_arr.latitude)
      }
    }
  }
  const handleStateChange = (event, newValue) => {
    if (newValue !== null) {
      setState(newValue.label)

      const cities_arr = data.find(countries => countries.name === country).states.find(state => state.name === newValue.label);
      if (cities_arr.cities.length > 0) {
        setCities(cities_arr.cities.map((city) =>
        ({
          label: city.name,
          id: city.id
        })
        ))
        setCityDisable(false)
      }
      else {
        handleSetLocation(cities_arr.name, cities_arr.longitude, cities_arr.latitude)
      }
    }
  }
  const handleCityChange = (event, newValue) => {
    if (newValue !== null) {
      setCity(newValue.label)
      const city = data.find(countries => countries.name === country).states.find(states => states.name === state).cities.find(city => city.name === newValue.label)
      handleSetLocation(city.name, city.longitude, city.latitude)
    }
  }
  const handleSetLocation = (name, longitude, latitude) => {
    props.setLocation({
      name: name,
      latitude: latitude,
      longitude: longitude
    })
  }
  return (
    <div className='Location'>
      <Autocomplete
        inputValue={icountry}
        value={country}
        id='country-search'
        options={countries}
        onChange={handleCountryChange}
        onInputChange={(event, newInputValue) => {
          if (newInputValue === '') {
            setStateDisable(true)
            setState(null)
            setCountry(null)
          }
          setiCountry(newInputValue);
        }}
        renderInput={(params) => <TextField {...params} label="Countries" />}
        isOptionEqualToValue={(option, value) => option.value === value.value}
      />
      <Autocomplete
        disabled={isStateDisable}
        inputValue={istate}
        value={state}
        id='state-search'
        options={states}
        onChange={handleStateChange}
        onInputChange={(event, newInputValue) => {
          if (newInputValue === '') {
            setCityDisable(true)
            setState(null)
            setCity(null)
          }
          setiState(newInputValue);
        }}
        renderInput={(params) => <TextField {...params} label="States" />}
        isOptionEqualToValue={(option, value) => option.value === value.value}
      />
      <Autocomplete
        disabled={isCityDisable}
        inputValue={icity}
        value={city}
        id='city-search'
        options={cities}
        onChange={handleCityChange}
        onInputChange={(event, newInputValue) => {
          setiCity(newInputValue)
        }}
        renderInput={(params) => <TextField {...params} label="Cities" />}
        isOptionEqualToValue={(option, value) => option.value === value.value}
      />
    </div >
  )
}
export default Location