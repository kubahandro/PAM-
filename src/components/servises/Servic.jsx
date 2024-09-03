import React from 'react'
import './servise.css'
import business from '../../assets/images/busines.png'

function Servic() {
  return (

      <div className='servise'>
                <img src={business} alt="" />
                <p>Business
                Relocation</p>
                <h6>We handle the responsibility of moving your business to Cyprus, so you can focus on your business goals.</h6>
                <button>Find Out More</button>
            </div>
 
  )
}

export default Servic
