import { React, useState, useEffect } from 'react'
import { Autocomplete } from '@mui/material'
import axios from 'axios'
import '../style/Location.css'
function Location() {
  const [country, setCountry] = useState([]);
  const [states, setState] = useState([]);
  const [cities, setCities] = useState([]);
  const [values, setValues] = useState();
  useEffect(() => {
  
})
  return (
    <div className='Location'>
    <Autocomplete>
        
      </Autocomplete>
      <Autocomplete>

      </Autocomplete>
      <Autocomplete>

      </Autocomplete>
    </div>
  )
}

export default Location