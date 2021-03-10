import React from 'react'
import { icons } from '../../utils/data'

const DevIcons = (props) => {

    const iconColors = ['yellow', 'blue','green', 'orange']
    let colorTracker = 0;
    console.log(colorTracker);

    function colorSelector(colors){
        let returnVal;
        if(colorTracker > colors.length - 1){
            colorTracker = 0;
        }
        returnVal = colors[colorTracker];
        colorTracker++;
        return returnVal;
    }

    return (
        <div className="DevIcons">
            {icons.map((iconValue) => {
               return <iconValue.value className={colorSelector(iconColors)}/>
            })}
        </div>
    )
}

export default DevIcons