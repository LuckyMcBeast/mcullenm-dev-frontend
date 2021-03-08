import React from 'react'
import Header from './top-sub/header'
import Banner from './top-sub/banner'
import DevIcons from './top-sub/devicons'

const Top = (props) => {


    return (
        <div className="Top">
        <Header/>
        <Banner/>
        <DevIcons/>
        </div>
    )
}

export default Top