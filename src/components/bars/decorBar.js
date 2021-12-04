import React from "react";
import TopBar from "./topBar";
import SideBar from "./sideBar";

const topLevelDivStyling = "flex flex-row w-auto"

export default function DecorBar() {
    return (
        <div className={topLevelDivStyling}>
            <SideBar/>
            <TopBar/>
        </div>
    )
}