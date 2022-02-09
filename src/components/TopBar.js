import React from "react";
import HeaderTextAsCode from "./HeaderTextAsCode";

const topLevelDivStyling = "flex flex-row-reverse sm:w-full bg-one-dark-black h-32 sm:h-20 filter drop-shadow-xl p-2"
const headerTextDivStyling = "flex p-1 mr-1 min-h-full"

export default function TopBar(){
    return(
        <div className={topLevelDivStyling} data-testid="topBar">
            <div className={headerTextDivStyling} data-testid="title">
                <HeaderTextAsCode/>
            </div>
        </div>
    )
}