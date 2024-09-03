import React from 'react'
import home4 from '../../assets/images/home4.png'
import './page.css'

function Page4() {
  return (

    <div className='page1 wrapper'>
      <div className="pageimg"><img  src={home4} alt="" /></div> 
      <div className='page1-title'>
        <div className='page1-title-top'><p>investments</p>
        <p>business relocation</p>
        <p>family relocation</p></div>
        <p className="porter">Investing in Yachts</p>
        <h5>Living on an island is an adventure that opens up a wide range of experiences and possibilities. Here, you can conquer the Mediterranean Sea by renting or owning
        a yacht as part of your investment plan.</h5>
        <button className='page1btn'>Check more</button>
      </div>
    </div>
  )
}

export default Page4
