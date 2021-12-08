import './style/style.css'
import SideBar from "./components/SideBar";
import MainContent from "./components/MainContent";
import React from "react";

const appLevelStyling = "p-0 bg-mine-shaft-500 w-screen grid max-w-screen"
const topLevelDivStyling = "flex flex-row w-auto"

function App() {
    return (
        <div className={appLevelStyling}>
            <div className={topLevelDivStyling}>
                <SideBar/>
                <MainContent/>
            </div>
        </div>
    );
}

export default App;
