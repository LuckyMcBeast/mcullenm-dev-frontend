import React from 'react'

const DisplayText = (props) => {
    return (
        <div className='skillText'>
            <h3>{props.skill}</h3>
            <p>{props.copy}</p>
        </div>
    )
}

const DisplayImage = (props) => {
    return (
        // Image needs to be stored in public
        <div className='skillImage' style={{ backgroundImage : `url(/${props.image})` }}>
            <a href={props.link}>Check It Out</a>
        </div>
    )
}


const SkillSet = (props) => {
    const { skill, copy, image, link, directionSwitch } = props;

    return (
        <div className="skillContainer">
            {directionSwitch ?
                <div className="skill">
                    <DisplayImage link={link} image={image}/>
                    <DisplayText skill={skill} copy={copy}/>
                </div>
                :
                <div className="skill">
                    <DisplayText skill={skill} copy={copy}/>
                    <DisplayImage link={link} image={image}/>
                </div>
            }
        </div>
    )
}

export default SkillSet