import './style/style.css'
import SideBar from "./components/sideBar";
import MainContent from "./components/mainContent";
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
