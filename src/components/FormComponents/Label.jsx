import React from 'react'

function Label(props) {
  const { label, name } = props
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
    </div>
  )
}

export default Label
