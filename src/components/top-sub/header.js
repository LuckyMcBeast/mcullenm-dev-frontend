import React from 'react'
import personalLogo from '../../img/personalLogo.png'

const Header = (props) => {


    return (
        <div className="Header">
            <div className="headLogo">
                <img src={personalLogo} alt="M. Cullen McClellan Logo" />
                <h1>M. Cullen McClellan</h1>
            </div>
            <nav>
                <a href='#'>Contact Me</a>
            </nav>
        </div>
    )
}

export default Header