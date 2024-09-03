import React from 'react'
import home1 from '../../assets/images/home1.png'
import './page.css'

function Page1() {
  return (
    <div  className='wrapper'>
    <div className='page1 wrapper'>
       <div className="pageimg"><img  src={home1} alt="" /></div> 
      <div className='page1-title'>
        <div className='page1-title-top'><p>investments</p>
        <p>business relocation</p>
        <p>family relocation</p></div>
      <div className="porter">  <p>Invest in property in Cyprus</p></div>
        <h5>Real estate has become a flourishing type of investment
        on the island, with an increasing number of people seeking to invest in residential and commercial property projects in Cyprus. With a confident and stable economic outlook, it is a great time to consider investing in Cyprus property. </h5>
        <button className='page1btn'>Check more</button>
      </div>
   </div>

   </div>
  )
}

export default Page1
