import React from 'react'
import '../Pages/Home.css'
import Picture from '../assets/images/picture_home1.png'
import slider1 from '../assets/svg/offer_cities_slider1_image.svg'
import slider2 from '../assets/svg/offer_cities_slider2_image.svg'
import slider3 from '../assets/svg/offer_cities_slider3_image.svg'
import slider4 from '../assets/svg/offer_cities_slider4_image.svg'

function Home() {
  return (
    <>
      <div className="wrapper">
        <section className='offer1'>
          <img className="picture-home1" src={Picture} alt="" />
          <div className="offer1-text">
            <div className="offer1-text-service">
              <ul>
                <li>investments</li>
                <li>business relocation</li>
                <li>family relocation</li>
              </ul>
            </div>
            <h1>Relocating to Cyprus</h1>
            <span>Seamless – Exceptional – Experience </span>
            <p>The captivating Mediterranean island of Cyprus has become a business haven with a flourishing expat community. The strategic location that grants networking opportunities and the stability of being in the EU offers entrepreneurs the abilities they need 
            to thrive.</p>
            <div className="offer1-text-btn">
              <button>Find Out More</button>
            </div>
          </div>
          <div className="offer1-cities">
            <h5>Most popular cities</h5>
            <div className="offer1-cities-sliders">
              <div className="offer1-cities-slider">
                <img src={slider1} alt="" />
                <h4>Nicosia</h4>
              </div>
              <div className="offer1-cities-slider">
                <img src={slider2} alt="" />
                <h4>Limassol</h4>
              </div>
              <div className="offer1-cities-slider">
                <img src={slider3} alt="" />
                <h4>Paphos</h4>
              </div>
              <div className="offer1-cities-slider">
                <img src={slider4} alt="" />
                <h4>Larnaka</h4>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home
