import React from 'react'

const PressCard = ({company, description}) => {
  return (
    <div className='flex flex-col space-y-4 text-start my-3'>
        <h4 className='font-medium text-secondary text-start text-lg'>{company}</h4>
        <p className='text-base '>{description}</p>
    </div>
  )
}

export default PressCard