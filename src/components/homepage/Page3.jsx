import React from 'react'
import home3 from '../../assets/images/home3.png'
import './page.css'

function Page3() {
  return (
    <div className='page1 wrapper'>
         <div className="pageimg"><img  src={home3} alt="" /></div> 
      <div className='page1-title'>
        <div className='page1-title-top'><p>investments</p>
        <p>business relocation</p>
        <p>family relocation</p></div>
        <p className="porter">Business Relocation</p>
        <h5>Cyprus has a lot to offer for business entrepreneurs who aim to reach for more and expand their business goals. The attractive tax benefits and office locations have transformed Cyprus into a country with endless business opportunities for everyone.</h5>
        <button className='page1btn'>Check more</button>
      </div>
    </div>
  )
}

export default Page3
