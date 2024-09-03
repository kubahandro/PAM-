
import React from 'react'
import home2 from '../../assets/images/home2.png'
import './servise.css';
import Sertic from './sertic';
import Servic from './servic';
import Servikse from './servikse';
function Servises() {
    return (
        <div className='box'>
            <div className='boxbox'><span> Our Services</span>
                <hr /></div>
            <div className='content'>
                <Servikse />
                <Sertic />
                <Servic />
            </div>
        </div>
    )
}

export default Servises
