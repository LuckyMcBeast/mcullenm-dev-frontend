import React from 'react'
import AboutMe from './bottom-sub/aboutme'
import ContactMe from './bottom-sub/contactme'
import Footer from './bottom-sub/footer'

const Bottom = (props) => {


    return (
        <div>
            <p>Bottom</p>
            <AboutMe/>
            <ContactMe/>
            <Footer/>
        </div>
    )
}

export default Bottom