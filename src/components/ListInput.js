import React from 'react'
import InputOption from './InputOption'
function ListInput(props) {
  return (
    <div>
    <label htmlFor={props.input_name}></label>
          <input list={props.input_name} id={props.input_name} name={props.input_name}  required/>
          <datalist id={props.input_name}>
            <InputOption data={props.data}></InputOption>
          </datalist>
          
    </div>
  )
}

export default ListInput