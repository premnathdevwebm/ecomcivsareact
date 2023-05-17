import React from 'react'
import "./Attraction.scss";
const Attraction = () => {
  return (
    <div className='container'>
        <div className='item'><i className='las la-leaf icon' />100% Natural</div>
        <div className='item'> <i className='las la-wine-bottle icon'/>Dairy and Nut Free</div>
        <div className='item'><i className='lab la-canadian-maple-leaf icon' />Soy and Gluten Free</div>
        <div className='item'> <i className='las la-cubes icon'/>No Added Sugar</div>
    </div>
  )
}

export default Attraction