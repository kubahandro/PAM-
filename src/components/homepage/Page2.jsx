import React from 'react'
import home2 from '../../assets/images/home2.png'
import './page.css'

function Page2() {
  return (
    <div className='page1'>
          <div className="pageimg"><img  src={home2} alt="" /></div> 
      <div className='page1-title'>
        <div className='page1-title-top'><p>investments</p>
        <p>business relocation</p>
        <p>family relocation</p></div>
        <p className="porter">Invest in property in Cyprus</p>
        <h5>Globally known as one of the safest places to live in the world, Cyprus is the ideal location for families. The healthy lifestyle and family-friendly communities have much to offer to every member of your family. </h5>
        <button className='page1btn'>Check more</button>
      </div>
    </div>
  )
}

export default Page2
