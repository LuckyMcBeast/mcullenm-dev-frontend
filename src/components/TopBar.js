import React from "react";
import HeaderTextAsCode from "./HeaderTextAsCode";

const topLevelDivStyling = "flex flex-row-reverse sm:w-full bg-one-dark-black h-20 filter drop-shadow-xl"
const headerTextDivStyling = "flex p-1 mr-1"

export default function TopBar(){
    return(
        <div className={topLevelDivStyling} data-testid="topBar">
            <div className={headerTextDivStyling} data-testid="title">
                <HeaderTextAsCode/>
            </div>
        </div>
    )
}