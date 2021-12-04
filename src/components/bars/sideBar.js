import React from "react";
import logo from "../../img/personalLogo-small-blue.svg"

const topLevelDivStyling = "flex flex-col w-1/8 max-w-max h-screen bg-one-dark-gutterGrey shadow-xl"
const logoDivStyling = "flex rounded-full bg-one-dark-darkRed m-2"
const imgStyling = "w-16 min-h-20 m-2 p-2"

export default function SideBar() {
    return (
        <div className={topLevelDivStyling}>
            <div className={logoDivStyling}>
                <img className={imgStyling} src={logo} alt="logo"/>
            </div>
            <div className="h-full"/>
        </div>
    )
}