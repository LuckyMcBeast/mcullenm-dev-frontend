import './style/style.css'
import DecorBar from "./components/bars/decorBar";

const appLevelStyling = "p-0 bg-mine-shaft-500 w-screen"

function App() {
    return (
        <div className={appLevelStyling}>
            <DecorBar/>
        </div>
    );
}

export default App;
