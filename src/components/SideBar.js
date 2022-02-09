import React from "react";
import logo from "../img/personalLogo-small-blue.svg"

const topLevelDivStyling = "flex flex-col w-0 sm:w-24 max-w-max h-auto bg-one-dark-gutterGrey shadow-xl invisible sm:visible float-left"
const logoDivStyling = "flex rounded-full bg-rocket-blue-700 m-2"
const imgStyling = "w-16 min-h-20 m-2 p-2"

export default function SideBar() {
    return (
            <div className={topLevelDivStyling} data-testid="sideBar">
                <div className={logoDivStyling} data-testid="logoContainer">
                    <img className={imgStyling} src={logo} alt="logo"/>
                </div>
                <div className="h-full" data-testid="hFullDiv"/>
        </div>
    )
}