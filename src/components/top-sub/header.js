import React from 'react'
import personalLogo from '../../img/personalLogoShadow.png'

const Header = (props) => {


    return (
        <div className="Header">
            <div className="headLogo">
                <img src={personalLogo} alt="M. Cullen McClellan Logo" />
            </div>
            <nav>
                <a href='#'>Contact Me</a>
            </nav>
        </div>
    )
}

export default Header