import React from 'react'

function InputOption(props) {
  return (
      props.data.map((data) => {
          return (
              <options value={data.name}>{data.name}</options>
      )
      })
  )
}

export default InputOption