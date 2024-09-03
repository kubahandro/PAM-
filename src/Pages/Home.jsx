import React from 'react'
import '../Pages/Home.css'
import Carousel from 'react-bootstrap/Carousel';
import Page2 from '../components/homepage/Page2'
import Page1 from '../components/homepage/Page1'
import Page3 from '../components/homepage/Page3'
import Page4 from '../components/homepage/Page4'
import Page5 from '../components/homepage/Page5'
import Page from '../components/homepage/Page'
import '../components/Footer/Logotip'
import '../components/component/Component9'
import Component9 from '../components/component/Component9';
import Logotip from '../components/Footer/Logotip';
function Home() {
  return (
    <>
      <div className="wrapper">
      <div> <Carousel>
          <Carousel.Item>
            <Page />
          </Carousel.Item>
          <Carousel.Item>
            <Page1 />
          </Carousel.Item>
          <Carousel.Item>
            <Page2 />

          </Carousel.Item>
          <Carousel.Item>
            <Page3 />
          </Carousel.Item>
          <Carousel.Item>
            <Page4 />

          </Carousel.Item>
          <Carousel.Item>
            <Page5 />

          </Carousel.Item>
        </Carousel></div>
        <Logotip/> 
        <Component9/>
      </div>
    </>
  )
}

export default Home
