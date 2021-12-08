import React from "react";
import Blogs from "./Blogs";
import TopBar from "./TopBar";

const topLevelDivStyling = "max-w-screen sm:w-full flex flex-col"

export default function MainContent() {
    return (
        <div className={topLevelDivStyling} data-testid="mainContent">
            <TopBar/>
            <Blogs/>
        </div>
    )
}