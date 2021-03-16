import React from 'react'
import Header from './top-sub/header'
import Banner from './top-sub/banner'
import DevIcons from './top-sub/devicons'
import waveTop from '../img/waveTop3.png'


const Top = (props) => {


    return (
        <div className="Top">
        <Header/>
        <Banner/>
        {/* <img id='waveTop'className='wave' src={waveTop}/> */}
        <DevIcons/>
        </div>
    )
}

export default Top