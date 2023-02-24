import '../style/Location.css'
import { React, useState, useEffect } from 'react'
import { Autocomplete, TextField } from '@mui/material'
import data from '../asset/countries+states+cities.json'
import axios from 'axios'
import { BsCheckCircleFill } from 'react-icons/bs'
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
  const [fullLocation, SetFullLocation] = useState(false);
  useEffect(() => {
    setCountries(data.map((data) => ({
      label: data.name,
      id: data.id
    })))
  }, [])
  const handleCountryChange = (event, newValue) => {
    if (newValue !== null) {
      setCountry(newValue.label)
      setState(null)
      const states_arr = data.find(country => country.name === newValue.label)
      if (states_arr.states.length > 0) {
        setStates(states_arr.states.map((state) =>
        ({
          label: state.name,
          id: state.id
        })
        ))
        setStateDisable(false)
        SetFullLocation(false)
      }

      else {
        handleSetLocation(states_arr.name, states_arr.longitude, states_arr.latitude)
        setStateDisable(true)
      }
    }
  }
  const handleStateChange = (event, newValue) => {
    if (newValue !== null) {
      setState(newValue.label)
      setCity(null)
      const cities_arr = data.find(countries => countries.name === country).states.find(state => state.name === newValue.label);
      if (cities_arr.cities.length > 0) {
        setCities(cities_arr.cities.map((city) =>
        ({
          label: city.name,
          id: city.id
        })
        ))
        setCityDisable(false)
        SetFullLocation(false)
      }
      else {
        handleSetLocation(cities_arr.name, cities_arr.longitude, cities_arr.latitude)
        setCityDisable(true)
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
    SetFullLocation(true)
  }
  return (
    <div className='Location-container'>
      <div className='Location' style={{backgroundColor: props.style.prim, color: props.style.seco}}>
        <h1>Choose a location</h1>
        <Autocomplete
          inputValue={icountry}
          value={country}
          id='country-search'
          options={countries}
          onChange={handleCountryChange}
          onInputChange={(event, newInputValue) => {
            if (newInputValue === '') {
              SetFullLocation(false);
              setStateDisable(true)
              setState(null)
              setCountry(null)
            }
            setiCountry(newInputValue);
          }}
          renderInput={(params) => <TextField sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: props.style.seco,
                borderWidth: "3px",
                boxShadow: fullLocation ? `0px 0px 15px ${props.style.seco}, 0px 0px 15px ${props.style.seco}` : "0px 0px 0px white",
                fontSize: "1.3rem",
                transition: "0.3s"
              },
              '&:hover fieldset': {
                borderColor: props.style.tert,
              },
              '&.Mui-focused fieldset': {
                borderColor: props.style.seco,
                borderWidth: "4.5px"
              },
            },
            '& .MuiInputLabel-root': {
              fontWeight: "600",
              color: props.style.seco,
              fontSize: "1.2rem",
              fontFamily: "Mynerve"
            },
            '& label.Mui-focused': {
              color: props.style.seco,
            },
            '& .MuiInputBase-input': {
              color: props.style.seco,
              fontSize: "1.2rem",
              fontFamily: "Mynerve",
               fontWeight: "600"
            }
          }} {...params} label="Countries" />}
          isOptionEqualToValue={(option, value) => option.value === value.value}
          sx={{ width: "80%" }}
        />
        <Autocomplete
          title={fullLocation ? "There is no smaller region division": (isStateDisable ? "Pick a country first" : "" ) } 
          disabled={isStateDisable}
          inputValue={istate}
          value={state}
          id='state-search'
          options={states}
          onChange={handleStateChange}
          onInputChange={(event, newInputValue) => {
            if (newInputValue === '') {
              SetFullLocation(false)
              setCityDisable(true)
              setState(null)
              setCity(null)
            }
            setiState(newInputValue);
          }}
          renderInput={(params) => <TextField
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: props.style.seco,
                  borderWidth: "3px",
                  boxShadow: fullLocation ? ` 0px 0px 15px ${props.style.seco},0px 0px 15px ${props.style.seco}` : "0px 0px 0px white",
                  fontSize: "1.3rem",
                  transition: "0.3s"
                },
                '&:hover fieldset': {
                  borderColor: props.style.tert,
                },
                '&.Mui-focused fieldset': {
                  borderColor: props.style.seco,
                  borderWidth: "4.5px"
                },
              },
              '& .MuiInputLabel-root': {
                fontWeight: "600",
                color: props.style.seco,
                fontSize: "1.2rem",
                fontFamily: "Mynerve"
              },
              '& label.Mui-focused': {
                color: props.style.seco,
              },
              '& .MuiInputBase-input': {
                color: props.style.seco,
                fontSize: "1.2rem",
                fontFamily: "Mynerve",
                 fontWeight: "600"
              }
            }}{...params} label="States" />}
          isOptionEqualToValue={(option, value) => option.value === value.value}
          sx={{ width: "80%" }}
        />
        <Autocomplete
          title={fullLocation ? "There is no smaller region division" : (isCityDisable ? "Pick a state first" : "")} 
          disabled={isCityDisable}
          inputValue={icity}
          value={city}
          id='city-search'
          options={cities}
          onChange={handleCityChange}
          onInputChange={(event, newInputValue) => {
            if (newInputValue === '') {
              SetFullLocation(false)
              setCity(newInputValue)
            }
            setiCity(newInputValue)
          }}
          renderInput={(params) => <TextField
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: props.style.seco,
                  borderWidth: "3px",
                  boxShadow: fullLocation ? `0px 0px 15px ${props.style.seco}, 0px 0px 15px ${props.style.seco}` : "0px 0px 0px white ",
                  fontSize: "1.3rem",
                  transition: "0.3s"
                },
                '&:hover fieldset': {
                  borderColor: props.style.tert,
                },
                '&.Mui-focused fieldset': {
                  borderColor: props.style.seco,
                  borderWidth: "4.5px"
                },
              },
              '& .MuiInputLabel-root': {
                fontWeight: "600",
                color: props.style.seco,
                fontSize: "1.2rem",
                fontFamily: "Mynerve"
              },
              '& label.Mui-focused': {
                color: props.style.seco,
              },
              '& .MuiInputBase-input': {
                color: props.style.seco,
                fontSize: "1.2rem",
                fontFamily: "Mynerve",
                fontWeight: "600"
              }
            }}{...params} label="Cities" />}
          isOptionEqualToValue={(option, value) => option.value === value.value}
          sx={{width: "80%"}}
        />
      </div>
    </div >
  )
}
export default Location