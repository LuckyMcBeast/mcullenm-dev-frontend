import React from "react";
import Blogs from "./blogs";
import TopBar from "./topBar";

export default function MainContent() {
    return (
        <div className="max-w-screen sm:w-full flex flex-col">
            <TopBar/>
            <Blogs/>
        </div>
    )
}